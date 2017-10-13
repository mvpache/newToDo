import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from './actions';
import { bindActionCreators } from 'redux';

class ManageTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            console.log(this.props),
              <li
                key={index}>
                {todo.id} {todo.value} {todo.completed} <button
                  onClick={() => this.props.deleteTodo(todo)}>
                  X
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
  return bindActionCreators({deleteTodo: deleteTodo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageTodos);