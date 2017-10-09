export default (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return todos.concat(action.payload);
    case 'TOGGLE_TODO':
      let newTodos = todos.slice();
      let index = action.payload.index;
      newTodos[index].completed = 'Status: Completed';
      return newTodos;
    case 'DELETE_TODO':
      newTodos = todos.slice();
      index = action.payload.index;
      newTodos.splice(index, 1);
      return newTodos;
    default:
      return todos;
    }
};
