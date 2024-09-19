import type { Config } from "tailwindcss";

const opacityArray = Array(100).fill(0).map((_, i) => `opacity-[${i}%]`);
const translateXArray = Array(100).fill(0).map((_, i) => `translate-x-[${i}%]`);
const scaleArray = Array(200).fill(0).map((_, i) => `scale-[${i}%]`);
const rotateArray = Array(360).fill(0).map((_, i) => `rotate-[${i}deg]`);

const config: Config = {
  safelist: [
    ...opacityArray,
    ...translateXArray,
    ...scaleArray,
    ...rotateArray
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: []
};
export default config;
