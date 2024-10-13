/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'lgCols': "15em 15em 15em 15em"
      },
      gridTemplateRows: {
        'lgRows': "3em 15em 1em 11em 11em 0"
      },
      fontFamily: {
        'dms': ['DM Sans', 'sans-serif'],
      },
      backgroundColor: {
        'altYellow': "hsl(39, 100%, 71%)",
        'altPurple': "hsl(256, 67%, 59%)",
        'altYellowLight': "hsl(31, 66%, 93%)",
        'altPurpleLight': "hsl(254, 88%, 90%)"
      },
    },
  },
  plugins: [],
}

