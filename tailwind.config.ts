import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        btnPrimary: '#CB29BE',
        inputTextHolder: '#667085'
      },
      fontFamily: {
        redHat: ["Red Hat Display","sans-serif"]
      },
      borderColor: {
        inputBorder:  '#DOD5DD'
      },
      fontSize: {
        small: '14px',
        medium: '16px',
        large: '24px'
      }
    },
  },
  plugins: [nextui()],
};
export default config;
