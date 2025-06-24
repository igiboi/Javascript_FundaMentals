let hello = 'Hello world!';

let message;

message = hello;

console.log(message); // Hello world!

// Variable naming
// There are two limitations on variables

// 1. The name must contain only letters, digits, or the symbols $ and _
// 2. The first character must not be a digit

// Examples

// let userName
// let test1234

// Constants
// The constant is known before runtime and is a true constant — meaning:

// It’s a hard-coded, fixed value that’s not meant to change.

// It acts like a setting, configuration, or magic number.

// It’s universally understood and reused throughout the code.

// These values are always the same, every time the program runs. 
// They are declared up front and don’t depend on any runtime logic.

const COLOR_RED = '#FF0000';
const API_KEY = '1234567890abcdef';
const MAX_USERS = 100;

// camelCase

// The constant is calculated during runtime, even if its value doesn’t change after assignment.

// These are constants in behavior (because they don’t change),
// but not constants in definition (they’re not known until the program runs).

const currentUser = getUserFromSession();
const totalPrice = calculateTotal(cartItems);
