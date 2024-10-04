/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black':'#313131',
      'blue': '#4B33E3',
      'offwhite': '#FFF5F5',
      'iconpink': '#FFA9A9',
      'iconyellow': '#FFFA81',
      'iconblue': '#7C91FF'
    },
    extend: {
      backgroundImage: {
        'vector1': "url('/Vector1.svg')",
      },
      backgroundImage: {
        'footer-gradient': 'linear-gradient(180deg, #4A008F 0%, rgba(74, 0, 143, 0) 100%)',
        'cards-gradient': 'linear-gradient(180deg, #6400BA 0%, rgba(206, 148, 255, 0) 100%)',
      },
      boxShadow: {
        'shadowpink': '3px 4px 4px 0px rgba(255, 15, 15, 0.25)',
        'shadowyellow': '3px 4px 4px 0px rgba(233, 223, 0, 0.6)',
        'shadowblue': '3px 4px 4px 0px rgba(0, 10, 255, 0.23)',
      },
    },
  },
  plugins: [],
}

