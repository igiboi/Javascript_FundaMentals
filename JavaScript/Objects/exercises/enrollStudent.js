/*

Write a function enrollStudent(school, teacherName, studentName) 
that returns a new array where the new student is added to the correct 
teacher's students array based on teacherName.

So enrollStudent(school, "Mr. Brown", "Luigi")
 adds { name: "Luigi" } to Mr. Brown's students.
*/

const school = [
  {
    name: "Math",
    teachers: [
      { name: "Mr. Smith", students: [] },
      { name: "Ms. Johnson", students: [] },
    ],
  },
  {
    name: "Science",
    teachers: [
      { name: "Mr. Brown", students: [] },
      { name: "Ms. Davis", students: [] },
    ],
  },
];

function enrollStudent(school, teacherName, studentName) {
  return school.map((subject) => {
    return {
      ...subject,
      teachers: subject.teachers.map((teacher) => {
        if (teacherName === teacher.name) {
          return {
            ...teacher,
            students: [
              ...teacher.students,
              {
                name: studentName,
              },
            ],
          };
        }
        return teacher;
      }),
    };
  });
}

const result = enrollStudent(school, "Mr. Brown", "Luigi");

console.log(JSON.stringify(result, null, 2));