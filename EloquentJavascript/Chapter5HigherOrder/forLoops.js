// for (let i = 0; i < 10; i++) {
// console.log(i);
// }

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(10);  // 0 1, 2, 3, 4, 5, 6, 7, 8, 9

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // 0, 1, 2

let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels); // [ 'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5' ] 
