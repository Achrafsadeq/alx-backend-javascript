const fs = require('fs').promises;

/**
 * Asynchronously reads a CSV database file and counts students by field
 * @param {string} path - Path to the CSV file
 * @returns {Promise} Promise that resolves when counting is complete
 */
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then(data => {
      const lines = data.split('\n').filter(line => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return;
      }

      const students = lines.slice(1).map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, age, field };
      });

      console.log(`Number of students: ${students.length}`);

      const fieldGroups = {};
      students.forEach(student => {
        if (!fieldGroups[student.field]) {
          fieldGroups[student.field] = [];
        }
        fieldGroups[student.field].push(student.firstname);
      });

      Object.keys(fieldGroups).forEach(field => {
        const names = fieldGroups[field];
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
