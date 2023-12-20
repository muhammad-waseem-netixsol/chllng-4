/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mona: ["Mona-Sans", "sans-serif"],
      },
    }, 
  },
  container: {
    container: {
      screens: {
          'sm': '100%',
          'md': '100%',
          'lg': '100%',
          'xl': '100%',
          '2xl': '100%',
      }
  }
},
 
}

