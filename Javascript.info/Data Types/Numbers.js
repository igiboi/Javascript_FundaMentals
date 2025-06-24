let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

1e3 === 1 * 1000; // e3 means *1000


function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst('Hello'));

function checkSpam(str) {
    return (
      str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
    );
};

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }
  return str;
}

// check if str is greater than maxLength 
// if its add ellipsis to make it equal to maxLength