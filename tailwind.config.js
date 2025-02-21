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
        space: {
          base: '#0a0b1e',
          lighter: '#1a1b3c',
          dark: '#050614',
          accent: '#6366f1',
          highlight: '#a78bfa',
          nebula: '#4c1d95',
          star: '#fef3c7',
          meteor: '#f87171',
          cosmos: '#2563eb'
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'meteor': 'meteor 8s linear infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        meteor: {
          '0%': { transform: 'translateX(100%) translateY(-100%)', opacity: 1 },
          '100%': { transform: 'translateX(-100%) translateY(100%)', opacity: 0 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        }
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at center, var(--tw-colors-space-lighter), var(--tw-colors-space-base))',
        'nebula': 'radial-gradient(circle at center, var(--tw-colors-space-nebula), transparent)',
      }
    },
  },
  plugins: [],
}