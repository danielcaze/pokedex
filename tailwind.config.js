/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2B807",
        secondary: "#F28F16",
        terciary: "#F5DB13",
        danger: "#D93E30",
        safe: "#73D677"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
