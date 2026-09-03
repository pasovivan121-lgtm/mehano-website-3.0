// Pure-node asset generator: favicon set + social OG image for the Mehano site.
// No external deps: renders shapes with signed-distance math, supersamples for AA,
// and encodes PNG (zlib) + ICO manually.
'use strict';
const fs = require('fs');
const zlib = require('zlib');

// ---------- tiny PNG encoder ----------
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
function encodePNG(w, h, rgba) {
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}
function encodeICO(sizes, pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  const dir = Buffer.alloc(16 * sizes.length);
  let offset = 6 + 16 * sizes.length;
  sizes.forEach((s, i) => {
    const e = i * 16;
    dir[e] = s >= 256 ? 0 : s;
    dir[e + 1] = s >= 256 ? 0 : s;
    dir[e + 2] = 0;
    dir[e + 3] = 0;
    dir.writeUInt16LE(1, e + 4);
    dir.writeUInt16LE(32, e + 6);
    dir.writeUInt32LE(pngBuffers[i].length, e + 8);
    dir.writeUInt32LE(offset, e + 12);
    offset += pngBuffers[i].length;
  });
  return Buffer.concat([header, dir, ...pngBuffers]);
}

// ---------- helpers ----------
function hex(c) {
  return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
}
function mix(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}
function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
// point-segment distance
function pseg(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1, dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  let t = l2 ? ((px - x1) * dx + (py - y1) * dy) / l2 : 0;
  t = Math.max(0, Math.min(1, t));
  const qx = x1 + t * dx - px, qy = y1 + t * dy - py;
  return Math.sqrt(qx * qx + qy * qy);
}

// Render canvas at supersample factor S (AA), then box-downsample.
function render(w, h, s, pixelFn) {
  const SW = w * s, SH = h * s;
  const acc = new Float32Array(w * h * 4);
  for (let yy = 0; yy < SH; yy++) {
    const y = yy / SH;
    for (let xx = 0; xx < SW; xx++) {
      const x = xx / SW;
      const c = pixelFn(x, y); // [r,g,b] 0..255 floats
      const ox = (xx / s) | 0, oy = (yy / s) | 0;
      const i = (oy * w + ox) * 4;
      acc[i] += c[0]; acc[i + 1] += c[1]; acc[i + 2] += c[2];
      acc[i + 3] += c[3] !== undefined ? c[3] : 255;
    }
  }
  const n = s * s;
  const out = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    out[i * 4] = Math.min(255, Math.max(0, acc[i * 4] / n));
    out[i * 4 + 1] = Math.min(255, Math.max(0, acc[i * 4 + 1] / n));
    out[i * 4 + 2] = Math.min(255, Math.max(0, acc[i * 4 + 2] / n));
    out[i * 4 + 3] = Math.min(255, Math.max(0, acc[i * 4 + 3] / n));
  }
  return out;
}

// ---------- letter shapes (unit square 0..1, thickness as fraction of height) ----------
// Each letter: { segs: [[x1,y1,x2,y2],...], rings: [{cx,cy,r}], t }
const L = {
  M: { segs: [[0.17, 0.04, 0.17, 0.96], [0.83, 0.04, 0.83, 0.96], [0.17, 0.04, 0.5, 0.62], [0.83, 0.04, 0.5, 0.62]], rings: [], t: 0.108 },
  E: { segs: [[0.2, 0.04, 0.2, 0.96], [0.2, 0.06, 0.92, 0.06], [0.2, 0.94, 0.92, 0.94], [0.2, 0.5, 0.6, 0.5]], rings: [], t: 0.105 },
  H: { segs: [[0.17, 0.04, 0.17, 0.96], [0.83, 0.04, 0.83, 0.96], [0.17, 0.5, 0.83, 0.5]], rings: [], t: 0.108 },
  A: { segs: [[0.5, 0.04, 0.16, 0.96], [0.5, 0.04, 0.84, 0.96], [0.3, 0.6, 0.7, 0.6]], rings: [], t: 0.1 },
  X: { segs: [[0.12, 0.04, 0.88, 0.96], [0.88, 0.04, 0.12, 0.96]], rings: [], t: 0.11 },
  O: { segs: [], rings: [{ cx: 0.5, cy: 0.5, r: 0.46 }], t: 0.13 },
};

// distance to a letter (in unit square) given x,y in 0..1
function letterDist(x, y, ch) {
  const g = L[ch];
  let d = Infinity;
  for (const s of g.segs) d = Math.min(d, pseg(x, y, s[0], s[1], s[2], s[3]));
  for (const r of g.rings) {
    const q = Math.sqrt((x - r.cx) * (x - r.cx) + (y - r.cy) * (y - r.cy));
    d = Math.min(d, Math.abs(q - r.r));
  }
  return d;
}

const CHAR_MAP = { 'М': 'M', 'Е': 'E', 'Х': 'X', 'А': 'A', 'Н': 'H', 'О': 'O' };
const mapChar = (c) => CHAR_MAP[c] || c;

const BG = hex('#0a0c11');
const C1 = hex('#0a5cff');
const C2 = hex('#00c6ff');
const C3 = hex('#7b61ff');
// bright letter colors (light cyan -> light blue) for contrast on dark
const W1 = hex('#d6f3ff');
const W2 = hex('#59c8ff');
const W3 = hex('#7ea0ff');

// wordmark: array of chars + palette step color for each
function wordmarkColor(i, n) {
  const t = n <= 1 ? 0.5 : i / (n - 1);
  if (t < 0.5) return mix(W1, W2, t * 2);
  return mix(W2, W3, (t - 0.5) * 2);
}

// Draw wordmark horizontally centered into [0..1]x[0..1] viewbox
// returns coverage fn(color)
function wordmarkCoverage(x, y, text, vbW, vbH, marginT, marginB, gap, colorAt) {
  // letter cell size = unit of height
  const n = text.length;
  const unit = vbH / 4.2; // letter height fraction of viewbox height
  const totalW = n * unit + (n - 1) * gap * unit;
  const x0 = (vbW - totalW) / 2;
  const y0 = marginT * vbH; // top offset in px scale => handle in caller via px coords instead
  // we do px-level: caller provides letterFn in px space
}

// ---------- renders ----------
function roundedRectCoverage(x, y, x0, y0, x1, y1, r) {
  const cx = Math.max(x0 + r, Math.min(x1 - r, x));
  const cy = Math.max(y0 + r, Math.min(y1 - r, y));
  const d = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
  const inside = x >= x0 && x <= x1 && y >= y0 && y <= y1;
  if (inside && (x < x0 + r || x > x1 - r || y < y0 + r || y > y1 - r)) return d <= r ? 1 : 0;
  return inside ? 1 : 0;
}

function solidIcon(size, radius) {
  const s = 3;
  return render(size, size, s, (x, y) => {
    const px = x * size, py = y * size;
    const cover = roundedRectCoverage(px, py, 0, 0, size, size, radius);
    if (cover === 0) return [0, 0, 0, 0];
    // dark base
    let col = BG;
    // subtle vertical sheen
    col = mix(col, hex('#1b2030'), Math.pow(clamp01(y), 2) * 0.55);
    // M monogram centered, 56% of canvas
    const m = size * 0.56;
    const x0 = (size - m) / 2, y0 = (size - m) / 2;
    const d = letterDist((px - x0) / m, (py - y0) / m, 'M');
    if (d < L.M.t / 2) {
      const u = clamp01((px - x0) / m);
      col = mix(W1, W2, u);
    }
    return [col[0], col[1], col[2], cover * 255];
  });
}

function transparentIcon(size) {
  const s = 4;
  const m0 = size * 0.82; // monogram box
  const x0 = (size - m0) / 2, y0 = (size - m0) / 2;
  return render(size, size, s, (x, y) => {
    const px = x * size, py = y * size;
    const d = letterDist((px - x0) / m0, (py - y0) / m0, 'M');
    if (d >= L.M.t / 2) return [0, 0, 0, 0];
    const u = clamp01((px - x0) / m0);
    const col = mix(W1, W2, u);
    return [col[0], col[1], col[2], 255];
  });
}

function ogImage(w, h) {
  const text = 'МЕХАНО';
  const s = 2;
  // layout in px
  const unit = h * 0.235; // letter height
  const gap = unit * 0.27;
  const totalW = text.length * unit + (text.length - 1) * gap;
  const x0 = (w - totalW) / 2;
  const y0 = h * 0.27;
  const letters = text.split('').map((ch, i) => {
    const bx = x0 + i * (unit + gap);
    return { ch: mapChar(ch), bx, color: wordmarkColor(i, text.length) };
  });
  // accent underline
  const ruleY = y0 + unit * 1.38;
  const ruleW = totalW * 0.72;
  const ruleX = (w - ruleW) / 2;
  return render(w, h, s, (x, y) => {
    const px = x * w, py = y * h;
    // background: vertical gradient
    let col = mix(BG, hex('#10141f'), clamp01(y) * 0.7);
    // radial glows
    const glow = (cx, cy, r, colr, amp) => {
      const d = Math.sqrt((px - cx) * (px - cx) + (py - cy) * (py - cy)) / r;
      if (d < 1) {
        const f = Math.pow(1 - d, 2.2) * amp;
        col = mix(col, colr, f);
      }
    };
    glow(w * 0.16, h * 0.18, w * 0.42, C1, 0.5);
    glow(w * 0.86, h * 0.88, w * 0.5, C3, 0.42);
    glow(w * 0.55, h * 0.02, w * 0.5, C2, 0.3);
    // subtle vignette top/bottom
    col = mix(col, hex('#000000'), Math.pow(Math.max(0, y - 0.55), 2) * 0.35);

    // wordmark strokes
    let draw = 0;
    let wcol = col;
    for (const L2 of letters) {
      const d = letterDist((px - L2.bx) / unit, (py - y0) / unit, L2.ch);
      if (d < L[L2.ch].t / 2) {
        draw = 1;
        wcol = L2.color;
        break;
      }
    }
    // accent rule (gradient along x)
    if (px >= ruleX && px <= ruleX + ruleW && Math.abs(py - ruleY) < unit * 0.045) {
      const u = clamp01((px - ruleX) / ruleW);
      const rc = mix(C2, C3, u);
      if (draw) { wcol = mix(wcol, rc, 0.5); } else { draw = 1; wcol = rc; }
    }
    if (draw) return [wcol[0], wcol[1], wcol[2], 255];
    return [col[0], col[1], col[2], 255];
  });
}

// ---------- write files ----------
const OUT = {};
const png32 = solidIcon(32, 7);
OUT['assets/favicon-32x32.png'] = encodePNG(32, 32, png32);
const png16 = solidIcon(16, 4);
OUT['assets/favicon-16x16.png'] = encodePNG(16, 16, png16);
OUT['assets/apple-touch-icon.png'] = encodePNG(180, 180, solidIcon(180, 40));
OUT['assets/android-chrome-192x192.png'] = encodePNG(192, 192, solidIcon(192, 42));
OUT['assets/android-chrome-512x512.png'] = encodePNG(512, 512, solidIcon(512, 112));
OUT['favicon.ico'] = encodeICO([16, 32], [
  encodePNG(16, 16, transparentIcon(16)),
  encodePNG(32, 32, transparentIcon(32)),
]);
OUT['assets/og-image.png'] = encodePNG(1200, 630, ogImage(1200, 630));

for (const f of Object.keys(OUT)) {
  fs.mkdirSync(require('path').dirname(f), { recursive: true });
  fs.writeFileSync(f, OUT[f]);
  console.log('wrote', f, OUT[f].length, 'bytes');
}
