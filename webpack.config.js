// The path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require('path');


module.exports = {
  entry: ['./src/index.js', './src/react.js'],
  output: {
    filename: 'bundle.js',
    // __dirname: node.js global varable that the file dir is stored
    // The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
    path: path.resolve(__dirname, './dist')
  },
  module: {
  	rules: [
  	  {
        // In this case any file that ends with .css
        // will be served to the style-loader and 
        // the css-loader.
  	  	test: /\.css$/,
  	  	use: [
  	  	  'style-loader',
  	  	  'css-loader'
  	  	]
  	  },
  	  {
  	  	test: /\.(png|svg|jpg|gif)$/,
  	  	use: [
  	  	  'file-loader'
  	  	]
  	  },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',          
          query: {
            presets: ['es2015', 'react']
          }
        }
      }
  	]
  },

};