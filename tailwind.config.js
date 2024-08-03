
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      screens:{
        "other" : {'min':'340px', 'max':'1260px'}
      }
    },
  },
  plugins: [],
};

