 // higher order functions and callbacks to 

// A higher order functions a function that returns another function
function makeAnnouncer() {
    console.log('hello from make announcer function')
    function announcer() {
        return 4;
    }
    return announcer;
}

function square(n) {
    return n * n;
}

makeAnnouncer();
const x = makeAnnouncer();
//when you call the functions whatever it returns is what x equals to 
console.log('x', x);
x(); // 4

const squared = square(x());
console.log(squared);


/// scope and closures
// when we create a function it creates its own scope
// scope is like universe they dont exist outside of scope
// take advantage of scope used the same variable name
// where we declare it
// why name the same variable
// related idea but different
// closure
// best to think about it in idea
// higher order function lower order functions
// lower function can let us interact with pizzaCount
// they are all in closed together that is why its closure
// when we do closures it has to be a action
// numbers quality by value once you got them you got them
// object quality of reference has a link to
// seperate closures


// ===== PRACTICE EXAMPLE: Counter with Closures =====
// This shows how closures let inner functions "remember" outer variables
function createCounter(startValue) {
    let count = startValue; // This variable is "closed over" by the inner functions

    // Return an object with multiple functions that all share access to 'count'
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

// Each call to createCounter creates a NEW closure with its own 'count'
const counter1 = createCounter(0);
const counter2 = createCounter(100);

console.log('Counter 1:', counter1.getCount()); // 0
console.log('Counter 2:', counter2.getCount()); // 100

counter1.increment();
counter1.increment();
console.log('Counter 1 after 2 increments:', counter1.getCount()); // 2

counter2.decrement();
console.log('Counter 2 after 1 decrement:', counter2.getCount()); // 99

// Notice: counter1 and counter2 have SEPARATE closures
// They don't affect each other even though they came from the same function!


// ===== PRACTICE EXAMPLE 2: Multiplier Factory =====
// Higher-order function that creates specialized multiplier functions
function createMultiplier(multiplier) {
    // The returned function "remembers" the multiplier value
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const times10 = createMultiplier(10);

console.log('double(5):', double(5));     // 10
console.log('triple(5):', triple(5));     // 15
console.log('times10(5):', times10(5));   // 50

// Each function has its own closure with its own multiplier value!