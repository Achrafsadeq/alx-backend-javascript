const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    try {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      await countStudents(process.argv[2])
        .then(() => {})
        .catch((err) => {
          res.end(err.message);
        });
    } catch (err) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  }
});

app.listen(1245);

module.exports = app;
