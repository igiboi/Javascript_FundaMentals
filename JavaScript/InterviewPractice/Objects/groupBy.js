/*
  Problem: Group Array Items by Property
  ----------------------------------------
  Write a function called groupBy that takes an array of objects
  and a key name, and returns a new object where each property
  groups the items that share that key's value.

  Examples:
    const people = [
      { name: "Alice", department: "Engineering" },
      { name: "Bob", department: "Marketing" },
      { name: "Carol", department: "Engineering" },
      { name: "Dave", department: "Marketing" },
      { name: "Eve", department: "Engineering" }
    ];

    groupBy(people, "department")
    // {
    //   Engineering: [
    //     { name: "Alice", department: "Engineering" },
    //     { name: "Carol", department: "Engineering" },
    //     { name: "Eve", department: "Engineering" }
    //   ],
    //   Marketing: [
    //     { name: "Bob", department: "Marketing" },
    //     { name: "Dave", department: "Marketing" }
    //   ]
    // }
*/

const people = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Marketing" },
  { name: "Carol", department: "Engineering" },
  { name: "Dave", department: "Marketing" },
  { name: "Eve", department: "Engineering" }
];

function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = acc[curr[key]] || []
    acc[curr[key]].push(curr);
    return acc;
  }, {});
}

console.log(groupBy(people, "department"));
