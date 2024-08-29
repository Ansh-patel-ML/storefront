/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@storefront/ui/**/*.{ts,tsx}' // Include your component library
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

