let idNum = 1;

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: idNum++,
      value: todo,
      completed: "Status: Uncompleted"
    },
  };
};


export const toggleTodo = (todo, index) => {
  return {
    type: 'TOGGLE_TODO',
    payload: { todo, index }
  };
};


export const deleteTodo = (todo, index) => {
  return {
    type: 'DELETE_TODO',
    payload: { todo, index }
  };
};
