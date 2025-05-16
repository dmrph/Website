/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5', // Indigo
          dark: '#6366F1',
        },
        secondary: {
          light: '#10B981', // Emerald
          dark: '#10B981',
        },
        background: {
          light: '#FFFFFF', // White
          dark: '#111827', // Dark Gray
        },
        text: {
          light: '#1F2937', // Dark Gray
          dark: '#F9FAFB', // White
        },
        accent: {
          light: '#F59E0B', // Amber
          dark: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

