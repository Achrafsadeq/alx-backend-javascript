export default function getStudentsByLocation(students, city) {
  // Use filter to return only students in the specified city
  return students.filter((student) => student.location === city);
}
