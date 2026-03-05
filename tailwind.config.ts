import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        reverse: {
          /** Verde Reverse (específico de marca). */
          lime: "#73C544",
          "lime-muted": "rgba(115, 197, 68, 0.15)",
          blue: "#4495F0",
          "blue-light": "rgba(68, 149, 240, 0.15)",
          black: "#0A0A0A",
          secondary: "#111827",
          muted: "#6B7280",
          border: "#E5E7EB",
          "soft-bg": "#F6F7F9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1" }],
        "heading": ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.2" }],
      },
      borderRadius: {
        "reverse": "1rem",
        "reverse-lg": "1.25rem",
      },
      boxShadow: {
        "reverse": "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "reverse-md": "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
