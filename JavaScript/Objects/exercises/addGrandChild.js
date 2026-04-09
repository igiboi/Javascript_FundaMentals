/*

Write a function addGrandchild(grandparents, childName, eyeColor) that returns a new array 
where the grandchild is added to every parent whose eyeColor matches. 
The grandchild object should include which grandparent they belong to.

*/
const grandparents = [
  {
    name: "George",
    eyeColor: "blue",
    children: [
      { name: "Mary", eyeColor: "blue", children: [] },
      { name: "Tom", eyeColor: "brown", children: [] },
    ],
  },
  {
    name: "Helen",
    eyeColor: "green",
    children: [
      { name: "Susan", eyeColor: "green", children: [] },
      { name: "Jack", eyeColor: "blue", children: [] },
    ],
  },
];


function addGrandChild(grandparents, childName, eyeColor) {
  return grandparents.map(grandparent => {
    return {
      ...grandparent,
      children: grandparent.children.map(parent => {
        if (parent.eyeColor === eyeColor) {
          return {
            ...parent,
            children: [
              ...parent.children,
              {
                name: childName,
                eyeColor: eyeColor,
                grandparent: grandparent.name,
              },
            ],
          };
        }
        return parent;
      })
  }
})
}



const result = addGrandChild(grandparents, "Luigi", "blue");

console.log(JSON.stringify(result, null, 2));