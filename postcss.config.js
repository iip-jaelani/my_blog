module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('postcss-nested'), // or require('postcss-nesting')
    ]
  }