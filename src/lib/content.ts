// Loads the Markdown content in /content (front matter + body) at build time.
// Server-only: uses the file system. Import from server components, route handlers and generate* functions.
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { SAMPLE_FILLS, SAMPLE_JOURNAL_DATES } from './sample-fills';

const ROOT = path.join(process.cwd(), 'content');
const USE_SAMPLES = process.env.SAMPLE_CONTENT !== 'false';
const SHOW_TODOS = process.env.NODE_ENV !== 'production';

/** Curly apostrophes inside words: it's → it’s */
const curly = (s: string) => s.replace(/(?<=[A-Za-z])'(?=[A-Za-z])/g, '’');

/**
 * {{TODO: …}} markers are open questions for the Sīpa team. In development they show as highlighted
 * "To confirm" notes; in production builds they are removed.
 */
function todos(s: string, html: boolean): string {
  if (SHOW_TODOS && html) {
    return s.replace(/\{\{TODO:?\s*([^}]*)\}\}/g, (_m, t: string) => `<mark class="todo" title="Open question for the Sīpa team">To confirm${t ? ': ' + t.trim() : ''}</mark>`);
  }
  return s.replace(/^\s*\{\{TODO[^}]*\}\}\s*$/gm, '').replace(/\s*\{\{TODO[^}]*\}\}/g, '');
}

const clean = (s: unknown) => (typeof s === 'string' ? curly(todos(s, false)).trim() : s);

function toHtml(md: string): string {
  return marked.parse(curly(todos(md, true)), { async: false }) as string;
}

interface Raw {
  data: Record<string, unknown>;
  body: string;
  file: string;
}

function read(rel: string, sampleKey?: string): Raw | null {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return null;
  let text = fs.readFileSync(file, 'utf8');
  if (USE_SAMPLES && sampleKey && SAMPLE_FILLS[sampleKey]) {
    for (const [a, b] of SAMPLE_FILLS[sampleKey]) text = text.split(a).join(b);
  }
  const { data, content } = matter(text);
  return { data, body: content, file };
}

function listDir(dir: string): string[] {
  return fs
    .readdirSync(path.join(ROOT, dir))
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((f) => f.replace(/\.md$/, ''))
    .sort();
}

function pick<T extends string>(data: Record<string, unknown>, keys: readonly T[]): Record<T, string> {
  const out = {} as Record<T, string>;
  for (const k of keys) if (data[k] != null) out[k] = clean(data[k]) as string;
  return out;
}

const seoOf = (data: Record<string, unknown>) => {
  const seo = (data.seo ?? {}) as { title?: string; description?: string };
  return { title: seo.title ? (clean(seo.title) as string) : undefined, description: seo.description ? (clean(seo.description) as string) : undefined };
};

// ---------- typed collections ----------

export interface Place {
  slug: string;
  code: string;
  name: string;
  nameNe: string;
  alsoKnownAs?: string;
  region: string;
  epithet: string;
  summary: string;
  html: string;
  description?: string;
}
export interface Room {
  slug: string;
  number: number;
  name: string;
  line: string;
  wallText: string;
  description?: string;
}
export interface Craft {
  slug: string;
  name: string;
  nameNe: string;
  code: string;
  definition: string;
  stages: { name: string; line: string }[];
  html: string;
  description?: string;
}
export interface Topic {
  slug: string;
  name: string;
  nameNe: string;
  group: string;
  groupName: string;
  definition: string;
  html: string;
  description?: string;
}
export interface CareGuide {
  slug: string;
  material: string;
  summary: string;
  kit: { name: string; size: string; line: string }[];
  steps: { when: string; step: string }[];
  html: string;
  description?: string;
}
export interface Post {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingMinutes: number;
  html: string;
  description?: string;
}

const cache = new Map<string, unknown>();
function memo<T>(key: string, fn: () => T): T {
  if (!cache.has(key)) cache.set(key, fn());
  return cache.get(key) as T;
}

export const getPlaces = () =>
  memo(
    'places',
    () =>
      Object.fromEntries(
        listDir('places').map((slug) => {
          const r = read(`places/${slug}.md`)!;
          const f = pick(r.data, ['code', 'name', 'nameNe', 'alsoKnownAs', 'region', 'epithet', 'summary'] as const);
          const place: Place = {
            slug,
            ...f,
            epithet: f.epithet || (slug === 'lumbini' ? 'birthplace of the Buddha' : ''),
            html: toHtml(r.body),
            description: seoOf(r.data).description,
          };
          return [slug, place];
        }),
      ) as Record<string, Place>,
  );

export const getRooms = () =>
  memo(
    'rooms',
    () =>
      Object.fromEntries(
        listDir('rooms').map((slug) => {
          const r = read(`rooms/${slug}.md`)!;
          const f = pick(r.data, ['name', 'line', 'wallText'] as const);
          const room: Room = { slug, number: Number(r.data.number), ...f, description: seoOf(r.data).description };
          return [slug, room];
        }),
      ) as Record<string, Room>,
  );

export const getCrafts = () =>
  memo(
    'crafts',
    () =>
      Object.fromEntries(
        listDir('crafts').map((slug) => {
          const r = read(`crafts/${slug}.md`)!;
          const f = pick(r.data, ['name', 'nameNe', 'code', 'definition'] as const);
          const stages = ((r.data.stages as { name: string; line: string }[]) ?? []).map((s) => ({ name: clean(s.name) as string, line: clean(s.line) as string }));
          const craft: Craft = { slug, ...f, stages, html: toHtml(r.body), description: seoOf(r.data).description };
          return [slug, craft];
        }),
      ) as Record<string, Craft>,
  );

export const getTopics = () =>
  memo(
    'meaning',
    () =>
      Object.fromEntries(
        listDir('meaning').map((slug) => {
          const r = read(`meaning/${slug}.md`)!;
          const f = pick(r.data, ['name', 'nameNe', 'group', 'groupName', 'definition'] as const);
          const topic: Topic = { slug, ...f, html: toHtml(r.body), description: seoOf(r.data).description };
          return [slug, topic];
        }),
      ) as Record<string, Topic>,
  );

export const getCareGuides = () =>
  memo(
    'care',
    () =>
      Object.fromEntries(
        listDir('care').map((slug) => {
          const r = read(`care/${slug}.md`)!;
          const f = pick(r.data, ['material', 'summary'] as const);
          const kit = ((r.data.kit as CareGuide['kit']) ?? []).map((k) => ({ name: clean(k.name) as string, size: clean(k.size) as string, line: clean(k.line) as string }));
          const steps = ((r.data.steps as CareGuide['steps']) ?? []).map((s) => ({ when: clean(s.when) as string, step: clean(s.step) as string }));
          const guide: CareGuide = { slug, material: f.material, summary: f.summary, kit, steps, html: toHtml(r.body), description: seoOf(r.data).description };
          return [slug, guide];
        }),
      ) as Record<string, CareGuide>,
  );

export const getPosts = () =>
  memo('journal', () =>
    listDir('journal')
      .map((slug) => {
        const r = read(`journal/${slug}.md`)!;
        const f = pick(r.data, ['title', 'dek'] as const);
        const rawDate = String(r.data.date ?? '');
        const date = /^\d{4}-\d{2}-\d{2}$/.test(rawDate) ? rawDate : (SAMPLE_JOURNAL_DATES[slug] ?? '2026-08-01');
        const post: Post = { slug, ...f, date, readingMinutes: Number(r.data.readingMinutes ?? 3), html: toHtml(r.body), description: seoOf(r.data).description };
        return post;
      })
      .sort((a, b) => b.date.localeCompare(a.date)),
  );

// ---------- single pages (content/pages/*.md) ----------

export interface PageSection {
  component: string;
  [key: string]: unknown;
}
export interface PageContent {
  name: string;
  title: string;
  phase?: string;
  head: { label?: string; ne?: string; heading: string; lead?: string };
  lists: { variant?: string; items: Record<string, string>[] }[];
  forms: { variant?: string; heading?: string; lead?: string; fields?: string[]; topics?: string[]; button?: string; success?: string }[];
  aside?: string;
  html: string;
  seo: { title?: string; description?: string };
}

export function getPage(name: string): PageContent {
  return memo(`page:${name}`, () => {
    const r = read(`pages/${name}.md`, name);
    if (!r) throw new Error(`Missing content/pages/${name}.md`);
    const sections = (r.data.sections as PageSection[]) ?? [];
    const head = sections.find((s) => s.component === 'ChapterHeader') ?? {};
    const page: PageContent = {
      name,
      title: clean(r.data.title) as string,
      phase: r.data.phase as string | undefined,
      head: pick(head as Record<string, unknown>, ['label', 'ne', 'heading', 'lead'] as const) as PageContent['head'],
      lists: sections
        .filter((s) => (s.component === 'List' || s.component === 'CareKit') && Array.isArray(s.items))
        .map((s) => ({
          variant: s.variant as string,
          items: (s.items as Record<string, string>[]).map((it) => Object.fromEntries(Object.entries(it).map(([k, v]) => [k, clean(String(v)) as string]))),
        })),
      forms: sections.filter((s) => s.component === 'Form') as PageContent['forms'],
      aside: (() => {
        const s = sections.find((x) => x.component === 'Prose' && typeof x.text === 'string');
        return s ? toHtml(s.text as string) : undefined;
      })(),
      html: r.body.trim() ? toHtml(r.body) : '',
      seo: seoOf(r.data),
    };
    if (!page.head.heading) page.head.heading = page.title;
    return page;
  });
}
