/*
Explanation of sort: 

The gotcha with sort()
By default, sort() converts every element to a string before 
comparing. That means it sorts by Unicode character order, 
not numeric value.

Watch what happens:

[10, 1, 21, 2].sort()
// [1, 10, 2, 21]

That's wrong for numbers — 10 comes before 2 
because "1" comes before "2" in string comparison.

The fix — the comparator callback
sort() accepts a callback function called a comparator. 
It receives two arguments — by convention called a and b — 
and must return:

A negative number → a comes first
A positive number → b comes first
Zero → order doesn't matter
For ascending numeric sort, the pattern is:


[10, 1, 21, 2].sort((a, b) => a - b)
// [1, 2, 10, 21]
Why does a - b work? If a is smaller, a - b is negative, 
so a sorts first. If a is larger, the result is positive, 
so b sorts first. The math encodes the comparison directly.
So when you write a - b:

a	b	a - b	result
29	79	-50 (negative)	a goes first ✓
79	29	+50 (positive)	b goes first ✓
45	45	0	doesn't matter


For descending, flip it: b - a.

One more thing worth knowing: sort() mutates the original array. 
That's different from map, filter, and reduce, 
which all return new arrays. If you want to sort immutably, 
spread first:


const sorted = [...original].sort((a, b) => a - b)
*/


/*
You have an array of product objects. Return a new array sorted by price 
from lowest to highest. Do not mutate the original.
*/

const products = [
  { name: "Headphones", price: 79 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 320 },
  { name: "Mouse", price: 29 },
];

const sortByPrice = [...products].sort((a, b) => a.price - b.price);

console.log(sortByPrice);

/// sorting strings


// For strings, you don't use a - b — subtraction doesn't work on strings. 
// Instead you use localeCompare:


const names = ["Banana", "Apple", "Cherry", "Avocado"];

names.sort((a, b) => a.localeCompare(b));
// ["Apple", "Avocado", "Banana", "Cherry"]

/*
localeCompare returns a negative, positive, or zero value — 
same contract as your numeric comparator — 
so sort() works the same way. It also handles accented characters and 
language-specific rules correctly, which is why it's preferred over a 
simple > / < comparison.
*/

// For descending, flip it:


names.sort((a, b) => b.localeCompare(a));