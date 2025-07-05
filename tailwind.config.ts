import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  fontFamily: {
    montserrat: ["Montserrat", "sans-serif"],
  },
} satisfies Config;
