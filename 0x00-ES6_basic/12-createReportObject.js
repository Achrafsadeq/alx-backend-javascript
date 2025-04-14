/* Creates a report object containing all employees and department count method */
export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };
}
