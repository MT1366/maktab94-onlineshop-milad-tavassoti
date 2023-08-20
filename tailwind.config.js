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
        20: "10vw",
        40: "20vw",
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
        10: "10vh",
        20: "20vh",
        30: "30vh",
        40: "40vh",
        50: "50vh",
        98: "90vh",
        99: "95vh",
        100: "100vh",
        129: "800px",
      },
      colors: {
        "regal-blue": "#243c5a",
        "light-blue": "#0000FF",
        "ocean-blue": "#0A53B2",
        "pale-blue": "#EDF0F6",
      },
      left: {
        110: "500px",
      },
    },
  },
  plugins: [],
});
