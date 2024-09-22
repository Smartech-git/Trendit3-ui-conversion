import { nextui } from "@nextui-org/theme";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary_fixed: "#CB29BE",
        secondary_fixed: "#6941C6",
        tertiary_fixed: "#175CD3",
        success: "#4CAF50",
        error: "#FF3D00",
        on_surface: "#101828",
      },
      screens: {
        "4kScreen": "2000px",
        xs: "450px",
        xxs: "340px",
      },

      boxShadow: {
        main: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "main-lg": "0 4px 6px -2px rgba(16, 24, 40, 0.03), 0 12px 16px -4px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animated"), require("tailwind-scrollbar")],
};
export default config;
