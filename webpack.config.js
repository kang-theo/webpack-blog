const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'dist.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Apply loader to all CSS files
        use: [
          'style-loader', // Inject CSS into the page
          'css-loader' // Parse CSS and build style blocks
        ] 
      },
      // {
      //   test: /\.js$/, // Apply loader to all JavaScript files
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader' // Example: Use Babel to transpile ES6+ to ES5
      //   }
      // }
    ]
  }
};
