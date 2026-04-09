/*
You have an array of employees. Each employee has 
a name, a department, and a salary. 
Write a function getAverageSalaryByDepartment that 
takes the array and a department string, and returns 
the average salary for that department.

*/



const employees = [
  { name: "Alice", department: "Engineering", salary: 95000 },
  { name: "Bob", department: "Marketing", salary: 72000 },
  { name: "Charlie", department: "Engineering", salary: 105000 },
  { name: "Diana", department: "Marketing", salary: 68000 },
  { name: "Eve", department: "Engineering", salary: 115000 },
];


function getAverageSalaryByDepartment(employees, department) {
  const filteredDepartment = employees.filter(
    (employee) => employee.department === department,
  );

  if (filteredDepartment.length === 0) return 0;

  const total = filteredDepartment
    .map((employee) => employee.salary)
    .reduce((acc, curr) => acc + curr, 0);

  return total / filteredDepartment.length;
}

const result = getAverageSalaryByDepartment(employees, "Engineering");

console.log(result);