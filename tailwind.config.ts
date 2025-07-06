import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  fontFamily: {
    montserrat: ["Montserrat", "sans-serif"],
  },
  theme: {
    colors: {
      mutebrown: "#524632",
      lightbeige: "#edcb96",
      armygreen: "#468c49",
    },
  },
} satisfies Config;
