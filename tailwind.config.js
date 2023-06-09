/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#29a876",
          "secondary": "#3B82F6",
          "accent": "#12181B",
          "neutral": "#faf9fb", 
          "base-100": "#f2f2f3",
          "base-200": "#e7e5e4",
          "base-300": "#fafafa",
          "info": "#2775C3",
          "success": "#4ADE80",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
        dark: {
          "primary": "#29a876",
          "secondary": "#3B82F6",
          "accent": "#f2f2f3",
          "neutral": "#1D2025", 
          "base-100": "#12181B",
          "base-200": "#1D2025",
          "base-300": "#404040",
          "info": "#2775C3",
          "success": "#4ADE80",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
      },
    ],
  },
}

