const express = require('express');

/**
 * Creates a small HTTP server using Express.
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = ap;
