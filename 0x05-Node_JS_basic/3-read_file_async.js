const fs = require('fs');

/**
 * Asynchronously processes a CSV database file containing student records.
 * @param {string} dbPath - The file system path to the student database CSV file.
 * @returns {Promise} A promise that resolves after successfully processing student data.
 */
function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const fieldRegistry = new Map();
        let enrollmentRecords = data.split('\n');
        enrollmentRecords = enrollmentRecords.slice(1, enrollmentRecords.length - 1);

        enrollmentRecords.forEach((record) => {
          const recordFields = record.split(',');
          const studentName = recordFields[0];
          const academicField = recordFields[3];
          if (fieldRegistry.has(academicField)) {
            fieldRegistry.get(academicField).push(studentName);
          } else {
            fieldRegistry.set(academicField, [studentName]);
          }
        });

        console.log(`Number of students: ${enrollmentRecords.length}`);
        fieldRegistry.forEach((studentsInField, fieldName) => {
          console.log(`Number of students in ${fieldName}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
