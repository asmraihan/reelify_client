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

          "base-100": "#f7f7f9",

          "info": "#9bcbe9",

          "success": "#29a876",

          "warning": "#dc7a18",

          "error": "#fa4c4c",
        },
        dark: {


          "primary": "#040714",

          "secondary": "#7ab1ef",

          "accent": "#221f93",

          "neutral": "#272c35",

          "base-100": "#0b0c0f",

          "info": "#54d4ed",

          "success": "#29a869",

          "warning": "#f1b337",

          "error": "#e50914",
        },
      },
    ],
  },
}

