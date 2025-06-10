const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        const totalStudents = Object.values(fields).reduce((acc, names) => acc + names.length, 0);
        response += `Number of students: ${totalStudents}\n`;
        
        for (const [field, names] of Object.entries(fields).sort()) {
          response += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        res.status(200).send(response.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((fields) => {
        const names = fields[major] || [];
        res.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
