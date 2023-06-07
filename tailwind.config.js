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
          "primary": "#29a876",
          "secondary": "#3B82F6",
          "accent": "#A855F7",
          "neutral": "#faf9fb", 
          "base-100": "#f2f2f3",
          "info": "#2775C3",
          "success": "#4ADE80",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
        dark: {
          "primary": "#29a876",
          "secondary": "#3B82F6",
          "accent": "#A855F7",
          "neutral": "#1D2025", 
          "base-100": "#12181B",
          "info": "#2775C3",
          "success": "#4ADE80",
          "warning": "#EAB308",
          "error": "#EF4444",
        },
      },
    ],
  },
}

