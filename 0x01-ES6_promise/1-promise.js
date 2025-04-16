export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    /* Immediately reject if success is false */
    if (!success) {
      reject(new Error('The fake API is not working currently'));
      return;
    }
    /* Resolve with success response if success is true */
    resolve({
      status: 200,
      body: 'Success',
    });
  });
}
