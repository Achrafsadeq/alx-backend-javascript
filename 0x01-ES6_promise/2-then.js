export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      /* On success, return a response object */
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      /* On failure, return an empty Error object */
      return Error();
    })
    .finally(() => {
      /* Always log this message regardless of success or failure */
      console.log('Got a response from the API');
    });
}
