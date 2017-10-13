let idNum = 1;

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: idNum++,
            value: todo,
        },
    };
};

export const deleteTodo = (todo, index) => {
  return {
    type: 'DELETE_TODO',
    payload: { todo, index }
  };
};