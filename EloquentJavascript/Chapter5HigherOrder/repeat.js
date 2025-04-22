function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

// Example 1: Print squares of numbers
repeat(5, (i) => console.log(i * i)); // 0, 1, 4, 9, 16

// Example 2: Print the number multiplied by 3
repeat(5, (i) => console.log(i * 3)); // 0, 3, 6, 9, 12

// Example 3: Print a message with the current iteration
repeat(3, (i) => console.log(`Iteration number: ${i}`)); // Iteration number: 0, Iteration number: 1, Iteration number: 2

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
})
console.log(labels); // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]