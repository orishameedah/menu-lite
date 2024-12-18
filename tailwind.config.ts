import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        light: "#F2F4F5",
        bgImage: "#C2EBD3",
        green: "#15BA5C",
      },
      fontFamily: {
        product: ["var(--font-productSans)"],
      },
      backgroundImage: {
        burgerlay: "url('/assets/Menubg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
