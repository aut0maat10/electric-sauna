module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'catamaran': ["Catamaran", "sans-serif"],
        'rubik-mono': ["Rubik Mono One", "sans-serif"]
      },
      fontSize: {
        'xxl': '12rem',
      },
      backgroundImage: {
        'hero': "url('../assets/mixing-console.jpg')",
        'robin': "url('../assets/robin-rock-shop.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
