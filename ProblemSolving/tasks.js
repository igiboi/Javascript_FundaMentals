let tasks = [
  { id: 1, title: 'Learn JS', completed: false },
  { id: 2, title: 'Build project', completed: true },
  { id: 3, title: 'Apply to jobs', completed: false },
];

function printTasks() {
    for (let task of tasks) {
        console.log(`${task.title} - ${task.completed}`);
    }
}

printTasks();

function toggleTask(id) {
    for (let task of tasks) {
        if (id === task.id) {
            task.completed = !task.completed;
            console.log(`Updated: ${task.title} - ${task.completed}`);
        }
    }
}

toggleTask(1);

function removeCompletedTasks() {
let originalLength = tasks.length;

    tasks = tasks.filter((task) => !task.completed); 
    let removedCount = originalLength - tasks.length;
    console.log(`Removed ${removedCount} completed tasks`);


}