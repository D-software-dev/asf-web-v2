import type { Config } from "tailwindcss";
import formsPlugin from "@tailwindcss/forms";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2B8500",
        pDark: "#58a337",
        secondary: "#4CAF50",
        accent: "#8BC34A",
      },
      fontFamily: {
        righteous: ["var(--font-righteous)"],
        "rozha-one": ["var(--font-rozha-one)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [formsPlugin], 
} satisfies Config;
