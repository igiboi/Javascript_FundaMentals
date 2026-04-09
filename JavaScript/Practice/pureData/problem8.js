/*
Write a function getPassingStudents that 
returns an array of just the names of students who scored 60 or above.
*/


const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 42 },
  { name: "Charlie", grade: 91 },
  { name: "Diana", grade: 58 },
  { name: "Eve", grade: 76 },
];


function getPassingStudents(students) {
  return students
    .filter((student) => student.grade >= 60)
    .map((student) => student.name);
}


const result = getPassingStudents(students);

console.log(result);