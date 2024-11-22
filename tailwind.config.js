/** @type {import('tailwindcss').Config} */
import defaultColors from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...defaultColors,
      primary: {
        50: '#e6edff',
        100: '#dbebfe',
        200: '#bedcff',
        300: '#92c7fe',
        400: '#5fa7fb',
        500: '#5A8CF1',
        600: '#316fee',
        700: '#1b50da',
        800: '#1d41b0',
        900: '#1d3c8b',
        950: '#162655',
        DEFAULT: '#316fee',
      },
      gray: {
        '50': '#f5f5f8',
        '100': '#eeeeee',
        '200': '#d1d1d1',
        '300': '#dcdcdc',
        '400': '#999999',
        '500': '#666666',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
        DEFAULT: '#666666',
      },
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      },
    },
  },
  plugins: [],
}

