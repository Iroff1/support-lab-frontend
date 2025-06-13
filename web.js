const path = require('path');
const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get('*', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
