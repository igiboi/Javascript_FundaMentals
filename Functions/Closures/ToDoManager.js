function createTodoManager() {
  let todos = [];
  let nextId = 1;

  return {
    addTodo(text) {
      const todo = {
        id: nextId++,
        text: text,
        completed: false,
        createdAt: new Date(),
      };
      todos.push(todo);
      return todo;
    },

    completeTodo(id) {
      const todo = todos.find((text) => text.id === id);
      if (todo) {
        todo.completed = true;
        return todo;
      }
      return null;
    },

    deleteTodo(id) {
      const index = todos.findIndex((text) => text.id === id);
      if (index !== -1) {
        return todos.splice(index, 1)[0];
      }
      return null;
    },

    getTodos() {
      return [...todos]; // Return a copy to prevent direct modification
    },

    getCompletedTodos() {
      return todos.filter((text) => text.completed);
    },

    getActiveTodos() {
      return todos.filter((text) => !text.completed);
    },

    getTodoCount() {
      return {
        total: todos.length,
        completed: todos.filter((text) => text.completed).length,
        active: todos.filter((text) => !text.completed).length,
      };
    },
  };
}

// Usage:
const myTodos = createTodoManager();

myTodos.addTodo("Learn JavaScript functions");
myTodos.addTodo("Build a project");
myTodos.addTodo("Apply to jobs");

myTodos.completeTodo(1);
 
console.log(myTodos.getTodos());
console.log(myTodos.getTodoCount());
// {total: 3, completed: 1, active: 2}
