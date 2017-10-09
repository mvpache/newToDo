import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from './actions';
import { bindActionCreators } from 'redux';

class ManageTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
             console.log(this.props),
            <li
              onClick={() => this.props.toggleTodo(todo, index)}
              key={index}>
              {todo.id} {todo.value} {todo.completed}<button
                onClick={() => this.props.deleteTodo(todo)}>
                Delete Todo
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleTodo: toggleTodo , deleteTodo: deleteTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTodos);
