function bouncer(arr) {
  let result = [];

  for (const value of arr) {
    let convertValue = Boolean(value);

    if (convertValue) {
      result.push(value);
    }
  }

  return result;
}

// version 2
function bouncer(arr) {
  return arr.filter(Boolean);
}
