/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1142px',
    },
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#08111F',
      primary: '#6082B6',
      secondary: '#1200ff',
      gray: {
        DEFAULT: '#7780A1',
        dark: '#1C2331',
        one: '#A9A9A9	',
        two: '#808080	',
        three: '#D3D3D3',
      },
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray'),
            fontSize: '1.125rem',
          },
        },
      }),
    },
  },
  plugins: [],
}
