import path from 'path';

export default [
  {
    test: /\.js$/,
    include: path.resolve(__dirname, '../src'),
    use: [{ loader: 'babel-loader' }]
  },
  {
    test: /\.css$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader', options: { importLoaders: 1 } },
      { loader: 'postcss-loader' }
    ]
  },
  {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' }, // creates style nodes from JS strings
      { loader: 'css-loader', options: { importLoaders: 1 } }, // translates CSS into CommonJS
      { loader: 'postcss-loader' },
      { loader: 'sass-loader' } // compiles Sass to CSS
    ]
  },
  {
    test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|svg|otf|ttf)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          limit: 5000000,
          name: '[path][name].[ext]?[hash]'
        }
      }
    ]
  }
];
