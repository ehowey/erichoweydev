/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["figtree", "sans-serif"],
    },
    extend: {
      colors: {
        "eric-blue": "hsl(190, 80%, 78%)",
      },
    },
  },
  plugins: [],
}
