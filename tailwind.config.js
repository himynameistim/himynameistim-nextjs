module.exports = {
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      textColor: {
        'highlight': 'rgb(255, 122, 127)'
      },
      extend: {
        colors: {
          'accent-1': '#333',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }