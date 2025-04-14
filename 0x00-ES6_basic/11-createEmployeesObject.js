export default function createEmployeesObject(departmentName, employees) {
  /* Returns object with department name as key and employees array as value */
  return {
    [departmentName]: employees,
  };
}
