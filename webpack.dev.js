const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    host: 'localhost',
    static: './dist',
    hot: true,
    open: true,
    historyApiFallback: true,
    // proxy: [
    //   {
    //     context: ['/api'],
    //     target: `https://${process.env.REACT_APP_API_SERVER}`,
    //     changeOrigin: true,
    //     withCredentials: true,
    //   },
    // ],
  },
});
