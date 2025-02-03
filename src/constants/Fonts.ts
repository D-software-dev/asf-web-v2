import { Montserrat, Righteous, Rozha_One } from "next/font/google";

// Primary heading font - Modern and playful
export const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});

// Secondary heading font - Decorative with gravitas
export const rozhaOne = Rozha_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rozha-one",
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});

// Body text - Refined and readable
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["system-ui", "arial"],
  preload: true,
  adjustFontFallback: true,
});
