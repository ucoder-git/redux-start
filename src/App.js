import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoListContainer from './containers/TodoListContainer';
import TodoFormContainer from './containers/TodoFormContainer';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoListContainer/>
        <TodoFormContainer/>
      </header>
    </div>
  );
}

export default App;
