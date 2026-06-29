import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F1115",
        "bg-secondary": "#171A21",
        card: "rgba(255,255,255,0.035)",
        text: "#F4F1EA",
        "text-secondary": "#B8B2A7",
        muted: "#7E7A72",
        green: "#2E5F4F",
        brass: "#B08D57",
        line: "rgba(244,241,234,0.10)",
        "line-soft": "rgba(244,241,234,0.06)",
        "line-card": "rgba(244,241,234,0.08)",
      },
      fontFamily: {
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "70rem",
        prose: "42.5rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
      keyframes: {
        reveal: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
