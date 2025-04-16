export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    /* Check if the success parameter is true */
    if (success) {
      /* Resolve the promise with a success response object */
      resolve({
        status: 200,
        body: 'Success'
      });
    } else {
      /* Reject the promise with an error message */
      reject(new Error('The fake API is not working currently'));
    }
  });
}
