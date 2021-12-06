module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#daa520',
      secondary: '#E8388D',
      gray: '#f5f5f5',

      textcolor: {
        dark: "#000000",
        light: "#484b6a",
      },
      background: {
        light: '#ffffff',
        DEFAULT: '#e6e6e6',
        dark: '#000000',
      },

    },
    fontSize: {
      'h1': '36px',
      'h2': '32px',
      'h3': '24px',
      'xs': '75rem ',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
