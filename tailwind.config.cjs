/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // Allow ui-library components' classes to be generated when imported
    "../propelbiz_ui-library/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // Shell app will provide preflight; disable if duplication occurs
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
