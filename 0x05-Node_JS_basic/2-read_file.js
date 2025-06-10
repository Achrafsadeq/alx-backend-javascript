const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    if (!data) throw new Error('Cannot load the database');

    const lines = data.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    const fieldIndex = headers.length - 1;

    const students = lines.slice(1);
    const total = students.length;

    console.log(`Number of students: ${total}`);

    const fields = {};

    students.forEach((line) => {
      const values = line.split(',');
      const field = values[fieldIndex];
      const firstName = values[0];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    for (const field in fields) {
      const list = fields[field];
      console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
