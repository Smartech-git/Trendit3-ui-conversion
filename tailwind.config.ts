import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
