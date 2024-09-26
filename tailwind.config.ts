import { nextui } from "@nextui-org/theme";
import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"],
  theme: {
    colors: {
      gray: {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "red",
      },
    },
    extend: {
      colors: {
        ...colors,
        primary_fixed: "#CB29BE",
        secondary_fixed: "#6941C6",
        tertiary_fixed: "#175CD3",
        success: "#4CAF50",
        error: "#FF3D00",
        scrim: "#0C111D",
        outline_varient: '#E4E7EC',
        illustration: '#1E1E1E',
        gray: {
          DEFAULT: '#B1B1B1',
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: '#E4E7EC',
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: '#344054',
          900: '#101828'
        },
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
});
