/* 
CONCEPT: Web Storage API provides a mechanism for browsers to 
store key-value pairs within the browser, allows developers
to store information that can be used across different page 
reloads and sessions 

WHAT: 

localStorage is the part of the Web Storage API that allows
data to persist even after the browser window is closed or the page 
is refereshed. This data remains available until it is explicity 
removed by the application or the user. 

sessionStorage is another part of Web Storage API that stores data
for the duration of the page sessions, sessionStorage is cleared
when tab or window is closed. 

WHY:

localStorage can be used so the app can remember User preferences
User Settings like themes or language preference. can save form data 

sessionStorage can be used for a shopping cart on a guest account
You want the cart to exist while the user is browsing but once they
close the tab you want it gone. No leftover data from previous session


localStorage vs sessionStorage:

The rule of thumb:

Data that should survive closing the browser → localStorage
Data that should only exist for this visit → sessionStorage

GOTCHA:

const user = { name: 'Luigi', age: 25 };
localStorage.setItem('user', user);

localStorage.getItem('user'); // "[object Object]"
JavaScript silently converts the object to a string
but objects convert to the useless string "[object Object]". 
No error, no warning. Your data is just gone.

The fix:

localStorage.setItem('user', JSON.stringify(user)); // store
JSON.parse(localStorage.getItem('user')); // retrieve
That's the gotcha — always JSON.stringify() 
before storing objects/arrays, always JSON.parse() 
when reading them back.


METHODS:

setItem(): stores a key-value pair in localStorage.
localStorage.setItem('username', 'JaneDoe');

getItem(): retrieves the value for a given key. Returns null if the key doesn't exist.
let username = localStorage.getItem('username');
console.log(username); // JaneDoe


removeItem(): removes a single item from localStorage by its key.
localStorage.removeItem('username');

clear(): removes all key-value pairs from localStorage at once.
localStorage.clear();

*/


// EXAMPLE (write the theme example from memory):

// Store the user's theme preference
localStorage.setItem('theme', 'dark');

// Retrieve the stored theme preference
const userTheme = localStorage.getItem('theme');
console.log(userTheme); // 'dark'

// Remove the theme preference
localStorage.removeItem('theme');

// Clear all localStorage data
localStorage.clear();
