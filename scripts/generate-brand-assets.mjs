// Generates favicon PNGs and the branded Open Graph share image from SVG
// sources using sharp — no external design tool required. Re-run with
// `node scripts/generate-brand-assets.mjs` any time the brand marks change.
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="6" fill="#12141A"/>
  <circle cx="32" cy="32" r="24" fill="none" stroke="#B9863F" stroke-opacity="0.35" stroke-width="1.2"/>
  <circle cx="32" cy="32" r="17" fill="none" stroke="#B9863F" stroke-opacity="0.55" stroke-width="1.2"/>
  <text x="32" y="39" font-family="Georgia, 'Times New Roman', serif" font-size="19" font-weight="600" fill="#FAF8F4" text-anchor="middle">CHS</text>
</svg>`;

function rings(cx, cy, count, startR, step, opacity) {
  let out = "";
  for (let i = 0; i < count; i++) {
    out += `<circle cx="${cx}" cy="${cy}" r="${startR + i * step}" fill="none" stroke="#B9863F" stroke-width="1" stroke-opacity="${opacity - i * (opacity / count)}"/>`;
  }
  return out;
}

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#12141A"/>
  <g>${rings(1020, 120, 6, 40, 30, 0.5)}</g>
  <g>${rings(90, 560, 5, 30, 26, 0.3)}</g>
  <rect x="90" y="90" width="64" height="64" rx="4" fill="none" stroke="#FAF8F4" stroke-width="1.5"/>
  <text x="106" y="133" font-family="Georgia, 'Times New Roman', serif" font-size="26" font-weight="600" fill="#FAF8F4">CHS</text>
  <text x="90" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="600" fill="#FAF8F4">CoreholdSolutions</text>
  <text x="90" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="34" fill="#E9CB99">UAE e-invoicing, handled.</text>
  <text x="90" y="410" font-family="Arial, sans-serif" font-size="22" fill="#FAF8F4" fill-opacity="0.7">Federal Decree-Law No. 16 of 2024 · Mandatory E-Invoicing</text>
  <text x="90" y="450" font-family="Arial, sans-serif" font-size="22" fill="#FAF8F4" fill-opacity="0.7">Live 1 Jan 2027 (large business) · 1 Jul 2027 (SME)</text>
</svg>`;

await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile(path.join(root, "public/apple-touch-icon.png"));
await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(root, "public/favicon-32.png"));
await sharp(Buffer.from(ogSvg)).resize(1200, 630).png().toFile(path.join(root, "public/og-image.png"));

writeFileSync(path.join(root, "public/favicon.svg"), faviconSvg.trim() + "\n");

console.log("Brand assets generated: favicon.svg, favicon-32.png, apple-touch-icon.png, og-image.png");
