/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      scrollBehavior: {
        smooth: 'smooth',
      },

      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowsemi: ['BarlowSemi', 'sans-serif'],
        barlowlight: ['BarlowLight', 'sans-serif'],
        barlowextralight: ['BarlowExtraLight', 'sans-serif'],
        jetlabmedium: ['JetlabMedium', 'sans-serif'],
        jetlablight: ['JetlabLight', 'sans-serif'],
        jetlabstretch: ['JetlabStretch', 'sans-serif'],
        lexendlight: ['LexendExtraLight', 'sans-serif'],
        lexendbold: ['LexendExtraBold', 'sans-serif'],
        lexend: ['LexendRegular', 'sans-serif'],
        dmserifdisplay: ['DMSerifDisplay', 'serif'],
        partsold: ['Partsold', 'sans-serif']
      },

      animation: {
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      
      keyframes: {
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-0.5px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(1px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-2px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(2px, 0, 0)'
          }
        }
      }

    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require('@tailwindcss/typography'),

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],

  darkMode: "class"
}
