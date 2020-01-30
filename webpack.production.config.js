/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import base from './webpack.config.base';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  context: path.resolve(__dirname, 'dist'),
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    library: 'react-typing-effect',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: { contentBase: path.resolve(__dirname, 'dist') },
  resolve: { symlinks: false },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    // new ExtractTextPlugin('style.css', { allChunks: false })
    // new UglifyJsPlugin()
  ],
  ...base
};
