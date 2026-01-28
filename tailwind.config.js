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
        '1.25': '5px',
        '2.5': '10px',
        '3.75': '15px',
        '4.5': '18px',
        '6.25': '25px',
        '6.5': '26px',
        '7.5': '30px',
        '12.5': '50px',
        '15': '60px',
        '17.5': '70px',
        '27.5': '110px',
      },
      fontSize: {
        '1.6xl': '1.6rem',
        '3.25xl': '30px',
        '6.5': '26px',
      },
      lineHeight: {
        'snug-plus': '1.625',
      },
      minHeight: {
        '50': '200px',
        '75': '300px',
        '100': '400px',
      },
      width: {
        '50': '200px',
        '75': '300px',
      },
    },
  },
  plugins: [],
}
