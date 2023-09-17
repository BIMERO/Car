import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
    },
  },
  plugins: [],
};
export default config;
