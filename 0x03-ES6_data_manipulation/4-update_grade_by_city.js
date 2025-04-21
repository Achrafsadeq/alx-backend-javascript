// Function to update grades of students located in a specific city
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    // Filter students based on the specified city
    .filter((student) => student.location === city)
    // Map through the filtered students to add/update the grade
    .map((student) => {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: matchedGrade ? matchedGrade.grade : 'N/A',
      };
    });
}
