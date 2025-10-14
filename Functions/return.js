function double(x) {
  console.log(x * 2); // only logs, doesn't return
}

function triple(x) {
  return double(x) + x; // 🚨 broken
}

console.log(triple(5));
// What happens? → NaN (because double(x) is undefined)
 
