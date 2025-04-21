export default function getStudentIdsSum(students) {
  // Use reduce to accumulate the sum of student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}
