const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

/** Allow to resonce to provide static html */
app.use(express.static(path.join(__dirname, 'dist')));

/** Path Routing
 * @description Allow whole routing to React static app
 */
app.get('/', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});
app.get('*', function (_, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

/** Server Start */
const PORT = process.env.REACT_APP_PORT || 8001;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});
