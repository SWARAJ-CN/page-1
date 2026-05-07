/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DA1F2",
        darkbg: "#0f172a",
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

// tailwind  recomendation configuration