 const user = ["Luigi", 28, "Frontend Dev"];
const [userName, , role] = user;

console.log(userName); // "Luigi"
console.log(role);     // "Frontend Dev"

const scores = [98, 85, 76, 64, 55];

const [topScore, ...otherScores] = scores;

/*
Use destructuring to pull the first score into topScore,
and collect all remaining scores into an array called 
otherScores using the rest syntax (...).
*/