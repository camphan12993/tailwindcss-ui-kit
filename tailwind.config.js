module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFFCF5',
          300: '#FEE6A4',
          500: '#FED053',
          700: '#F4B301',
          900: '#997001',
        },
        secondary: {
          100: '#B3D0EE',
          300: '#70A6DF',
          500: '#2E7CD0',
          700: '#1D4F85',
          900: '#0D223A',
        },
        error: {
          100: '#FDEAEA',
          300: '#F6A0A0',
          500: '#EF5555',
          700: '#D41414',
          900: '#800C0C',
        },
        success: {
          100: '#A9EFAE',
          300: '#64E36C',
          500: '#26CF31',
          700: '#18811F',
          900: '#0A340C',
        },
        neutral: {
          50: '#F8F8F8',
          100: '#E3E5E6',
          200: '#C7CBCE',
          300: '#ABB2B6',
          400: '#8F989E',
          500: '#737F86',
          600: '#57656E',
          700: '#3B4C56',
          800: '#1F323E',
          900: '#031926',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
