import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#2E62FF",
        secondaryYellow: "#FFCD00",
        tertiaryGreen: "#008130",
        pureBlack: "#000000",
        pureWhite: "#FFFFFF",
        grayDivision: "#808080",

      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
} satisfies Config;
