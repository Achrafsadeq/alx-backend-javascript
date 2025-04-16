export default function handleResponseFromAPI(promise) {
  return promise
	/* On success, return a response object */
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => Error())
	/* Always log this message regardless of success or failure */
    .finally(() => { console.log('Got a response from the API'); });
}
