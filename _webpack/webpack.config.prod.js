/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import webpack from 'webpack';
import loaders from './loaders';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  mode: 'production',
  // devtool: 'source-map',
  context: path.resolve(__dirname, '../dist'),
  target: 'web',
  entry: {
    index: path.resolve(__dirname, '../src/lib/index.js'),
    // demo: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    library: 'react-typing-effect',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: { contentBase: path.resolve(__dirname, '../dist') },
  resolve: { symlinks: false },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    // new ExtractTextPlugin('style.css', { allChunks: false })
    // new UglifyJsPlugin()
  ],
  module: { rules: loaders }
};
