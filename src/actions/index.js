let idNum = 1;

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: idNum++,
            value: todo,
            completed: 'Status: Uncompleted'
        },
    };
};
