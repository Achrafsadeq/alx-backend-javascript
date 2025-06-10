import { readFile } from 'fs';

/**
 * Asynchronously reads a CSV database containing student information,
 * parses the content, and returns a promise that resolves with an object
 * mapping fields (majors) to arrays of student first names.
 *
 * @param   {string}  db - The path to the CSV database file.
 * @returns {Promise<Object>} - Resolves with an object where keys are fields
 *                              and values are arrays of student first names.
 *                            - Rejects with an error if the file cannot be read.
 */
export default function readDatabase(db) {
  return new Promise((resolve, reject) => {
    readFile(db, 'utf-8', (error, data) => {
      if (error) {
        // Reject if the file can't be read
        reject(new Error('Cannot load the database'));
      } else {
        const courseInfo = {};
        // Split data into lines and remove the header and empty last line
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);

        students.forEach((student) => {
          const studentData = student.split(',');
          const field = studentData[3];
          const firstName = studentData[0];

          // Add the student's first name to the appropriate field array
          if (field in courseInfo) courseInfo[field].push(firstName);
          else courseInfo[field] = [firstName];
        });

        // Resolve the promise with the structured course information
        resolve(courseInfo);
      }
    });
  });
}
