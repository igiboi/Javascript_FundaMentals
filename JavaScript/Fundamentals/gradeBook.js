function getAverage(scores) {
  let totalScore = 0;
  for (const score of scores) {
    // add them all up
    totalScore += score;
  }
  // divide that total to get average and return that number
  return totalScore / scores.length;
}

// getAverage tests
console.log("-- getAverage --");
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); // 71.7
console.log(getAverage([80, 90, 100])); // 90
console.log(getAverage([50])); // 50

//-------------------------------------------------------

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// getGrade tests
console.log("-- getGrade --");
console.log(getGrade(100)); // "A+"
console.log(getGrade(95));  // "A"
console.log(getGrade(80));  // "B"
console.log(getGrade(73));  // "C"
console.log(getGrade(65));  // "D"
console.log(getGrade(30));  // "F"
console.log(getGrade(0));   // "F"

//-------------------------------------------------------

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

console.log("-- hasPassingGrade --");
console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(75));  // true
console.log(hasPassingGrade(60));  // true
console.log(hasPassingGrade(59));  // false
console.log(hasPassingGrade(0));   // false


function studentMsg(scores, studentScore) {
  let classAverage = getAverage(scores);
  let studentGrade = getGrade(studentScore);
  let fetchPassingGrade = hasPassingGrade(studentScore);

  if (fetchPassingGrade) {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;

  } else {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
  }
}
console.log("-- studentMsg --");
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));
