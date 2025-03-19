let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

let arr = Array.from(arrayLike);
console.log(arr.unshift("First")); // 3
console.log(arr) // [ 'First', 'Hello', 'World' ]

// syntax
// Array.from(obj[, mapFn, thisArg])


let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return { done: false, value: current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let arr1 = Array.from(range, x => x * 2);
console.log(arr1); // [ 2, 4, 6, 8, 10 ]

let interval = {
    start: 1,
    end: 10,
    [Symbol.iterator]() {
        let current = this.start;
        let last = this.end;
        return {
            next() {
                if (current <= last) {
                    return { done: false, value: current++ };
                }
                return { done: true };
            }
        };
    }
};

for (let num of interval) {
    console.log(num); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

let multiply = Array.from(interval, x => x * 3);
console.log(multiply); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

let colors = { 0: 'red', 1: 'green', 2: 'blue', length: 3 };

let collectionOfColors = Array.from(colors);
console.log(collectionOfColors.join(','));