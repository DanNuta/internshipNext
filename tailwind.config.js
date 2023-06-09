import darkMode from "./";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        card: "#F2F9FF",
        "clr-primary": "#040934",
        "clr-secondary": "#7C7C7C",
        "clr-border": "#F0F1F7",
        "btn-color": "#0E8CC2",
        "color-body": "#E5E5E5",
        "dark-color": "#181A2A",
        "footer-dark": "#141624",
        "footer-text-dark": "#97989F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontSize: {
        "fs-22": "22px",
      },

      content: {
        imageDarkMode: 'url("/next.svg")',
      },
    },
  },
  plugins: [],
};
