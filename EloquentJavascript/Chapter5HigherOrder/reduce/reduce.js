function reduce(array, combine, start) {
  let current = start; // 1️⃣ Seed the accumulator
  for (let el of array) {
    // 2️⃣ Loop over each element
    current = combine(current, el); // 3️⃣ Combine old accumulator + this element
    //         	combine(0, 1) ⇒ 0 + 1 = 1
  }
  return current; // 4️⃣ Return the final accumulated value
}
