import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary_fixed: "#CB29BE",
        on_surface: "#101828",
      },
      boxShadow: {
        main: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    require('tailwind-scrollbar')
  ],
};
export default config;
