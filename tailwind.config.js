const { width } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      width : "100%",
    },
    extend: {
      'sm': '640px',
      'md': '768px',
      'lg':'1024px',
      'xl': '12280px',
      '2xl': '1536px'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
