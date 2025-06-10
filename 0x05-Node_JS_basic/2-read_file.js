const fs = require('fs');

/**
 * Reads a CSV file containing student data, parses it, and logs
 * the total number of students and the number per field.
 *
 * @param {string} dbPath - The path to the CSV file.
 * @throws {Error} If the file cannot be read.
 */
function countStudents(dbPath) {
  try {
    let students = fs.readFileSync(dbPath, 'utf-8');
    students = students.split('\n').filter(line => line.trim() !== '');

    const records = students.slice(1);

    const courses = new Map();

    records.forEach((student) => {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3];

      if (courses.has(field)) {
        courses.get(field).students.push(firstName);
        courses.get(field).count += 1;
      } else {
        courses.set(field, { students: [firstName], count: 1 });
      }
    });

    console.log(`Number of students: ${records.length}`);

    courses.forEach((courseData, course) => {
      console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
