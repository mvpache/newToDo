import React, { Component } from 'react';
import AddTodo from './addTodo';
import ManageTodos from './manageTodos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <ManageTodos />
      </div>
    );
  }
}

export default App;
