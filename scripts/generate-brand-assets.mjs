// Generates favicon PNGs and the branded Open Graph share image from SVG
// sources using sharp — no external design tool required. Re-run with
// `node scripts/generate-brand-assets.mjs` any time the brand marks change.
//
// The mark is two brackets holding a solid core. See components/Logo.tsx for
// the reasoning; the geometry below is the same 48×48 grid, scaled.
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const INK = "#12141A";
const PAPER = "#FAF8F4";
const BRASS = "#C99A4E";
const BRASS_LIGHT = "#E9CB99";

/**
 * The mark, drawn on its native 48×48 grid and scaled to `size`, with its
 * top-left corner at (x, y). Content occupies 8→40 of the grid, so the mark
 * carries its own even margin at every size.
 */
function mark(x, y, size, color) {
  const s = size / 48;
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M8 8 H23 V11.4 H11.4 V23 H8 Z" fill="${color}"/>
    <rect x="18.6" y="18.6" width="10.8" height="10.8" fill="${color}"/>
    <path d="M40 40 H25 V36.6 H36.6 V25 H40 Z" fill="${color}"/>
  </g>`;
}

const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="8" fill="${INK}"/>
  ${mark(0, 0, 64, BRASS)}
</svg>`;

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <g opacity="0.07">${mark(830, 130, 420, BRASS)}</g>
  ${mark(78, 72, 84, BRASS)}
  <text x="176" y="126" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="600" fill="${PAPER}">CoreholdSolutions</text>
  <text x="88" y="278" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="600" fill="${PAPER}">The consultancy for UAE</text>
  <text x="88" y="348" font-family="Georgia, 'Times New Roman', serif" font-size="60" font-weight="600" fill="${BRASS_LIGHT}">e-invoicing compliance.</text>
  <text x="88" y="428" font-family="Arial, sans-serif" font-size="23" fill="${PAPER}" fill-opacity="0.72">Which provider · Which systems · Built, tested and run after go-live</text>
  <rect x="88" y="474" width="132" height="1" fill="${BRASS}" fill-opacity="0.6"/>
  <text x="88" y="528" font-family="Arial, sans-serif" font-size="21" fill="${PAPER}" fill-opacity="0.55">Federal Decree-Law No. 16 of 2024 · Live 1 Jan 2027 (large business) · 1 Jul 2027 (everyone else)</text>
</svg>`;

await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(path.join(root, "public/apple-touch-icon.png"));
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(root, "public/favicon-32.png"));
await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile(path.join(root, "public/og-image.png"));

writeFileSync(path.join(root, "public/favicon.svg"), faviconSvg.trim() + "\n");

console.log("Brand assets generated: favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png");
