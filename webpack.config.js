import path from 'path';
import webpack from 'webpack';
import base from './webpack.config.base';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'src'),
  node: {
    __filename: true
  },
  target: 'web',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './Demo.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'demo.js'
  },
  devServer: { contentBase: path.resolve(__dirname, 'src'), hot: true },
  resolve: { symlinks: false },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  ...base
};
