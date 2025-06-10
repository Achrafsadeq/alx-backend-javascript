const http = require('http');
const fs = require('fs').promises;
const url = require('url');

/**
 * Asynchronously reads a CSV database file and returns student data
 * @param {string} path - Path to the CSV file
 * @returns {Promise<string>} Promise that resolves with formatted student data
 */
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');

      if (lines.length <= 1) {
        return 'Number of students: 0';
      }

      const students = lines.slice(1).map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, age, field };
      });

      let result = `Number of students: ${students.length}\n`;

      const fieldGroups = {};
      students.forEach(student => {
        if (!fieldGroups[student.field]) {
          fieldGroups[student.field] = [];
        }
        fieldGroups[student.field].push(student.firstname);
      });

      Object.keys(fieldGroups).forEach(field => {
        const names = fieldGroups[field];
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      return result.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const databasePath = process.argv[2];
    res.write('This is the list of our students\n');

    if (!databasePath) {
      res.end('Cannot load the database');
      return;
    }

    countStudents(databasePath)
      .then(data => {
        res.end(data);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
