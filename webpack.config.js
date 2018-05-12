import path from "path";
import webpack from "webpack";

export default {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, "src"),
  target: 'web',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    "./index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  resolve: {
    symlinks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{loader: 'babel-loader'}]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { importLoaders: 1 } },
          { loader: "postcss-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: 'css-loader', options: { importLoaders: 1 } }, // translates CSS into CommonJS
          { loader: "postcss-loader" },
          { loader: "sass-loader" } // compiles Sass to CSS
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|svg|otf|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 5000000,
              name: "[path][name].[ext]?[hash]"
            }
          }
        ]
      }
    ]
  }
};
