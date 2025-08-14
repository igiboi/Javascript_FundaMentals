let tasks = ['task1', 'task2', 'task3'];

function addTaskToEnd(arr, item) {
  arr.push(item);
  return arr;
}

console.log(addTaskToEnd(tasks, 'task4'));

function removeTaskFromEnd(arr) {
    // shrink the array by 1 
    arr.length = arr.length - 1;

    return arr;
}

console.log(removeTaskFromEnd(tasks)); // [ 'task1', 'task2', 'task3' ]