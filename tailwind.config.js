/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cool-green': '#A3EBB7',
        'cool-blue' : '#3575D6',
        'my-green' : '#4ECB71',
        'dark-green' :'#525C4E',
      },
    },
  },
  plugins: [require("daisyui")],
}

