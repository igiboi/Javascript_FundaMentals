/*
Your function diffArray should return an array.
Your function should take two arguments, both of which are arrays.
Your function should make use of the filter method.
Your function should return the symmetric difference of the two arrays.
Your function should return an empty array if there is no symmetric difference.
*/

function diffArray(arrA, arrB) {
  const filterArrA = arrA.filter((item) => !arrB.includes(item));
  const filterArrB = arrB.filter((item) => !arrA.includes(item));

  return filterArrA.concat(filterArrB);

}