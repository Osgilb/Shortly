/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './html/*.html',
        './js/*.js',
    ],
  theme: {
      extend: {
          maxWidth: {
            '8xl': '1450px',
          },
    },
  },
  plugins: [],
}
