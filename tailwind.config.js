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

          "primary": "#570d",

          "secondary": "#f000b8",

          "accent": "#1dcdbc",

          "neutral": "#2b3440",

          "base-100": "#ffffff",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
        dark: {

          "primary": "#f74fa0",

          "secondary": "#fcbf9f",

          "accent": "#c0f44e",

          "neutral": "#1b1b22",

          "base-100": "#424352",

          "info": "#88d3e7",

          "success": "#0f623e",

          "warning": "#c69c10",

          "error": "#e62f28",
        },
      },
    ],
  },
}

