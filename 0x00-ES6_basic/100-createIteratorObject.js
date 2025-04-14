export default function createIteratorObject(report) {
  /* Flatten all employees from all departments into a single array */
  const allEmployees = [];
  for (const department of Object.values(report.allEmployees)) {
    allEmployees.push(...department);
  }

  /* Return an iterator for the flattened array */
  return allEmployees[Symbol.iterator]();
}
