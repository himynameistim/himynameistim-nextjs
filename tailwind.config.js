/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-color': 'rgb(255, 122, 127)',
        'text-on-site-color': '#fff',
        'heading-color': 'rgb(255, 122, 127)',
        'main-text-color': '#757575',
        'border': '#e8edf1',
      },
      spacing: {
        'element': '2.5rem',
      },
    },
  },
  plugins: [],
}
