/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  purge:[
    './src/**/*.{js,ts,jsx,tsx}',
    "./index.html",
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

