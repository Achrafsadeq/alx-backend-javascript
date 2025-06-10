/**
 * AppController class handles basic application-level routes.
 */
export default class AppController {
  /**
   * Handles HTTP GET requests to the root URL (`/`).
   *
   * @param {Object} request  - The incoming HTTP request object.
   * @param {Object} response - The HTTP response object used to send back a result.
   */
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.send('Hello Holberton School!');
  }
}
