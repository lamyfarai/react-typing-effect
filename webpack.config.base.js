const path = require('path');

module.exports = {
  resolve: {
    symlinks: false,

    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src'),
    ],
    alias: {
      'react-typing-effect': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: ['babel-loader']
      },
    ]
  }
};
