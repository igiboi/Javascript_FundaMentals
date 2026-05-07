// Date Methods Practice

const now = new Date();

console.log(now); // 2026-05-05T16:54:28.872Z - ISO 8601 format


console.log(now.getFullYear()) // 2026

const getMonth = now.getMonth();
const getDate = now.getDate();

console.log(getMonth);
console.log(getDate);

const now = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

console.log(now.toLocaleDateString("en-US", options));

const numbers = [3, 7, 2, 9, 4, 11, 6];
const filtered = numbers.filter((number) => number > 5);

console.log(filtered);