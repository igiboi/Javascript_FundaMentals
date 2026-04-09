/*
Write a function addChild that takes the families array,
a lastName, and a childName, and returns a new array where 
the matching family has a new child added to their members array.

Expected output when called with "Jones" and "Eve":

[
  {
    lastName: "Smith",
    members: [
      { name: "John", role: "parent" },
      { name: "Jane", role: "parent" },
      { name: "Tom", role: "child" },
    ]
  },
  {
    lastName: "Jones",
    members: [
      { name: "Bob", role: "parent" },
      { name: "Alice", role: "parent" },
      { name: "Eve", role: "child" },  // added
    ]
  }
]

*/

const families = [
  {
    lastName: "Smith",
    members: [
      { name: "John", role: "parent" },
      { name: "Jane", role: "parent" },
      { name: "Tom", role: "child" },
    ],
  },
  {
    lastName: "Jones",
    members: [
      { name: "Bob", role: "parent" },
      { name: "Alice", role: "parent" },
    ],
  },
];


function addChild(families, lastName, childName) {
  return families.map((family) => {
    if (family.lastName === lastName) {
      return {
        ...family,
        members: [...family.members, { name: childName, role: "child" }],
      };
    }
    return family;
  }) 
}


const result = addChild(families, "Jones", "Luigi")

console.log(JSON.stringify(result, null, 2));
