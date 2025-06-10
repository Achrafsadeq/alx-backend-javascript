const fs = require('fs');

/**
 * Processes a CSV database file to extract and analyze student enrollment data.
 * Outputs total student count and detailed breakdown by academic field.
 * @param {string} dbPath - File system path to the CSV database file.
 */
function countStudents(dbPath) {
  try {
    let students = fs.readFileSync(dbPath, 'utf-8');
    students = students.split('\n');
    students = students.slice(1, students.length - 1);
    const courses = new Map();

    // Iterate through student records to build field-based enrollment tracking
    students.forEach((student) => {
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

    // Output comprehensive enrollment statistics to console
    console.log(`Number of students: ${students.length}`);
    courses.forEach((courseData, course) => {
      console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
