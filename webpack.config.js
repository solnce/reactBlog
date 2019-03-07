const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/entry.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist/js'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
