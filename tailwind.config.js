module.exports = {
    purge: ['./layouts/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
        'fuchsia': 'rgba(217,70,239)'
       }),
      textColor: {
        'highlight': 'rgb(255, 122, 127)',
        'white': '#fff'
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