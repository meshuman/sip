"""Check the Sīpa content folder against the sitemap and the brand rules, and write content/TODO.md."""
import json, os, re, sys
import yaml

ROOT = sys.argv[1]          # content/
ROUTES = sys.argv[2]        # sitemap.routes.json
routes = json.load(open(ROUTES))['routes']
route_ids = {r['id'] for r in routes}
static_paths = {r['path'] for r in routes if '[' not in r['path']}

BANNED = ['exquisite', 'stunning', 'timeless', 'curated', 'authentic', 'exotic', 'mystical', 'unlock', 'elevate',
          'journey', 'handcrafted with love', 'ethically sourced']
problems, todos, covered = [], [], {}
collections = {d: set() for d in ('rooms', 'crafts', 'meaning', 'places', 'care', 'journal')}

def frontmatter(path):
    txt = open(path, encoding='utf-8').read()
    if path.endswith(('.yml', '.yaml')):
        return yaml.safe_load(txt), ''
    if not txt.startswith('---'):
        return None, txt
    _, fm, body = txt.split('---', 2)
    return yaml.safe_load(fm), body

def walk_strings(o):
    if isinstance(o, str): yield o
    elif isinstance(o, dict):
        for v in o.values(): yield from walk_strings(v)
    elif isinstance(o, list):
        for v in o: yield from walk_strings(v)

files = []
for dp, _, fs in os.walk(ROOT):
    for f in fs:
        if f.endswith(('.md', '.yml', '.txt')):
            files.append(os.path.join(dp, f))
files.sort()

for p in files:
    rel = os.path.relpath(p, ROOT)
    if rel in ('README.md', 'TODO.md'):
        continue
    raw = open(p, encoding='utf-8').read()
    try:
        fm, body = frontmatter(p) if not p.endswith('.txt') else (None, raw)
    except Exception as e:
        problems.append(f'{rel}: YAML error: {e}')
        continue
    top = rel.split(os.sep)[0]
    if top in collections and fm:
        if not rel.endswith('_template.md'):
            collections[top].add(fm.get('slug'))
    if fm:
        for key in ('id',):
            if fm.get(key): covered.setdefault(fm[key], []).append(rel)
        for i in fm.get('ids', []) or []:
            covered.setdefault(i, []).append(rel)
        seo = fm.get('seo') or {}
        t, d = seo.get('title'), seo.get('description')
        if isinstance(t, str) and '{' not in t and len(t) > 60:
            problems.append(f'{rel}: seo.title {len(t)} chars > 60: {t}')
        if isinstance(d, str) and '{' not in d and len(d) > 155:
            problems.append(f'{rel}: seo.description {len(d)} chars > 155')
        # collection entries carry seo.description only
        has_todo = '{{TODO' in raw
        status = fm.get('status')
        if has_todo and status not in ('needs-input', 'sample') and 'site' + os.sep not in rel:
            problems.append(f'{rel}: has TODOs but status is {status}')
        if not has_todo and status == 'needs-input':
            problems.append(f'{rel}: status needs-input but no TODOs')
    # banned words, outside sample/template guidance
    low = raw.lower()
    for w in BANNED:
        for m in re.finditer(r'\b' + re.escape(w) + r'\b', low):
            ctx = raw[max(0, m.start() - 30): m.end() + 30].replace('\n', ' ')
            problems.append(f'{rel}: banned word "{w}": …{ctx}…')
    # TODOs
    for m in re.finditer(r'\{\{TODO:?\s*([^}]*)\}\}', raw):
        line = raw[:m.start()].count('\n') + 1
        todos.append((rel, line, m.group(1).strip() or '(fill in)'))
    # internal links
    for m in re.finditer(r'\]\((/[^)\s#?]*)', raw):
        href = m.group(1).rstrip('/') or '/'
        if href in static_paths: continue
        parts = href.strip('/').split('/')
        coll = {'rooms': 'rooms', 'crafts': 'crafts', 'meaning': 'meaning', 'places': 'places', 'care': 'care', 'journal': 'journal'}
        if len(parts) == 2 and parts[0] in coll:
            continue  # checked after all slugs are known
        if '{' in href: continue
        problems.append(f'{rel}: link to unknown route {href}')

# collection links
for p in files:
    raw = open(p, encoding='utf-8').read()
    for m in re.finditer(r'\]\((/(rooms|crafts|meaning|places|care|journal)/([a-z0-9-]+))', raw):
        if m.group(3) not in collections[m.group(2)] and m.group(3) != 'refills':
            problems.append(f'{os.path.relpath(p, ROOT)}: link to missing {m.group(2)} entry {m.group(3)}')

missing = sorted(route_ids - set(covered))
extra = sorted(set(covered) - route_ids)
print('routes covered:', len(route_ids) - len(missing), 'of', len(route_ids))
print('missing routes:', missing or 'none')
print('unknown ids:', extra or 'none')
print('collections:', {k: sorted(v) for k, v in collections.items()})
print('problems:', len(problems))
for x in problems: print('  -', x)

# TODO.md
by_file = {}
for rel, line, text in todos:
    by_file.setdefault(rel, []).append((line, text))
out = ['# What Sīpa needs to supply before launch', '',
       f'{len(todos)} items across {len(by_file)} files, generated from every `{{{{TODO: …}}}}` in this folder. Tick them off as you fill them in.', '']
groups = [('Site and policies', ('site', 'pages')), ('Collections', ('rooms', 'places', 'care', 'journal', 'crafts', 'meaning')), ('Templates', ('templates',))]
for title, prefixes in groups:
    rows = [(f, items) for f, items in sorted(by_file.items()) if f.split(os.sep)[0] in prefixes]
    if not rows: continue
    out += [f'## {title}', '']
    for f, items in rows:
        out.append(f'**{f}**')
        out += [f'- [ ] {t} (line {ln})' for ln, t in items]
        out.append('')
open(os.path.join(ROOT, 'TODO.md'), 'w').write('\n'.join(out))
print('TODO items:', len(todos), 'files:', len(by_file))
