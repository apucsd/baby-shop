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
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#28948D",
        secondary: "#A5DFD5",
        tertiary: "#F4DCD5",
        quaternary: "#28948D",
      },
    },
  },
  plugins: [],
};
export default config;
