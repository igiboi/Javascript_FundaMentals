const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Carol", score: 91 },
  { name: "Dave", score: 58 },
  { name: "Eve", score: 60 },
];

getPassingStudents(students);
// Expected: ["Alice", "Carol", "Eve"]

// Version 1 
// function getPassingStudents(students) {
//   let result = [];

//   for (let student of students) {
//     if (student.score >= 60) {
//       result.push(student.name);
//     }
//   }
//   return result;
  
// }



// Version 2 
function getPassingStudents(students) {
  return students
    .filter(student => student.score >= 60)
    .map(student => student.name);
}

console.log(getPassingStudents(students));

