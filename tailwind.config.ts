import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#04080f",
          900: "#070d1a",
          800: "#0b1426",
          700: "#111d35",
          600: "#1a2a47",
        },
        brand: {
          400: "#4f8cff",
          500: "#2f6bf0",
          600: "#1f56d6",
        },
        cyan: {
          300: "#7fdcff",
          400: "#3cc8ff",
          500: "#19b8ff",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
