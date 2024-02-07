const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'dist.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
};
