/*
============================================================================
EXERCISE 1: printRange(start, end)
============================================================================

STEP 1: RESTATE: create a function printRange that takes two arguments
first argument is start, where the loop will start and print whatever number start is
then the loop will keep printing each number leading up to the end of number and print the 
end number;

STEP 2: INPUTS/OUTPUTS

when given two arguments, we print out each number
starting from argument number of start and will stop argument two the "end"

STEP 3: EXAMPLE

printRange(1, 5);  ->   // Expected: 1 2 3 4 5
printRange(3, 7);  ->  // Expected: 3 4 5 6 7
printRange(10, 12); -> // Expected: 10 11 12

STEP 4: TOOLS
- for loop to loop through from start number up to including end number 
- console.log to print each number

     
STEP 5: PSEUDOCODE
What is the first thing our code needs to do?

function recieves two numbers
  checks if both arguments are numbers
  if true 
    we have a loop start up to the end and increment
    for (let index = start; index < end; index++)
     inside the for loop we print each number until including end number 


STEP 6: CODE
function (start, end) {
  if (typeof start && typeof end != Number) {
    return console.log("Please be a number");
  }
}


STEP 7: TEST
 */


function printRange(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    return console.log("Please be a number");
}

  for (let index = start; index <= end; index++) {
    console.log(`${index}`);
  }
}

printRange(1, 5);    // Expected: 1 2 3 4 5
printRange(3, 7);    // Expected: 3 4 5 6 7
printRange(10, 12);  // Expected: 10 11 12
 