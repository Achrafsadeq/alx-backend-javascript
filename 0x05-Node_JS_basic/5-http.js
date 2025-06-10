const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    try {
      await countStudents(process.argv[2]);
      res.end();
    } catch (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  }
});

app.listen(1245);

module.exports = app;
