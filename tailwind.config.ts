import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#12141A",
          900: "#191C22",
          800: "#23262E",
          700: "#333740",
          600: "#4A4F5A",
          500: "#666B77",
        },
        paper: {
          50: "#FAF8F4",
          100: "#F2EEE6",
          200: "#E7E0D3",
        },
        brass: {
          50: "#FBF3E7",
          200: "#E9CB99",
          400: "#C99A4E",
          500: "#B9863F",
          600: "#9C6E30",
          700: "#7A5624",
        },
        line: "#D9D2C2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        "display-ar": ["var(--font-display-ar)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        "body-ar": ["var(--font-body-ar)", "system-ui", "sans-serif"],
      },
      fontSize: {
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        h4: ["1.5rem", { lineHeight: "1.35" }],
        h3: ["clamp(1.75rem, 1.5rem + 1vw, 2.25rem)", { lineHeight: "1.2" }],
        h2: ["clamp(2.25rem, 1.9rem + 1.5vw, 3rem)", { lineHeight: "1.12" }],
        h1: ["clamp(2.75rem, 2.1rem + 3vw, 4.5rem)", { lineHeight: "1.04" }],
      },
      spacing: {
        "section-y": "clamp(4rem, 3rem + 4vw, 7rem)",
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      transitionDuration: {
        250: "250ms",
        450: "450ms",
        700: "700ms",
        900: "900ms",
      },
      transitionTimingFunction: {
        vault: "cubic-bezier(0.16, 1, 0.3, 1)",
        "vault-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
