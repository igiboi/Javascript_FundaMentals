/*

You have an array of student objects. 
Each student has a name and a grade (number out of 100). 
Write a function getTopStudents that returns the names of students
who scored above 70, sorted alphabetically.

*/

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 62 },
  { name: "Charlie", grade: 91 },
  { name: "Diana", grade: 70 },
  { name: "Eve", grade: 78 },
];

/*

getTopStudents is a function that takes one parameter 
 students, which is an array of objects.
The function has a direct return statement that 
method chains .filter(), .map(), and .sort() on 
the students array.
First, .filter() is called with a callback function 
that receives each student object. The callback returns 
true if student.grade is greater than 70. 
.filter() keeps every item where the callback returned 
true and returns a new array of only the qualifying 
students.
.map() is then called on that filtered array. 
Its callback receives each student object and 
returns just the name property. .map() transforms 
each object into a string and returns a new 
array of names.
Finally, .sort() is called on that array of strings. 
Its callback uses .localeCompare() to compare each 
pair of names alphabetically. .sort() returns the names 
in A to Z order.

Notice the pattern  every method gets three beats:

What it's called with
What the callback does
What the method returns

*/

function getTopStudents(students) {
  return students
    .filter((student) => student.grade > 70)
    .map((student) => student.name)
    .sort((a, b) => a.localeCompare(b));
}

const result = getTopStudents(students);

console.log(result);