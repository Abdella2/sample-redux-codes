const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        port: 9000
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
      },
  };