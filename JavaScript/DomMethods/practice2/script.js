const btnEnrolled = document.getElementById('btn-enrolled');
const btnHighAchievers = document.getElementById('btn-high-achievers');
const btnShowAll = document.getElementById('btn-show-all');

const searchNames = document.getElementById('search-name');

const studentsList = document.getElementById("student-list");

const students = [
  { name: "Alice", grade: 92, enrolled: true },
  { name: "Bob", grade: 67, enrolled: false },
  { name: "Carlos", grade: 85, enrolled: true },
  { name: "Diana", grade: 71, enrolled: false },
  { name: "Eve", grade: 95, enrolled: true },
];

let filteredStudents = [ ...students, ]

function renderStudents(students) {
  studentsList.innerHTML = '';

  students.forEach((student) => {
    const li = document.createElement('li');
    li.textContent = `${student.name} - ${student.grade}`;
    studentsList.appendChild(li);
  });
}

btnEnrolled.addEventListener("click", () => {
  filteredStudents = students.filter((student) => student.enrolled);
  renderStudents(filteredStudents);
});


btnHighAchievers.addEventListener('click', () => {
  filteredStudents = students.filter((student) => student.grade >= 85);
  renderStudents(filteredStudents);
});

btnShowAll.addEventListener('click', () => {
  filteredStudents = students;
  renderStudents(filteredStudents);

});

searchNames.addEventListener('input', (event) => {
  const searchStudentsName = filteredStudents.filter((student) =>
    student.name.toLowerCase().includes(event.target.value.toLowerCase()),
  );
  
  renderStudents(searchStudentsName);
})

renderStudents(filteredStudents);