/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    fontFamily: {
      'main': ['Poppins']
    },
    extend: {
    colors:{
      primary: '#2196F3',
      secondary: '#F44336',
      third: '#363449',
      fourth: '#F5A524',
      light: '##ECEEF0',
    }
    },
  },
  plugins: [],
}