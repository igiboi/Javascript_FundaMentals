const students = [
  { name: "Alice", grade: 85, passed: true },
  { name: "Bob", grade: 55, passed: false },
  { name: "Charlie", grade: 92, passed: true },
];

// #2: Get only students who passed
// const passedStudents = students.filter(student => student.passed === true);

// #4: Get only students with grade above 80
// const topStudents = students.filter(student => student.grade >= 80);

// console.log(passedStudents);
// console.log(topStudents);

const result = students
    .filter(student => student.grade > 80)
    .map(student => student.name.toUpperCase());

console.log(result);