import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        karantina: ["Karantina", "sans-serif"],
      },
      colors: {
        white: "#fff",
        red: "#FF5757",
        "gray-light": "rgba(255, 255, 255, 0.05)",
        "gray-middle": "rgba(255, 255, 255, 0.10)",
        "gray-strong": "rgba(255, 255, 255, 0.20)",
        "overlay-light": "rgba(2, 15, 8, 0.50)",
        "overlay-strong": "rgba(2, 15, 8, 0.75)",
        "overlay-burger": "rgba(1, 10, 5, 0.75)",
      },
    },
  },
  plugins: [],
};
export default config;
