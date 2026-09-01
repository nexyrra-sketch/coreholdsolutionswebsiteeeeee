// Self-hosted fonts via Fontsource (npm-distributed static font files) rather
// than next/font/google's build-time fetch from fonts.googleapis.com. Two
// reasons: this build environment's network egress doesn't reach Google
// Fonts, and self-hosting is the better Core Web Vitals choice anyway —
// no extra DNS/connection round-trip to a third-party font host at runtime.
//
// Actual font-family names are set as CSS custom properties in
// app/globals.css (--font-display, --font-body, --font-display-ar,
// --font-body-ar); this file only pulls in the @font-face rules.
import "@fontsource-variable/newsreader";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-naskh-arabic";
import "@fontsource-variable/noto-sans-arabic";
