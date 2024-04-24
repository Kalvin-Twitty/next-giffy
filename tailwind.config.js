/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212', // Dark gray almost black
        primary: '#BB86FC', // Light purple
        secondary: '#03DAC6', // Teal
        text: '#E0E0E0', // Light gray
      }
    },
  },
  variants: {},
  plugins: [],
}
