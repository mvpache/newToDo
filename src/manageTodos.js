import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageTodos extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => {
          return (
            console.log(this.props),
              <li
                key={index}>
                {todo.id} {todo.value}
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

export default connect(mapStateToProps)(ManageTodos);