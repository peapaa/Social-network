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
        btn: "rgb(120 104 243)",
        btnHover: "rgb(213 226 247 / 50%)",
        pink: "rgb(253, 215, 52)",
        roses: "rgb(248, 94, 159)",
      },
      screens: {
        mobile: { min: "325px", max: "500px" },
        tablet: { min: "501px", max: "767px" },
        laptop: { min: "768px", max: "1150px" },
        desktop: "1150px",
      },
      boxShadow: {
        shadowBtn: "box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
    },
  },
  plugins: [],
};
export default config;
