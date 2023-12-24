/* @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,ts}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{html,ts}",
      ],
  theme: {
    extend: {
      colors: {
        floralwhite: {
          "100": "#fefff8",
          "200": "#fffef8",
          "300": "rgba(255, 254, 248, 0.8)",
          "400": "rgba(254, 255, 248, 0)",
        },
        darkolivegreen: "#23562a",
        black: "#000",
        honeydew: "#e7f4e5",
        darkgray: "#9a9898",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "noto-sans": "'Noto Sans'",
        "bd-lifeless-grotesk": "'BD Lifeless Grotesk'",
        nunito: "Nunito",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "45xl": "64px",
      mini: "15px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      inherit: "inherit",
    },
    variants: {
      extend: {
        backgroundColor: ['hover'],
        textColor: ['hover'],
      },
  },
},
  corePlugins: {
    preflight: false,
  },
};

