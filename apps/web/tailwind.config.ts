import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2ffe7",
          100: "#ddffc4",
          200: "#bfff88",
          300: "#9cff4d",
          400: "#76f51d",
          500: "#58d80a",
          600: "#3fad04",
          700: "#328309",
          800: "#2b670d",
          900: "#245711",
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
