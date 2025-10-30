// PART 2
// making a function does not make that function activate
// return a function does not make it activate 
// what activates that 
// callback is a function that is passed as an argument to another function 
function doLoudly(action) {
    action() // this is the callback 
} 

function greet() { // this is the callback 
    console.log('greetings');
}

doLoudly(greet); 
// function are fist class


function doQuitly(action) {
    console.log('keep it quite');
    action();
}

function farewell() {
    console.log('gooodbye');
}

doQuitly(farewell);

function createCounter() {
    console.log('creating the counter..');

    function counter() {
        console.log(1);
    }
}

function doThrice(action) {
    action();
    action();
    action();
}

function sayHi() {
    console.log('Hi!');
}

doThrice(sayHi);
// Hi!
// Hi!
// Hi!

function applyToNumber(number, action) {
  return action(number);
}

function double(x) {
    return x * 2;
}

console.log(applyToNumber(5, double));