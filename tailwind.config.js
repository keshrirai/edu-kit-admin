module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {

      backgroundImage: {
        'card-img': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)) url('/public/imge/cryptobig.png')",
        'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/public/imge/cryptobig.png')",
      }
    },
  },
  plugins: [],
}