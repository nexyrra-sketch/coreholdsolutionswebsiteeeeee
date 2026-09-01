// Generates favicon PNGs and the branded Open Graph share image from SVG
// sources using sharp — no external design tool required. Re-run with
// `node scripts/generate-brand-assets.mjs` any time the brand marks change.
//
// The mark is a vault dial: concentric rings around a solid core, with the
// outer ring deliberately broken. See components/Logo.tsx for the reasoning.
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const INK = "#12141A";
const PAPER = "#FAF8F4";
const BRASS = "#B9863F";
const BRASS_LIGHT = "#E9CB99";

// Favicon is drawn heavier than the on-site logo on purpose: at 32px the
// hairline rings of the full mark would blur into grey mush, so the small
// size gets a bolder, two-element reduction of the same idea.
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="8" fill="${INK}"/>
  <circle cx="32" cy="32" r="22" fill="none" stroke="${PAPER}" stroke-opacity="0.5" stroke-width="2.5"
          stroke-linecap="round" stroke-dasharray="118 20" transform="rotate(-58 32 32)"/>
  <circle cx="32" cy="32" r="13.5" fill="none" stroke="${BRASS}" stroke-width="2.5"/>
  <circle cx="32" cy="32" r="5.5" fill="${BRASS}"/>
</svg>`;

// The full dial, used at large sizes where the finer rings survive.
function dial(cx, cy, scale, ringColor, ringOpacity) {
  const r = (v) => v * scale;
  return `
    <circle cx="${cx}" cy="${cy}" r="${r(21)}" fill="none" stroke="${ringColor}" stroke-opacity="${ringOpacity}"
            stroke-width="${r(1.5)}" stroke-linecap="round" stroke-dasharray="${r(112)} ${r(20)}"
            transform="rotate(-58 ${cx} ${cy})"/>
    <circle cx="${cx}" cy="${cy}" r="${r(14.5)}" fill="none" stroke="${ringColor}" stroke-opacity="${ringOpacity + 0.3}" stroke-width="${r(1.5)}"/>
    <circle cx="${cx}" cy="${cy}" r="${r(8.5)}" fill="none" stroke="${BRASS}" stroke-opacity="0.9" stroke-width="${r(1.5)}"/>
    <circle cx="${cx}" cy="${cy}" r="${r(3.25)}" fill="${BRASS}"/>`;
}

// Faint concentric field used as background texture.
function rings(cx, cy, count, startR, step, opacity) {
  let out = "";
  for (let i = 0; i < count; i++) {
    out += `<circle cx="${cx}" cy="${cy}" r="${startR + i * step}" fill="none" stroke="${BRASS}" stroke-width="1" stroke-opacity="${(opacity - i * (opacity / count)).toFixed(3)}"/>`;
  }
  return out;
}

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>
  <g>${rings(1030, 130, 7, 46, 34, 0.42)}</g>
  <g>${rings(70, 580, 5, 30, 28, 0.22)}</g>
  <g>${dial(112, 112, 1.15, PAPER, 0.45)}</g>
  <text x="168" y="123" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-weight="600" fill="${PAPER}">CoreholdSolutions</text>
  <text x="88" y="272" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="600" fill="${PAPER}">UAE e-invoicing compliance,</text>
  <text x="88" y="344" font-family="Georgia, 'Times New Roman', serif" font-size="62" font-weight="600" fill="${BRASS_LIGHT}">end to end.</text>
  <text x="88" y="424" font-family="Arial, sans-serif" font-size="23" fill="${PAPER}" fill-opacity="0.72">Advisory · Accredited-provider selection · Systems integration · Managed compliance</text>
  <rect x="88" y="470" width="132" height="1" fill="${BRASS}" fill-opacity="0.6"/>
  <text x="88" y="524" font-family="Arial, sans-serif" font-size="21" fill="${PAPER}" fill-opacity="0.55">Federal Decree-Law No. 16 of 2024 · Live 1 Jan 2027 (large business) · 1 Jul 2027 (everyone else)</text>
</svg>`;

await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(path.join(root, "public/apple-touch-icon.png"));
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(root, "public/favicon-32.png"));
await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile(path.join(root, "public/og-image.png"));

writeFileSync(path.join(root, "public/favicon.svg"), faviconSvg.trim() + "\n");

console.log("Brand assets generated: favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png");
