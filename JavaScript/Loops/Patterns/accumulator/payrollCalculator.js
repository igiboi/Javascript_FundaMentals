// const employees = [
//   { name: "Alice", department: "Engineering", salary: 85000, isFullTime: true },
//   { name: "Bob", department: "Marketing", salary: 62000, isFullTime: true },
//   { name: "Charlie", department: "Engineering", salary: 78000, isFullTime: false },
//   { name: "Diana", department: "Engineering", salary: 92000, isFullTime: true },
//   { name: "Eve", department: "Marketing", salary: 55000, isFullTime: false },
//   { name: "Frank", department: "HR", salary: 48000, isFullTime: true }
// ];

// Return the total salary of ALL employees.
function getTotalaPayroll(employees) {
  let totalSalary = 0;

  for (let employee of employees) {
    totalSalary += employee.salary;
  }

  return totalSalary;
}

console.log(getTotalaPayroll(employees)); // 420000


// Return the total salary of only full-time employees.
function getFulltimePayroll(employees) {
  let totalSalary = 0;

  for (let employee of employees) {
    if (employee.isFullTime) {
        totalSalary += employee.salary;
    }
  }

  return totalSalary;
}

console.log(getFulltimePayroll(employees)); // 280000


//Return an array of unique department names (no duplicates).
function getDepartmentNames(employees) {
  let uniqueDepartments = [];

  for (let employee of employees) {
    if (!uniqueDepartments.includes(employee.department)) {
      uniqueDepartments.push(employee.department)
    }
  }

  return uniqueDepartments;
}

console.log(getDepartmentNames(employees));


function getEmployeesByDepartment(employees, department) {
  let result = [];

  for (let employee of employees) {
    if (employee.department === department) {
      result.push(employee.name);
    }
  }
  return result;
}

console.log(getEmployeesByDepartment(employees, 'Engineering'));


function getDepartmentStats(employees) {
  let stats = {}; // Start with empty object, not array

  for (let employee of employees) {
    // Check if this department exists in our object yet
    if (stats[employee.department] === undefined) {
      // First time seeing this department - initialize it
      stats[employee.department] = 0;
    }
    // Add salary to this department's total
    stats[employee.department] += employee.salary;
  }

  return stats;
}


const employees = [
  { name: "Alice", department: "Engineering", salary: 85000, isFullTime: true },
  { name: "Bob", department: "Marketing", salary: 62000, isFullTime: true },
  {
    name: "Charlie",
    department: "Engineering",
    salary: 78000,
    isFullTime: false,
  },
  { name: "Diana", department: "Engineering", salary: 92000, isFullTime: true },
  { name: "Eve", department: "Marketing", salary: 55000, isFullTime: false },
  { name: "Frank", department: "HR", salary: 48000, isFullTime: true },
];

function getStats(employees) {
  const stats = {};

  for (const employee of employees) {
    console.log('------------------------------');
    console.log('employee', employee);

    const oldTotal = stats[employee.department] ?? 0; 
    console.log(employee.department, 'old Total', oldTotal);
    
    const newTotal = oldTotal + employee.salary;
    console.log(employee.department, 'newTotadl', newTotal);
    
    stats[employee.department] = newTotal;
    console.log('stats', stats);
  }
  console.log('result', stats);
}

getStats(employees);