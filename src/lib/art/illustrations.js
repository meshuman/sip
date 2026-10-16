// Placeholder illustration engine for the prototype.
// Draws a studio "plate" for each piece, and the stage-by-stage images used in the making film,
// as SVG markup strings. Replace with real photographs and film: see <Plate /> in src/components/ui/Plate.tsx.
/* eslint-disable */
// Sīpa prototype: illustrated plates. Every piece is drawn in SVG as a studio plate; stages of making re-use the same drawing.
let UID = 0; // fallback counter when no uid is passed
const MAT = {
  gilded: ['#fbe8a8', '#e3b553', '#a8772a', '#5c3e12'],
  copper: ['#f2b48b', '#c77b4c', '#8b4b27', '#4a2312'],
  raw: ['#ecab84', '#c0703f', '#88431f', '#4b200c'],
  bronze: ['#e3c48c', '#b48f52', '#76592b', '#3b2b13'],
  bronzeRaw: ['#e9b98c', '#b9804a', '#7a4f26', '#3d2410'],
  stone: ['#8f8e89', '#62615c', '#3c3b38', '#1d1d1b'],
  stoneRough: ['#b2b1ab', '#8b8a84', '#64635e', '#3d3c39'],
  wood: ['#dcab78', '#b57d4a', '#7f5129', '#4a2c13'],
  woodPale: ['#ecc79c', '#d3a473', '#a8784a', '#6f4a27'],
  woodOiled: ['#c18450', '#94592b', '#633716', '#341b08'],
  wax: ['#f6ecce', '#e9d8a9', '#d0b985', '#a18a5b'],
  clay: ['#bf9070', '#9a6d4e', '#704c35', '#47291b'],
  molten: ['#fff4c2', '#ffbf57', '#ef7a1c', '#962f05'],
  lapis: ['#86a3e6', '#4467bd', '#24428f', '#11224f'],
  jade: ['#9ad8b2', '#47a372', '#25744d', '#0f3f28']
};
const PAPER = '#efe1c1', INK = '#1d1a16', MRED = '#b4361f', MYEL = '#e0a22c', MGRN = '#3f7a4a', MBLU = '#2f5f8f', MPNK = '#d9806e';

function grad(id, c) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="1" y2=".3"><stop offset="0" stop-color="${c[0]}"/><stop offset=".36" stop-color="${c[1]}"/><stop offset=".72" stop-color="${c[2]}"/><stop offset="1" stop-color="${c[3]}"/></linearGradient>`;
}
function texFilter(id, type) {
  if (type === 'stone') return `<filter id="${id}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="1.15" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.3 1.3"/><feComposite in2="SourceGraphic" operator="in"/></filter>`;
  return `<filter id="${id}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".012 .34" numOctaves="3" seed="9"/><feColorMatrix values="0 0 0 0 .12  0 0 0 0 .06  0 0 0 0 .01  0 0 0 -2.6 1.4"/><feComposite in2="SourceGraphic" operator="in"/></filter>`;
}
function svgWrap(inner, bare) {
  return `<svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid ${bare ? 'meet' : 'slice'}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${inner}</svg>`;
}
function studio(id, shadowW) {
  return `<defs><radialGradient id="${id}bg" cx=".4" cy=".36" r=".95"><stop offset="0" stop-color="#f0ede5"/><stop offset=".62" stop-color="#d9d5ca"/><stop offset="1" stop-color="#b7b2a5"/></radialGradient><linearGradient id="${id}fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfcabd"/><stop offset="1" stop-color="#aea898"/></linearGradient><filter id="${id}bl" x="-50%" y="-200%" width="200%" height="500%"><feGaussianBlur stdDeviation="9"/></filter></defs><rect width="400" height="500" fill="url(#${id}bg)"/><rect y="444" width="400" height="56" fill="url(#${id}fl)" opacity=".75"/><ellipse cx="216" cy="447" rx="${shadowW}" ry="11" fill="#2a2620" opacity=".38" filter="url(#${id}bl)"/>`;
}
function wall(id) {
  return `<defs><linearGradient id="${id}wl" x1="0" y1="0" x2=".4" y2="1"><stop offset="0" stop-color="#ebe8e0"/><stop offset="1" stop-color="#d3cec2"/></linearGradient><filter id="${id}sh" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"/></filter></defs><rect width="400" height="500" fill="url(#${id}wl)"/>`;
}

// ---------- statue silhouettes (centre x 200, base at y 444) ----------
const SH = {
  buddha(g) {
    const s = [];
    s.push('<path d="M94 444 L306 444 L300 421 C 270 409 130 409 100 421 Z"/>');
    for (let i = 0; i < 7; i++) s.push(`<ellipse cx="${112 + i * 29}" cy="417" rx="17" ry="11"/>`);
    s.push('<path d="M108 414 C 104 378 140 352 200 350 C 260 352 296 378 292 414 C 262 424 138 424 108 414 Z"/>');
    s.push('<path d="M152 226 C 146 262 140 300 142 356 L 258 356 C 260 300 254 262 248 226 C 236 212 218 206 200 206 C 182 206 164 212 152 226 Z"/>');
    if (g === 'medit') {
      s.push('<path d="M154 228 C 130 244 122 292 128 330 C 132 350 152 362 182 364 L 188 350 C 164 348 148 340 146 324 C 144 296 150 262 160 240 Z"/>');
      s.push('<path d="M246 228 C 270 244 278 292 272 330 C 268 350 248 362 218 364 L 212 350 C 236 348 252 340 254 324 C 256 296 250 262 240 240 Z"/>');
      s.push('<ellipse cx="200" cy="357" rx="34" ry="10"/>');
    } else {
      s.push('<path d="M154 228 C 130 244 124 290 128 330 C 130 352 122 380 118 412 C 118 422 132 424 134 412 C 138 386 146 360 148 334 C 150 300 152 262 160 240 Z"/>');
      s.push('<path d="M246 228 C 270 244 278 292 272 330 C 268 350 248 362 222 364 L 214 352 C 236 350 252 340 254 324 C 256 296 250 262 240 240 Z"/>');
      s.push('<ellipse cx="214" cy="352" rx="26" ry="10"/>');
    }
    s.push('<path d="M186 186 L214 186 L217 214 L183 214 Z"/>');
    s.push('<ellipse cx="170" cy="168" rx="7" ry="23"/><ellipse cx="230" cy="168" rx="7" ry="23"/>');
    s.push('<ellipse cx="200" cy="160" rx="30" ry="36"/>');
    s.push('<ellipse cx="200" cy="124" rx="19" ry="14"/><circle cx="200" cy="107" r="6"/>');
    return s.join('');
  },
  buddhaDetail(g, col) {
    return `<g fill="none" stroke="${col}" stroke-width="1.3" stroke-linecap="round" opacity=".5"><path d="M168 222 C 184 238 216 238 232 222"/><path d="M246 234 C 226 270 190 304 148 334"/><path d="M128 400 C 168 388 232 388 272 400"/><path d="M186 162 q7 4 13 0 M201 162 q7 4 13 0"/><path d="M194 182 q6 3 12 0"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${112 + i * 29} 426 L${112 + i * 29} 440"/>`).join('')}</g><circle cx="200" cy="147" r="1.7" fill="${col}" opacity=".6"/>`;
  },
  tara() {
    const s = [];
    s.push('<path d="M150 444 L312 444 L306 421 C 280 409 176 409 156 421 Z"/>');
    for (let i = 0; i < 5; i++) s.push(`<ellipse cx="${170 + i * 30}" cy="417" rx="17" ry="11"/>`);
    s.push('<path d="M150 414 C 150 380 176 356 214 352 C 262 354 296 378 292 414 C 262 424 180 424 150 414 Z"/>');
    s.push('<path d="M160 362 C 134 372 118 400 116 436 L 140 438 C 142 412 152 394 174 382 Z"/>');
    s.push('<ellipse cx="124" cy="442" rx="26" ry="7"/>');
    s.push('<path d="M156 226 C 150 262 146 300 150 356 L 252 356 C 254 300 250 262 244 226 C 234 212 218 206 200 206 C 182 206 166 212 156 226 Z"/>');
    s.push('<path d="M154 228 C 132 246 126 290 132 330 C 136 350 142 364 152 374 L 164 366 C 158 352 152 336 152 322 C 152 296 154 262 160 240 Z"/>');
    s.push('<path d="M246 228 C 268 246 274 280 264 302 C 256 314 238 308 230 296 L 240 286 C 248 294 254 288 256 276 C 258 260 250 246 240 238 Z"/>');
    s.push('<path d="M186 186 L214 186 L217 214 L183 214 Z"/>');
    s.push('<ellipse cx="200" cy="160" rx="29" ry="35"/>');
    s.push('<ellipse cx="200" cy="126" rx="24" ry="13"/>');
    s.push('<path d="M172 132 L180 104 L190 124 L200 94 L210 124 L220 104 L228 132 Z"/>');
    s.push('<ellipse cx="270" cy="176" rx="7" ry="16"/><ellipse cx="259" cy="183" rx="7" ry="15" transform="rotate(-38 259 183)"/><ellipse cx="281" cy="183" rx="7" ry="15" transform="rotate(38 281 183)"/>');
    return s.join('');
  },
  taraStem(fill) { return `<path d="M232 292 C 246 252 258 222 268 192" fill="none" stroke="${fill}" stroke-width="4" stroke-linecap="round"/>`; },
  taraDetail(col) {
    return `<g fill="none" stroke="${col}" stroke-width="1.3" stroke-linecap="round" opacity=".5"><path d="M174 232 C 186 252 214 252 226 232"/><path d="M186 162 q7 4 13 0 M201 162 q7 4 13 0"/><path d="M194 182 q6 3 12 0"/><circle cx="171" cy="186" r="4"/><circle cx="229" cy="186" r="4"/><path d="M160 400 C 196 388 250 388 286 400"/></g>`;
  },
  ganesh() {
    const s = [];
    s.push('<path d="M112 444 L288 444 L282 424 L118 424 Z"/>');
    s.push('<path d="M118 426 C 112 386 150 362 200 360 C 250 362 288 386 282 426 Z"/>');
    s.push('<circle cx="200" cy="318" r="60"/>');
    s.push('<path d="M156 250 C 148 280 148 304 160 336 L 240 336 C 252 304 252 280 244 250 C 232 234 168 234 156 250 Z"/>');
    s.push('<path d="M160 258 C 128 252 114 228 118 200 L 134 200 C 134 222 146 238 168 244 Z"/><path d="M240 258 C 272 252 286 228 282 200 L 266 200 C 266 222 254 238 232 244 Z"/>');
    s.push('<path d="M156 292 C 132 306 126 334 134 356 L 150 352 C 146 334 152 316 166 306 Z"/><path d="M244 292 C 268 306 274 334 266 356 L 250 352 C 254 334 248 316 234 306 Z"/><circle cx="262" cy="360" r="11"/>');
    s.push('<ellipse cx="144" cy="178" rx="34" ry="46"/><ellipse cx="256" cy="178" rx="34" ry="46"/>');
    s.push('<circle cx="200" cy="182" r="46"/>');
    s.push('<path d="M170 142 L178 112 L190 134 L200 104 L210 134 L222 112 L230 142 Z"/>');
    s.push('<ellipse cx="258" cy="436" rx="18" ry="9"/><circle cx="274" cy="431" r="7"/>');
    return s.join('');
  },
  ganeshExtras(fill, col) {
    return `<path d="M196 210 C 190 246 198 268 216 274 C 230 279 240 268 232 256" fill="none" stroke="${fill}" stroke-width="22" stroke-linecap="round"/><path d="M274 204 L290 150" stroke="${fill}" stroke-width="5" stroke-linecap="round"/><path d="M282 152 C 296 140 312 152 302 168 Z" fill="${fill}"/><circle cx="122" cy="188" r="12" fill="none" stroke="${fill}" stroke-width="4"/><path d="M254 440 C 236 446 226 440 222 432" fill="none" stroke="${fill}" stroke-width="2"/>`
      + `<g fill="none" stroke="${col}" stroke-width="1.3" stroke-linecap="round" opacity=".55"><path d="M120 160 C 128 196 140 214 160 220"/><path d="M280 160 C 272 196 260 214 240 220"/><path d="M196 330 q4 4 8 0"/><path d="M172 146 L228 146"/><path d="M130 400 C 170 388 230 388 270 400"/></g><path d="M214 216 L226 226" stroke="#efe5cf" stroke-width="6" stroke-linecap="round"/><path d="M186 216 L180 221" stroke="#efe5cf" stroke-width="6" stroke-linecap="round"/><circle cx="184" cy="180" r="3" fill="${col}" opacity=".8"/><circle cx="216" cy="180" r="3" fill="${col}" opacity=".8"/>`;
  },
  bell() {
    return '<g transform="translate(0 80)"><path d="M200 70 C 186 82 186 100 194 112 L206 112 C 214 100 214 82 200 70 Z"/><ellipse cx="186" cy="96" rx="5" ry="15" transform="rotate(-14 186 96)"/><ellipse cx="214" cy="96" rx="5" ry="15" transform="rotate(14 214 96)"/><path d="M192 110 L208 110 L210 172 L190 172 Z"/><ellipse cx="200" cy="184" rx="16" ry="15"/><ellipse cx="200" cy="203" rx="27" ry="10"/><path d="M152 334 C 150 262 172 208 200 202 C 228 208 250 262 248 334 C 262 342 262 356 248 360 L 152 360 C 138 356 138 342 152 334 Z"/><ellipse cx="200" cy="360" rx="50" ry="9"/></g>';
  },
  bellDetail(col) { return `<g transform="translate(0 80)" fill="none" stroke="${col}" stroke-width="1.3" opacity=".55"><path d="M160 290 C 186 298 214 298 240 290"/><path d="M155 326 C 186 334 214 334 245 326"/><path d="M194 182 q6 3 12 0"/>${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${166 + i * 14} 300 q7 -12 14 0"/>`).join('')}</g>`; },
  bowl() {
    return '<g transform="translate(0 30)"><path d="M106 296 C 108 378 158 412 200 412 C 242 412 292 378 294 296 Z"/><ellipse cx="200" cy="296" rx="94" ry="22"/></g>';
  },
  bowlDetail() {
    let m = '';
    const pts = [[140, 330], [168, 352], [196, 368], [230, 350], [258, 330], [150, 362], [184, 388], [222, 388], [262, 362], [126, 312], [276, 314], [204, 340], [176, 322], [236, 322], [214, 402], [190, 404], [160, 380], [242, 376]];
    pts.forEach(([x, y], i) => { m += `<ellipse cx="${x}" cy="${y + 30}" rx="${6 + (i % 3)}" ry="4" fill="${i % 2 ? '#fff' : '#000'}" opacity="${i % 2 ? .22 : .12}"/>`; });
    return m + '<ellipse cx="200" cy="326" rx="86" ry="17" fill="#000" opacity=".42"/>';
  }
};

function statueArt(a, id, mode, o) {
  let mat = a.mat;
  const isWood = /wood/i.test(a.mat), isStone = a.mat === 'stone';
  if (mode === 'wax') mat = 'wax';
  else if (mode === 'molten') mat = 'molten';
  else if (mode === 'raw') mat = a.mat === 'bronze' ? 'bronzeRaw' : 'raw';
  else if (mode === 'carved') mat = isWood ? 'wood' : 'stoneRough';
  else if (mode === 'rough' || mode === 'block') mat = isWood ? 'woodPale' : 'stoneRough';
  if (mode === 'final' && isStone) mat = 'stone';
  const g = `${id}m`, fill = `url(#${g})`;
  const shapes = a.kind === 'buddha' ? SH.buddha(a.g) : a.kind === 'tara' ? SH.tara() : a.kind === 'ganesh' ? SH.ganesh() : a.kind === 'bell' ? SH.bell() : SH.bowl();
  const det = MAT[mat][3];
  let defs = grad(g, MAT[mat]);
  let body = '';
  const showDetail = ['final', 'raw', 'carved', 'wax'].includes(mode);
  const tex = (isWood || isStone) && mode !== 'wax';
  if (tex) defs += texFilter(`${id}tx`, isWood ? 'wood' : 'stone');
  const extras = a.kind === 'tara' ? SH.taraStem(fill) : a.kind === 'ganesh' ? SH.ganeshExtras(fill, det) : '';
  if (mode === 'block' || mode === 'clay') {
    const blob = mode === 'clay'
      ? `<path d="M88 446 C 66 300 118 88 200 82 C 282 88 334 300 312 446 Z"/><path d="M186 84 L214 84 L208 58 L192 58 Z"/>${[[150, 200], [250, 170], [130, 330], [270, 300], [200, 400], [220, 250]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="${10 + (x % 7)}"/>`).join('')}`
      : `<rect x="${a.kind === 'bowl' ? 100 : 112}" y="${a.kind === 'bowl' ? 300 : 90}" width="${a.kind === 'bowl' ? 200 : 176}" height="${a.kind === 'bowl' ? 144 : 354}" rx="6"/>`;
    const bm = mode === 'clay' ? 'clay' : mat;
    defs += grad(`${id}b`, MAT[bm]);
    body += `<g fill="url(#${id}b)">${blob}</g>`;
    if (tex) body += `<g fill="#000" opacity=".3" filter="url(#${id}tx)">${blob}</g>`;
    if (mode === 'clay') body += `<g fill="#000" opacity=".12">${[[150, 200], [250, 170], [130, 330], [270, 300], [200, 400], [220, 250]].map(([x, y]) => `<circle cx="${x + 3}" cy="${y + 3}" r="${10 + (x % 7)}"/>`).join('')}</g>`;
  } else {
    if (mode === 'rough') {
      defs += grad(`${id}b`, MAT[mat]);
      body += `<rect x="112" y="90" width="176" height="354" rx="6" fill="url(#${id}b)" opacity=".28"/>`;
    }
    if (mode === 'molten') {
      defs += `<filter id="${id}gl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>`;
      body += `<g fill="#ff8a2a" opacity=".75" filter="url(#${id}gl)">${shapes}</g>`;
    }
    body += `<g fill="${fill}">${shapes}</g>${extras}`;
    if (tex) body += `<g fill="#000" opacity="${mode === 'final' ? .32 : .22}" filter="url(#${id}tx)">${shapes}</g>`;
    if (a.kind === 'buddha' && a.mat === 'gilded' && mode === 'final') body += '<path d="M171 150 C 172 118 228 118 229 150 C 214 140 186 140 171 150 Z" fill="#2c4a86" opacity=".9"/><ellipse cx="200" cy="124" rx="19" ry="14" fill="#2c4a86" opacity=".9"/><circle cx="200" cy="107" r="6" fill="#d9a83f"/>';
    if (showDetail) {
      if (a.kind === 'buddha') body += SH.buddhaDetail(a.g, det);
      else if (a.kind === 'tara') body += SH.taraDetail(det) + (mode === 'final' ? '<g fill="#2f6fb0"><circle cx="200" cy="112" r="3.5"/><circle cx="182" cy="118" r="2.5"/><circle cx="218" cy="118" r="2.5"/></g>' : '');
      else if (a.kind === 'bell') body += SH.bellDetail(det);
      else if (a.kind === 'bowl') body += SH.bowlDetail();
    }
  }
  const shadowW = a.kind === 'bell' ? 70 : a.kind === 'bowl' ? 104 : 118;
  if (o.bare) return svgWrap(`<defs>${defs}</defs>${body}`, true);
  return svgWrap(`${studio(id, shadowW)}<defs>${defs}</defs>${body}`);
}

// ---------- carved window panel ----------
function windowArt(id, mode, o) {
  const mat = mode === 'final' ? 'woodOiled' : mode === 'carved' ? 'wood' : 'woodPale';
  let d = grad(`${id}m`, MAT[mat]) + texFilter(`${id}tx`, 'wood') + `<clipPath id="${id}cp"><rect x="106" y="96" width="188" height="308"/></clipPath>`;
  const f = `url(#${id}m)`;
  let b = `<rect x="88" y="80" width="236" height="356" fill="#2a2620" opacity=".35" filter="url(#${id}sh)"/>`;
  if (mode === 'block') {
    b += `<rect x="82" y="72" width="236" height="356" fill="${f}"/><rect x="82" y="72" width="236" height="356" fill="#000" opacity=".28" filter="url(#${id}tx)"/><rect x="106" y="96" width="188" height="308" fill="none" stroke="#5a3a1c" stroke-width="1" stroke-dasharray="4 4" opacity=".6"/>`;
  } else {
    b += `<rect x="82" y="72" width="236" height="356" fill="${f}"/><rect x="106" y="96" width="188" height="308" fill="#21140a"/>`;
    let lat = '';
    for (let k = -320; k < 360; k += 22) { lat += `<path d="M${106 + k} 96 L${106 + k + 308} 404"/><path d="M${294 - k} 96 L${294 - k - 308} 404"/>`; }
    b += `<g clip-path="url(#${id}cp)" stroke="${f}" stroke-width="7">${lat}</g>`;
    if (mode !== 'rough') {
      let fan = '';
      for (let i = 0; i < 11; i++) {
        const ang = 180 + i * 18, r = 70, cx = 200 + r * Math.cos(ang * Math.PI / 180), cy = 262 + r * Math.sin(ang * Math.PI / 180);
        fan += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="13" ry="32" transform="rotate(${ang + 90} ${cx.toFixed(1)} ${cy.toFixed(1)})"/>`;
      }
      b += `<g fill="${f}">${fan}<ellipse cx="200" cy="286" rx="22" ry="34"/><circle cx="206" cy="212" r="9"/></g><path d="M200 262 C 198 244 200 228 205 216" stroke="${f}" stroke-width="11" stroke-linecap="round" fill="none"/>`;
      let eyes = '';
      for (let i = 0; i < 11; i++) {
        const ang = 180 + i * 18, r = 84, cx = 200 + r * Math.cos(ang * Math.PI / 180), cy = 262 + r * Math.sin(ang * Math.PI / 180);
        eyes += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="5"/>`;
      }
      b += `<g fill="#21140a" opacity=".75">${eyes}</g><g stroke="#21140a" stroke-width="1.6" fill="none" opacity=".6"><path d="M206 204 L200 186 M206 204 L210 184 M206 204 L218 190"/></g>`;
    }
    b += `<rect x="82" y="72" width="236" height="356" fill="#000" opacity=".3" filter="url(#${id}tx)"/>`;
    b += `<g fill="#21140a" opacity=".55"><circle cx="94" cy="84" r="4"/><circle cx="306" cy="84" r="4"/><circle cx="94" cy="416" r="4"/><circle cx="306" cy="416" r="4"/></g>`;
  }
  return svgWrap(`${wall(id)}<defs>${d}</defs>${b}`);
}

// ---------- Mithila paintings ----------
function mFrame(id, mode, x, y, w, h, inner) {
  let s = `<rect x="${x + 6}" y="${y + 8}" width="${w}" height="${h}" fill="#2a2620" opacity=".35" filter="url(#${id}sh)"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${PAPER}"/>`;
  s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#7a5a2a" opacity=".07" filter="url(#${id}pp)"/>`;
  if (mode === 'paper') return s;
  s += inner;
  if (mode === 'final') {
    const i1 = 8, i2 = 22;
    s += `<rect x="${x + i1}" y="${y + i1}" width="${w - 2 * i1}" height="${h - 2 * i1}" fill="none" stroke="${INK}" stroke-width="2.4"/><rect x="${x + i2}" y="${y + i2}" width="${w - 2 * i2}" height="${h - 2 * i2}" fill="none" stroke="${INK}" stroke-width="1.6"/>`;
    let t = '';
    const step = 14;
    for (let k = x + i1, n = 0; k + step <= x + w - i1; k += step, n++) {
      const c = n % 2 ? MRED : INK;
      t += `<path d="M${k} ${y + i1} L${k + step / 2} ${y + i2} L${k + step} ${y + i1} Z" fill="${c}"/><path d="M${k} ${y + h - i1} L${k + step / 2} ${y + h - i2} L${k + step} ${y + h - i1} Z" fill="${c}"/>`;
    }
    for (let k = y + i1, n = 0; k + step <= y + h - i1; k += step, n++) {
      const c = n % 2 ? MRED : INK;
      t += `<path d="M${x + i1} ${k} L${x + i2} ${k + step / 2} L${x + i1} ${k + step} Z" fill="${c}"/><path d="M${x + w - i1} ${k} L${x + w - i2} ${k + step / 2} L${x + w - i1} ${k + step} Z" fill="${c}"/>`;
    }
    s += t;
  }
  return s;
}
function mDefs(id) {
  return `<defs><filter id="${id}pp" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3"/><feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.8 1.1"/><feComposite in2="SourceGraphic" operator="in"/></filter></defs>`;
}
function fish(cx, cy, rot, color, cid, mode, sc = 1) {
  const fc = mode === 'outline' ? 'none' : color;
  const hatch = mode === 'fill' || mode === 'final';
  let scales = '';
  if (hatch) for (let x = -72; x < 40; x += 11) for (let yy = -36; yy < 40; yy += 9) scales += `<path d="M${x} ${yy} q5.5 -7 11 0"/>`;
  return `<g transform="translate(${cx} ${cy}) rotate(${rot}) scale(${sc})"><path d="M-90 0 L-126 -32 L-114 0 L-126 32 Z" fill="${fc}" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>${hatch ? `<path d="M-118 -18 L-100 0 M-118 18 L-100 0 M-122 -6 L-104 0 M-122 6 L-104 0" stroke="${INK}" stroke-width="1"/>` : ''}<path d="M-12 -40 L2 -62 L20 -42 Z" fill="${fc}" stroke="${INK}" stroke-width="2"/><path d="M-12 40 L2 62 L20 42 Z" fill="${fc}" stroke="${INK}" stroke-width="2"/><path d="M-92 0 C-62 -48 42 -50 84 0 C42 50 -62 48 -92 0 Z" fill="${fc}" stroke="${INK}" stroke-width="3"/><path d="M-80 0 C-54 -38 36 -40 72 0 C36 40 -54 38 -80 0 Z" fill="none" stroke="${INK}" stroke-width="1.3"/><clipPath id="${cid}"><path d="M-80 0 C-54 -38 36 -40 50 -26 L 50 26 C 36 40 -54 38 -80 0 Z"/></clipPath><g clip-path="url(#${cid})" fill="none" stroke="${INK}" stroke-width="1">${scales}</g><path d="M40 -24 C 33 -8 33 8 40 24" fill="none" stroke="${INK}" stroke-width="2"/><circle cx="56" cy="-6" r="9" fill="${PAPER}" stroke="${INK}" stroke-width="2"/>${mode === 'final' || mode === 'fill' ? `<circle cx="58" cy="-6" r="3.6" fill="${INK}"/>` : ''}</g>`;
}
function lotus(cx, cy, s, mode) {
  const f = mode === 'outline' ? 'none' : MPNK;
  return `<g transform="translate(${cx} ${cy}) scale(${s})" stroke="${INK}" stroke-width="1.8"><path d="M0 0 C -6 -14 -4 -26 0 -32 C 4 -26 6 -14 0 0 Z" fill="${f}"/><path d="M0 0 C -14 -8 -22 -18 -22 -26 C -12 -22 -4 -12 0 0 Z" fill="${f}"/><path d="M0 0 C 14 -8 22 -18 22 -26 C 12 -22 4 -12 0 0 Z" fill="${f}"/></g>`;
}
function mithilaArt(kind, id, mode) {
  let inner = '';
  const c = (col) => (mode === 'outline' ? 'none' : col);
  const hatch = mode === 'fill' || mode === 'final';
  if (kind === 'mithila-fish') {
    inner += fish(200, 194, 0, MRED, `${id}c1`, mode, .8) + fish(200, 314, 180, MYEL, `${id}c2`, mode, .8);
    inner += `<g fill="none" stroke="${INK}" stroke-width="1.6">${[0, 1, 2].map(i => `<path d="M${120 + i * 56} 254 q14 -8 28 0 q14 8 28 0"/>`).join('')}</g>`;
    inner += lotus(108, 120, .9, mode) + lotus(292, 120, .9, mode) + lotus(108, 404, .9, mode) + lotus(292, 404, .9, mode);
    return svgWrap(`${wall(id)}${mDefs(id)}${mFrame(id, mode, 66, 46, 268, 404, inner)}`);
  }
  if (kind === 'mithila-kohbar') {
    let petals = '';
    for (let i = 0; i < 16; i++) {
      const a = i * 22.5, cx = 200 + 56 * Math.cos(a * Math.PI / 180), cy = 228 + 56 * Math.sin(a * Math.PI / 180);
      petals += `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="11" ry="27" transform="rotate(${a + 90} ${cx.toFixed(1)} ${cy.toFixed(1)})" fill="${c(i % 2 ? MRED : MYEL)}" stroke="${INK}" stroke-width="2"/>`;
    }
    inner += petals + `<circle cx="200" cy="228" r="32" fill="${c(MYEL)}" stroke="${INK}" stroke-width="2.4"/><circle cx="200" cy="228" r="22" fill="none" stroke="${INK}" stroke-width="1.5"/>`;
    if (hatch) { let sp = ''; for (let i = 0; i < 24; i++) { const a = i * 15 * Math.PI / 180; sp += `<path d="M${(200 + 8 * Math.cos(a)).toFixed(1)} ${(228 + 8 * Math.sin(a)).toFixed(1)} L${(200 + 21 * Math.cos(a)).toFixed(1)} ${(228 + 21 * Math.sin(a)).toFixed(1)}"/>`; } inner += `<g stroke="${INK}" stroke-width="1">${sp}</g>`; }
    const bamboo = (x) => { let s = `<rect x="${x - 5}" y="128" width="10" height="250" fill="${c(MGRN)}" stroke="${INK}" stroke-width="1.8"/>`; for (let y = 160; y < 378; y += 36) s += `<path d="M${x - 5} ${y} L${x + 5} ${y}" stroke="${INK}" stroke-width="1.8"/><path d="M${x} ${y} C ${x + 18} ${y - 6} ${x + 26} ${y - 16} ${x + 28} ${y - 24} C ${x + 14} ${y - 20} ${x + 6} ${y - 10} ${x} ${y} Z" fill="${c(MGRN)}" stroke="${INK}" stroke-width="1.4"/><path d="M${x} ${y + 12} C ${x - 18} ${y + 6} ${x - 26} ${y - 4} ${x - 28} ${y - 12} C ${x - 14} ${y - 8} ${x - 6} ${y + 2} ${x} ${y + 12} Z" fill="${c(MGRN)}" stroke="${INK}" stroke-width="1.4"/>`; return s; };
    inner += bamboo(104) + bamboo(296);
    let rays = ''; for (let i = 0; i < 12; i++) { const a = i * 30 * Math.PI / 180; rays += `<path d="M${(122 + 21 * Math.cos(a)).toFixed(1)} ${(104 + 21 * Math.sin(a)).toFixed(1)} L${(122 + 30 * Math.cos(a)).toFixed(1)} ${(104 + 30 * Math.sin(a)).toFixed(1)}"/>`; }
    inner += `<g stroke="${INK}" stroke-width="2">${rays}</g><circle cx="122" cy="104" r="18" fill="${c(MRED)}" stroke="${INK}" stroke-width="2.2"/><circle cx="122" cy="104" r="9" fill="${c(MYEL)}" stroke="${INK}" stroke-width="1.4"/>`;
    inner += `<path d="M266 86 A 20 20 0 1 0 288 118 A 16 16 0 1 1 266 86 Z" fill="${c(MYEL)}" stroke="${INK}" stroke-width="2.2"/>`;
    inner += fish(156, 330, 25, MRED, `${id}c1`, mode, .42) + fish(244, 330, 155, MYEL, `${id}c2`, mode, .42);
    inner += `<g stroke="${INK}" stroke-width="2"><ellipse cx="200" cy="388" rx="28" ry="18" fill="${c(MGRN)}"/><circle cx="234" cy="384" r="7" fill="${c(MGRN)}"/><ellipse cx="180" cy="404" rx="7" ry="5" fill="${c(MGRN)}"/><ellipse cx="220" cy="404" rx="7" ry="5" fill="${c(MGRN)}"/><ellipse cx="180" cy="372" rx="7" ry="5" fill="${c(MGRN)}"/><ellipse cx="220" cy="372" rx="7" ry="5" fill="${c(MGRN)}"/></g>`;
    if (hatch) inner += `<g stroke="${INK}" stroke-width="1" fill="none"><path d="M180 380 L220 396 M180 396 L220 380 M200 372 L200 404"/></g>`;
    return svgWrap(`${wall(id)}${mDefs(id)}${mFrame(id, mode, 60, 50, 280, 380, inner)}`);
  }
  // peacocks
  const peacock = (cx, cy, flip) => {
    let eyes = '';
    [[-18, 46], [-34, 76], [-44, 108], [-8, 84], [-24, 116]].forEach(([x, y]) => { eyes += `<circle cx="${x}" cy="${y}" r="8" fill="${c(MYEL)}" stroke="${INK}" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="4.5" fill="${c(MBLU)}" stroke="${INK}" stroke-width="1"/>`; });
    let h = '';
    if (hatch) for (let i = 0; i < 6; i++) h += `<path d="M${-8 + i * 2} ${-2 + i * 6} q6 -2 10 2"/>`;
    return `<g transform="translate(${cx} ${cy}) scale(${flip ? -1 : 1} 1)"><path d="M0 18 C -40 30 -72 84 -62 146 C -40 132 -18 98 4 46 Z" fill="${c(MGRN)}" stroke="${INK}" stroke-width="2.2"/>${eyes}<path d="M2 -8 C 4 -30 12 -46 20 -58" fill="none" stroke="${INK}" stroke-width="12" stroke-linecap="round"/><path d="M2 -8 C 4 -30 12 -46 20 -58" fill="none" stroke="${c(MBLU) === 'none' ? PAPER : MBLU}" stroke-width="8" stroke-linecap="round"/><path d="M-8 -12 C -26 -6 -28 28 -6 40 C 14 34 20 4 8 -12 Z" fill="${c(MBLU)}" stroke="${INK}" stroke-width="2.2"/><g fill="none" stroke="${INK}" stroke-width="1">${h}</g><circle cx="22" cy="-62" r="8" fill="${c(MBLU)}" stroke="${INK}" stroke-width="2"/><path d="M29 -63 L39 -60 L29 -57 Z" fill="${c(MYEL)}" stroke="${INK}" stroke-width="1.4"/><circle cx="24" cy="-63" r="1.8" fill="${INK}"/><g stroke="${INK}" stroke-width="1.4"><path d="M20 -70 L14 -86 M22 -70 L22 -88 M24 -70 L30 -86"/></g><g fill="${c(MRED)}" stroke="${INK}" stroke-width="1"><circle cx="14" cy="-88" r="3"/><circle cx="22" cy="-90" r="3"/><circle cx="30" cy="-88" r="3"/></g><path d="M-6 40 L-10 62 M6 38 L4 62" stroke="${INK}" stroke-width="2"/></g>`;
  };
  let rays = ''; for (let i = 0; i < 16; i++) { const a = i * 22.5 * Math.PI / 180; rays += `<path d="M${(200 + 26 * Math.cos(a)).toFixed(1)} ${(112 + 26 * Math.sin(a)).toFixed(1)} L${(200 + 36 * Math.cos(a)).toFixed(1)} ${(112 + 36 * Math.sin(a)).toFixed(1)}"/>`; }
  inner += `<g stroke="${INK}" stroke-width="2">${rays}</g><circle cx="200" cy="112" r="22" fill="${c(MRED)}" stroke="${INK}" stroke-width="2.4"/><circle cx="200" cy="112" r="11" fill="${c(MYEL)}" stroke="${INK}" stroke-width="1.6"/>`;
  inner += peacock(146, 236, false) + peacock(254, 236, true);
  inner += lotus(150, 404, 1, mode) + lotus(200, 400, 1.1, mode) + lotus(250, 404, 1, mode);
  return svgWrap(`${wall(id)}${mDefs(id)}${mFrame(id, mode, 60, 50, 280, 380, inner)}`);
}

// ---------- thangka ----------
function thangkaArt(fig, id, mode) {
  let d = `<linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fa6c8"/><stop offset=".6" stop-color="#cbdad6"/><stop offset="1" stop-color="#e3e6d6"/></linearGradient><radialGradient id="${id}au" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6d77a"/><stop offset=".55" stop-color="#e2a84a"/><stop offset=".8" stop-color="#c46a2c"/><stop offset="1" stop-color="#7a3416"/></radialGradient><radialGradient id="${id}aum" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9bc7a4"/><stop offset=".7" stop-color="#5f9a74"/><stop offset="1" stop-color="#3d6e52"/></radialGradient><clipPath id="${id}pa"><rect x="110" y="94" width="180" height="232"/></clipPath><pattern id="${id}br" width="12" height="12" patternUnits="userSpaceOnUse"><rect width="12" height="12" fill="#1f3b73"/><circle cx="6" cy="6" r="1.6" fill="#d4b06a" opacity=".55"/><path d="M0 0 L12 12" stroke="#2c4d8c" stroke-width="1"/></pattern>`;
  const matKey = fig === 'tara' ? 'jade' : 'lapis';
  d += grad(`${id}fg`, MAT[matKey]);
  let b = '';
  if (mode === 'final') {
    b += `<rect x="80" y="40" width="250" height="410" fill="#2a2620" opacity=".3" filter="url(#${id}sh)"/>`;
    b += `<rect x="75" y="32" width="250" height="404" fill="url(#${id}br)"/><rect x="98" y="82" width="204" height="256" fill="#8f2a1f"/><rect x="104" y="88" width="192" height="244" fill="none" stroke="#d4b06a" stroke-width="2"/><rect x="152" y="346" width="96" height="70" fill="#c69a3e"/><rect x="152" y="346" width="96" height="70" fill="none" stroke="#7a5418" stroke-width="1.5"/><rect x="64" y="24" width="272" height="9" rx="3" fill="#3a2414"/><rect x="64" y="434" width="272" height="11" rx="4" fill="#3a2414"/><circle cx="62" cy="439" r="8" fill="#b8892f"/><circle cx="338" cy="439" r="8" fill="#b8892f"/>`;
  } else {
    b += `<rect x="104" y="92" width="200" height="252" fill="#2a2620" opacity=".3" filter="url(#${id}sh)"/><rect x="100" y="84" width="200" height="252" fill="#b98a5a"/><rect x="100" y="84" width="200" height="252" fill="none" stroke="#7a5430" stroke-width="2"/>`;
  }
  b += `<rect x="110" y="94" width="180" height="232" fill="#f4f0e6"/>`;
  const T = 'translate(90.6 66.6) scale(.547)';
  const shapes = fig === 'tara' ? SH.tara() : SH.buddha('earth');
  let p = '';
  if (mode === 'grid') {
    let gl = '';
    for (let x = 110; x <= 290; x += 15) gl += `<path d="M${x} 94 L${x} 326"/>`;
    for (let y = 94; y <= 326; y += 15) gl += `<path d="M110 ${y} L290 ${y}"/>`;
    p += `<g stroke="#b9604a" stroke-width=".6" opacity=".55">${gl}</g><g stroke="#b9604a" stroke-width="1" opacity=".8"><path d="M200 94 L200 326 M110 94 L290 326 M290 94 L110 326"/></g><g transform="${T}" fill="none" stroke="#3a3530" stroke-width="2.2" opacity=".7">${shapes}</g>`;
  } else if (mode !== 'canvas') {
    p += `<rect x="110" y="94" width="180" height="232" fill="url(#${id}sky)"/>`;
    p += `<path d="M110 282 C 140 262 170 270 200 280 C 230 266 262 258 290 276 L 290 326 L 110 326 Z" fill="#4f7a4f"/><path d="M110 300 C 150 288 180 298 210 306 C 240 296 270 292 290 300 L 290 326 L 110 326 Z" fill="#3c6440"/>`;
    p += `<g fill="#fff" opacity=".85"><ellipse cx="136" cy="128" rx="18" ry="8"/><ellipse cx="148" cy="122" rx="12" ry="7"/><ellipse cx="266" cy="140" rx="18" ry="8"/><ellipse cx="254" cy="134" rx="11" ry="6"/></g>`;
    const goldOn = mode === 'gold' || mode === 'final';
    p += `<ellipse cx="200" cy="222" rx="72" ry="98" fill="url(#${goldOn ? id + 'au' : id + 'aum'})"/>`;
    if (goldOn) p += `<g fill="none" stroke="#f7e09a" stroke-width="1.2" opacity=".9"><ellipse cx="200" cy="222" rx="64" ry="90"/><ellipse cx="200" cy="222" rx="56" ry="82"/></g><circle cx="200" cy="154" r="26" fill="#e9c35e" stroke="#f7e09a" stroke-width="1.5"/>`;
    else p += `<circle cx="200" cy="154" r="26" fill="#8cc1a0"/>`;
    p += `<g transform="${T}"><g fill="url(#${id}fg)" stroke="#1d1a16" stroke-width="2.6">${shapes}</g>`;
    if (fig === 'tara') p += SH.taraStem('#2e7a4f');
    if (fig === 'medicine') p += `<g fill="#c4532a" stroke="#1d1a16" stroke-width="2.4"><path d="M246 232 C 226 270 190 304 146 336 L 142 356 L 258 356 C 260 300 256 262 248 228 Z"/><path d="M108 414 C 104 378 140 352 200 350 C 260 352 296 378 292 414 C 262 424 138 424 108 414 Z"/></g><ellipse cx="214" cy="352" rx="26" ry="10" fill="#3a6fc0" stroke="#1d1a16" stroke-width="2.4"/><circle cx="122" cy="408" r="9" fill="#5aa85a" stroke="#1d1a16" stroke-width="2"/>`;
    p += `<g fill="#e48a8a" stroke="#1d1a16" stroke-width="2.2">${[0, 1, 2, 3, 4, 5, 6].map(i => `<ellipse cx="${112 + i * 29}" cy="417" rx="17" ry="11"/>`).join('')}</g>`;
    if (goldOn) p += `<g fill="none" stroke="#e8c463" stroke-width="2.4"><path d="M168 222 C 184 240 216 240 232 222"/><path d="M172 132 L180 104 L190 124 L200 94 L210 124 L220 104 L228 132"/></g>`;
    if (mode === 'final') p += `<g fill="none" stroke="#1d1a16" stroke-width="2.6"><path d="M186 162 q7 3 13 0 M201 162 q7 3 13 0"/></g>`;
    p += `</g>`;
  }
  b += `<g clip-path="url(#${id}pa)">${p}</g>`;
  return svgWrap(`${wall(id)}<defs>${d}</defs>${b}`);
}

export const PROC = {
  lostwax: ['wax', 'clay', 'molten', 'raw', 'final'], cast: ['wax', 'clay', 'molten', 'final'], hammer: ['raw', 'raw', 'raw', 'final'],
  wood: ['block', 'block', 'rough', 'carved', 'final'], stone: ['block', 'rough', 'rough', 'carved', 'final'],
  mithila: ['paper', 'outline', 'fill', 'final'], thangka: ['canvas', 'grid', 'colour', 'gold', 'final']
};
export function art(p, o = {}) {
  const a = p.art, id = 'a' + (o.uid ? String(o.uid).replace(/[^a-zA-Z0-9_-]/g, '') : ++UID);
  const arr = PROC[a.proc];
  const mode = o.stage == null ? 'final' : arr[Math.min(o.stage, arr.length - 1)];
  if (['buddha', 'tara', 'ganesh', 'bell', 'bowl'].includes(a.kind)) return statueArt(a, id, mode, o);
  if (a.kind === 'window') return windowArt(id, mode, o);
  if (a.kind.startsWith('mithila')) return mithilaArt(a.kind, id, mode);
  return thangkaArt(a.figure, id, mode);
}
