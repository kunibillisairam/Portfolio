/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",   // toggle via .dark class on <html>
  theme: {
    extend: {
      // ─── Typography ─────────────────────────────────────
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body:    ["Inter", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "hero-name": [
          "clamp(4rem, 10vw, 9rem)",
          { lineHeight: "0.92", letterSpacing: "-0.02em" },
        ],
        "hero-sub": [
          "clamp(1.8rem, 3.8vw, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        "section-title": [
          "clamp(2rem, 4vw, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },

      // ─── Spacing ────────────────────────────────────────
      spacing: {
        "section":    "7rem",
        "section-sm": "4rem",
        "18": "4.5rem",
        "22": "5.5rem",
      },

      // ─── Border Radius ──────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.75rem",
      },

      // ─── Animations ─────────────────────────────────────
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "float":      "float 6s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
