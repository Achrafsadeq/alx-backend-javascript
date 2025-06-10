import readDatabase from '../utils';

/**
 * StudentsController class handles student-related route logic.
 */
export default class StudentsController {
  /**
   * Handles GET requests to `/students`.
   * Reads student data from the database and sends a summary list per field.
   *
   * @param {Object} request  - The HTTP request object.
   * @param {Object} response - The HTTP response object.
   */
  static getAllStudents(request, response) {
    const body = ['This is the list of our students'];
    readDatabase(process.argv[2] === undefined ? '' : process.argv[2])
      .then((courseInfo) => {
        for (const course in courseInfo) {
          if (Array.isArray(courseInfo[course])) {
            const students = courseInfo[course];
            body.push(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`);
          }
        }
        response.statusCode = 200;
        response.send(body.join('\n'));
      })
      .catch((error) => {
        // Handle error if database cannot be read
        response.statusCode = 500;
        response.send(error.message);
      });
  }

  /**
   * Handles GET requests to `/students/:major`.
   * Returns a list of students filtered by the specified major.
   *
   * @param {Object} request  - The HTTP request object containing `major` as a route parameter.
   * @param {Object} response - The HTTP response object.
   */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      // Reject unsupported majors
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2] === undefined ? '' : process.argv[2])
        .then((courseInfo) => {
          response.statusCode = 200;
          response.send(`List: ${courseInfo[major].join(', ')}`);
        })
        .catch((error) => {
          // Handle error if database cannot be read
          response.statusCode = 500;
          response.send(error.message);
        });
    }
  }
}
