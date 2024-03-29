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
      xxl: '1400px',
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
      blue: {
        DEFAULT: '#1d4ed8',
        dark: '#1e40af',
        one: '#2563eb',
        two: '#3b82f6',
        three: '#60a5fa',
      },
      gray: {
        DEFAULT: '#7780A1',
        dark: '#1C2331',
        one: '#A9A9A9	',
        two: '#808080	',
        three: '#D3D3D3',
      },
      slate: {
        DEFAULT: '#020617',
        dark: '#0f172a',
        one: '#1e293b',
        two: '#334155',
        three: '#475569',
        four: '#64748b',
        five: '#94a3b8',
        six: '#cbd5e1',
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
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
