const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
});

app.listen(3000, () => {
  console.log('READY');
});