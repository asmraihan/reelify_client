/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {

          "primary": "#ffdd59",

          "secondary": "#f97aed",

          "accent": "#3fdb6e",

          "neutral": "#151623",

          "base-100": "#f8f9fc",

          "info": "#9bcbe9",

          "success": "#1a6b3e",

          "warning": "#dc7a18",

          "error": "#e42158",
        },
        dark: {


          "primary": "#fcffbf",

          "secondary": "#7ab1ef",

          "accent": "#221f93",

          "neutral": "#191c1f",

          "base-100": "#3b383d",

          "info": "#54d4ed",

          "success": "#148f62",

          "warning": "#f1b337",

          "error": "#fa4c4c",
        },
      },
    ],
  },
}

