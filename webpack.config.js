const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    popup: './popup.js',
    options: './options.js',
    background: './background.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'cheap-module-source-map'
};