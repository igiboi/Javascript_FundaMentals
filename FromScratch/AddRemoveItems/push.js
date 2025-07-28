const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

function logArrayEnds(arr) {
  const first = arr[0];
  const middle = arr[Math.floor(arr.length / 2)];
  const last = arr[arr.length - 1];

  console.log('First:', first);
  console.log('Middle:', middle);
  console.log('Last:', last);
}

logArrayEnds(array);

// Goal is to add value to the end of the array
// how to get full length of an array
// then add a new index/element to the end of the array 
function customPush(arr, value) {
   return  arr[arr.length] = value;

}

customPush(array, 3);

// explanation
// Index:   0     1     2
// Value:  'a'   'b'   'c'

// arr[arr.length] = 'd' -> arr[3] = 'd';
