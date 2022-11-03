/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-leaf': '#055346',
        'pale-yellow': '#f9efe9' 
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
