import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      "#1e1a31", // deep dark purple — primary background
          muted:   "#9792a9", // muted purple/grey — secondary text
          accent:  "#6455d7", // vibrant purple — CTAs, selected states
          light:   "#e5dcfb", // light lavender — highlights, badges
        },
        profile: {
          operator:    "#2563EB",
          ceiling:     "#16A34A",
          firefighter: "#EA580C",
          bottleneck:  "#7C3AED",
          notyet:      "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(100,85,215,0.25) 0%, transparent 70%)",
      },
      animation: {
        "fade-in":  "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
