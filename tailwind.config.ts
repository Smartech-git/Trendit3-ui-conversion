import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary_fixed: "#CB29BE",
        on_surface: "#101828",
      },
      screens: {
        '4kScreen': '2000px',
        'xs': '450px',
        'xxs': '340px'
      },
      animation: {
        'pulse' :'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        pulse: {
          '0% , 100%': { opacity: 0.4},
          '50%': {opacity: 1},
        }
      },
      boxShadow: {
        main: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwindcss-animated'),require('tailwind-scrollbar')],
};
export default config;
