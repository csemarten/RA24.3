const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello MIT World');
});

//app.listen(port, () => {
//  console.log(`Server is running at http://localhost:${port}/`);
//});

exports.api = functions.https.onRequest(app);