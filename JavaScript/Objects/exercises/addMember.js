/*

Write a function addMember(departments, teamName, memberName) that returns 
a new array where the new member is added to the correct 
team's members array based on teamName.

So addMember(departments, "Frontend", "Luigi") 
adds { name: "Luigi" } to the Frontend team's members.

*/

const departments = [
  {
    name: "Engineering",
    teams: [
      { name: "Frontend", members: [] },
      { name: "Backend", members: [] },
    ],
  },
  {
    name: "Marketing",
    teams: [
      { name: "Social", members: [] },
      { name: "Content", members: [] },
    ],
  }, 
];


function addMember(departments, teamName, memberName) {
  return departments.map(department => {
    return {
      ...department,
      teams: department.teams.map(team => {
        if (team.name === teamName) {
          return {
            ...team,
            members: [...team.members,
              {
              name: memberName
            }]
          }
        }
        return team;
      })
    }
  })
}

const result = addMember(departments, "Frontend", "Luigi");


console.log(JSON.stringify(result, null, 2));