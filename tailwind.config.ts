// tailwind.config.ts
import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#121212",
        },
        foreground: {
          light: "#000000",
          dark: "#ffffff",
        },
        card: {
          light: "#f8f9fa",
          dark: "#1e1e1e",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
