import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        catalog_bg_image: "url('/images/catalog-header-bg.jpeg')",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        audrey: ["var(--font-audrey)"],
        josefin_sans: ["var(--font-josefin_sans)"],
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        primary: "#E05824",
        secondary: "#2D2D2D",
      },
    },
  },
  plugins: [],
};
export default config;
