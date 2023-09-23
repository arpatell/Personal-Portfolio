/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.html',
    './app/**/*.js',
    './app/**/*.jsx',
    './app/**/*.ts',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#e74c3c',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

