/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        proxima: ['Proxima-Nova, sans'],
      },
      colors: {
        'navy-blue': '#07212c',
      },
    },
  },
  variants: {
    text: ['active'],
  },
  plugins: [],
}
