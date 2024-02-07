const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map", // Map generated code back to original source code
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'dist.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Blog posts"
  })],
  module: {
    rules: [
      {
        test: /\.css$/i, // Apply loader to all CSS files
        use: [
          'style-loader', // Inject CSS into the page
          'css-loader' // Parse CSS and build style blocks
        ] 
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i, // Apply loader to all image files
        type: 'asset/resource'
      },
      {
        test: /\.js$/, // Apply loader to all JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Example: Use Babel to transpile ES6+ to ES5
          options: { 
            presets: ['@babel/preset-env'] 
          }
        }
      }
    ]
  }
};
