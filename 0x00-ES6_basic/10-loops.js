export default function appendToEachArrayValue(array, appendString) {
  /* Initialize empty array to store modified values */
  const arrayEnd = [];
  /* Loop through each array value and append string */
  for (const idx of array) {
    arrayEnd.push(`${appendString}${idx}`);
  }

  return arrayEnd;
}
