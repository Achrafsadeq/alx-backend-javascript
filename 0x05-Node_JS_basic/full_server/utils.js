import fs from 'fs';

/**
 * Reads the database file and returns an object of arrays of student firstnames per field
 * @param {string} filePath - Path to the CSV database file
 * @returns {Promise<Object>} Promise that resolves with an object containing arrays of firstnames per field
 */
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        if (lines.length <= 1) {
          resolve({});
          return;
        }
        
        const students = lines.slice(1).map(line => {
          const [firstname, lastname, age, field] = line.split(',');
          return { firstname: firstname.trim(), field: field.trim() };
        });
        
        const fieldGroups = {};
        students.forEach(student => {
          if (!fieldGroups[student.field]) {
            fieldGroups[student.field] = [];
          }
          fieldGroups[student.field].push(student.firstname);
        });
        
        resolve(fieldGroups);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}
