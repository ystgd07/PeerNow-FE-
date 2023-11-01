/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js',
  ],
  theme: {
    backgroundImage: {
      main: "url('./assets/images/office.jpg')",
    },
    extend: {
      colors: {
        transparent: 'transparent',
        email: '#FFB900',
        section: '#EFEFEF',
      },
      width: {
        PjtInfo: '612px',
        PjtCard: '590px',
        SectionW: '100%',
      },
      height: {
        PjtCard: '218px',
        PjtInfo: '623px',
        SectionH: '768px',

        fontFamily: {
          suite: ['SUITE', 'sans'],
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar')],
};
