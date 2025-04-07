/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        menuBgButton: "#1D3962",
        menuBgButtonHover: "#0A2042",
        bgMain: "#102D57",

      },
    },
  },
  plugins: [],
}

