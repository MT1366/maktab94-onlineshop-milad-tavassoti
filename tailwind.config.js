// /** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('src/images/loginformimage.png')",
      },
      width: {
        50: "40vw",
        50.5: "48vw",
        51: "50vw",
        52: "60vw",
        53: "70vw",
        54: "75vw",
        55: "80vw",
        100: "100vw",
        101: "45rem",
      },
      height: {
        99: "95vh",
        100: "100vh",
        129: "800px",
      },
    },
  },
  plugins: [],
});
