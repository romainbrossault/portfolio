/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#dc2626',
          dark: '#b91c1c',
          light: '#ef4444',
        },
        dark: {
          DEFAULT: '#111111',
          lighter: '#1a1a1a',
          darker: '#0a0a0a',
        }
      }
    },
  },
  plugins: [],
} 