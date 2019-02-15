/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import loaders from './loaders';

export default {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, '../src'),
  target: 'web',
  entry: {
    index: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
      './lib/index.js'
    ],
    demo: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
      './index.js'
    ]
  },
  output: {
    library: 'react-typing-effect',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: { contentBase: path.resolve(__dirname, '../src'), hot: true },
  resolve: { symlinks: false },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: { rules: loaders }
};
