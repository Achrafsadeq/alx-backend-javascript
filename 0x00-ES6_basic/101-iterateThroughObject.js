export default function iterateThroughObject(reportWithIterator) {
  /* Convert iterator to array and join with separator */
  return [...reportWithIterator].join(' | ');
}
