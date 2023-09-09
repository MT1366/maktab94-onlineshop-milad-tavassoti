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
        "landing-image": "url('src/images/landingpage.png')",
        "addidas-logo": "url('src/images/brands/addidas.png')",
        "balenciaga-logo": "url('src/images/brands/Balenciaga.png')",
        "bukalapak-logo": "url('src/images/brands/Bukalapak.png')",
        "gucci-logo": "url('src/images/brands/gucci.png')",
        "toki-logo": "url('src/images/brands/tokipedia.png')",
        "fashion-image": "url('src/images/groups/fashion.png')",
        "skincare-image": "url('src/images/groups/skincare.png')",
        "shoes-image": "url('src/images/groups/shoes.png')",
        "electronics-image": "url('src/images/groups/electronics.png')",
        "why-choose-image": "url('src/images/Why-Choose.png')",
      },
      width: {
        10: "8vw",
        20: "10vw",
        30: "15vw",
        40: "20vw",
        50: "40vw",
        50.5: "48vw",
        51: "50vw",
        51.5: "54vw",
        52: "60vw",
        53: "70vw",
        54: "75vw",
        55: "80vw",
        56: "90vw",
        100: "100vw",
        101: "45rem",
      },
      height: {
        9: "8vh",
        10: "10vh",
        20: "20vh",
        30: "30vh",
        40: "40vh",
        45: "45vh",
        50: "50vh",
        60: "60vh",
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
        "pale-green": "#3C9379",
      },
      left: {
        110: "500px",
      },
    },
  },
  plugins: [],
});
