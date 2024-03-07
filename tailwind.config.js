/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      red: "hsl(7, 99%, 70%)",
      yellow: "hsl(51, 100%, 49%)",
      cyan: "hsl(167, 40%, 24%)",
      "cyan-moderate": "hsl(168, 34%, 41%)",
      blue: "hsl(198, 62%, 26%)",
      "blue-desaturated": "hsl(212, 27%, 19%)",
      "blue-gray": "hsl(210, 4%, 67%)",
      "blue-dark-gray": "hsl(232, 10%, 55%)",
      "blue-very-dark-gray": "hsl(213, 9%, 39%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        "hero-img": "url('../images/mobile/image-header.jpg')",
        "hero-img-desktop": "url('../images/desktop/image-header.jpg)",
      },
    },
  },
  plugins: [],
};
