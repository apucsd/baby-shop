import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1440px",
      }
    },
    extend: {
      colors: {
        primary: "#1E412A",
        secondary: "#ECA2A4",
        tertiary: "#F4DCD5",
        quaternary: "#D05A4E",
      },
    },
  },
  plugins: [],
};
export default config;
