/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss"], // Only if you're using Tailwind
  trailingComma: "es5",
}
