/*eslint-disable no-console*/
import path from 'path';
import express from 'express';

import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../_webpack/webpack.config';

const app   = express(),
      PORT  = 3000;

//webpack
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve(__dirname, "../src")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../src"));
});

app.listen(PORT, (error) => {
  if (error) throw(error);
  console.log(`Server started on port ${PORT}`);
});
