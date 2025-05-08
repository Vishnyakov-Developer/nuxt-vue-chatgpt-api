/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  safelist: ['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'],
  theme: {
    screens: {
      xl: '1480px',
      lg: '1200px',
      md: '1000px',
      sm: '840px',
      vsm: '600px',
    },
    fontFamily: {
      anton: ['Anton', 'sans-serif'],
      involve: ['Involve', 'sans-serif'],
    },
    borderWidth: {
      sm: '1px',
    },
    borderRadius: {
      sm: '8px',
    },
    extend: {
      transitionDuration: {
        DEFAULT: '0.3s',
      },
      fontSize: {
        sm: '10px',
        base: '12px',
        xl: '14px',
        big: '100px',
        '2xl': '16px',
        '3xl': '18px',
        '4xl': '20px',
        '5xl': '22px',
        '27px': '27px',
        '6xl': '64px',
      },
      colors: {
        background: '#111111',
        section: '#090909',
        text_primary: '#FFFFFF',
        accent: '#4C91C7',
      },
    },
  },
  plugins: [],
}