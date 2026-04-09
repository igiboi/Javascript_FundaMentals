const prices = {
  apple: 1.5,
  banana: 0.75,
  cherry: 3.0,
  date: 2.25,
};


/*
Write a function getExpensiveItems that returns 
an array of just the names of items that cost more than 1.00.
*/

function getExpensiveItems(prices) {
  return Object.entries(prices)
    .filter(([_, value]) => value > 1.00)
    .map(([key, _]) => key);
}

const result = getExpensiveItems(prices);

console.log(result);