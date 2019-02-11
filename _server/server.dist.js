/*eslint-disable no-console*/
import path from 'path';
import express from 'express';
import compression from 'compression';

const app   = express(),
      PORT  = 3000;

//webpack
app.use(compression());

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get('*',
  (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  }
);

app.listen(PORT, (error) => {
  if (error) throw(error);
  console.log(`Server started on port ${PORT}`);
});
