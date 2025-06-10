const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((data) => {
        let response = 'This is the list of our students\n';
        const fields = Object.keys(data).sort((a, b) => a.localeCompare(b));

        for (const field of fields) {
          const list = data[field];
          response += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }

        res.status(200).send(response.trim());
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv[2];
    const major = req.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((data) => {
        const list = data[major];
        res.status(200).send(`List: ${list.join(', ')}`);
      })
      .catch((err) => res.status(500).send(err.message));
  }
}

module.exports = StudentsController;
