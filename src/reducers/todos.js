export default (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return todos.concat(action.payload);
        case 'DELETE_TODO':
          let newTodos = todos.slice()
          let index = action.payload.index;
          newTodos.splice(index, 1);
          return newTodos;
        default: 
          return todos;
    }
};