/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '50': '#f0f6fe',
          '100': '#dde9fc',
          '200': '#c3dafa',
          '300': '#9ac3f6',
          '400': '#6ba4ef',
          '500': '#4882e9',
          '600': '#3365dd',
          '700': '#2a51cb',
          '800': '#2843a5',
          '900': '#263c82',
          '950': '#1b264f',
      }
      }
    },
  },
  plugins: [],
}

