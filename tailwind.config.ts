import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#050816",
        surfaceAlt: "#0f172a",
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#7dd3fc"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 30px -10px rgb(56 189 248 / 0.45)"
      },
      maxWidth: {
        content: "72rem"
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 20% 20%, rgba(125, 211, 252, 0.15), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
