const path = require('path');
const { merge } = require('webpack-merge');
const { SourceMapDevToolPlugin } = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    // host: '192.168.100.25',
    port: 4444,
    // open: true,
    contentBase: [
      path.join(__dirname, './public'),
      path.join(__dirname, './src/assets/diplomas'),
      path.join(__dirname, './src/assets'),
    ],
    historyApiFallback: true,
    // compress: true,
  },

  plugins: [new SourceMapDevToolPlugin()],
  devtool: false,
});
