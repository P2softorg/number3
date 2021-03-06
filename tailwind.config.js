// const colors = require('tailwindcss/colors')
// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//    theme: {
//     colors: {
//       'test-blue': {
//         100: '#d0e7fb',
//         DEFAULT: '#0063bd',
//         500: '#4299e1',
//         700: '#2b6cb0',
       
//       },
//       transparent: 'transparent',
//       current: 'currentColor',
//       black: colors.black,
//       white: colors.white,
//       gray: colors.trueGray,
//       indigo: colors.indigo,
//       red: colors.rose,
//       yellow: colors.amber,
//       teal: colors.teal
//     }
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }
const { emerald } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    debugScreens:{
      position:['top','left'],
    },
    extend:{
   colors: {
      'test-blue': {
        100: '#d0e7fb',
        DEFAULT: '#0063bd',
        500: '#4299e1',
        700: '#2b6cb0',
        
      },
      green: colors.green,
      teal: colors.teal,
      emerald: colors.emerald
    },
     backgroundColor: ['active'],
    },
 
  },

  variants: {},
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}
