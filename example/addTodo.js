import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import { bindActionCreators } from 'redux';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state={
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});

  }
  render() {
    let input;
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        <button
          type="submit"
          onClick={() => this.props.addTodo(this.state.inputValue)}>
          Add Todo
        </button>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo: addTodo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
