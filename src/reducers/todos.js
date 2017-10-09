export default (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return todos.concat(action.payload);
        default: 
            return todos;
    }
};