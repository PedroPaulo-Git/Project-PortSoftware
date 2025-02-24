import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Blue_Primary: "#015DAF", 
        Blue_Second: "#135B9D", 
        darkCustom: "#121113",
        grayCustom: "#a4a3a7",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
