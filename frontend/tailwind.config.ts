import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./App/**/*.{js,ts,jsx,tsx,mdx}",
    "./Layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./Content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        slide1bg: "url('/images/hyundai-motor-group-a3vDd8hzuYs-unsplash.jpg')",
        slide2bg: "url('/images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg')",
        slide3bg: "url('/images/joey-banks-YApiWyp0lqo-unsplash.jpg')",
        aboutbg: "url('/images/joey-banks-YApiWyp0lqo-unsplash.jpg')",
        searchbg: "url('/images/search-bg.jpg')",
        banner: "url('/images/banner.jpg')",
      },
    },
    colors: {
      brand_primary: {
        50: "#FFFFFF",
        100: "#121F50",
        150: "#50121f",
        200: "#090f26",
      },
      brand_neutral: {
        50: "#f0f0f0",
        100: "#f9f9f9",
        150: "#040712",
        200: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
export default config;
