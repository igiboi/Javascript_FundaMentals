const s = new Set();
// what is inside of s {}
s.add(1); 
// s {1}
s.add(1);
// s {1}
// it iterates over all elements of
// for each elements if equals 
const result = { message: 'success' }
s.add(result);
console.log('after result', s);
// s { 1, { message: 'success'} }
const item1 = result;
console.log('item1', item1)
const item1Equals = item1 === result;
console.log('item1Equals', item1Equals);
s.add(item1);
console.log('afterItem1', s);
// s { 1, { message: 'success'} }
const item2 = { message: 'success' }
console.log('item2', item2);
const item2Equals = item2 === result;
console.log('item2Equals', item2Equals)
s.add(item2);
console.log('afterItem2', s);
// equality by reference 


function hasDuplicates(arr) {
    const uniqueSet = new Set(arr); // Removes duplicates automatically
    
    return uniqueSet.size < arr.length;

}
// remove duplicates (arr)
// implies return a new array

// check does array contain duplicates 
// return true or false 

function removeDuplicates(arr) {
  const set = new Set(arr); // created a set from old array 

  const uniqueArray = [...set]; /// turn into new array

  return uniqueArray;
}
// function should include verbs like actions


function countWords(feedbackArray) {
  const map = new Map();

  for (const sentence of feedbackArray) {
    const words = sentence.toLowerCase().split(' ');

    for (const word of words) {
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
  }

  return map;
}