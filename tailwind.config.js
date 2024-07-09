/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        poppins: "Poppins",
      },
      colors: {
        primary: "#B23920",
        secondary: "#F7B754",
        terttiary: "#223c5f",
      },
    },
  },
  plugins: [],
};

