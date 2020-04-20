import React from 'react';
import TodoApp from "./components/TodoApp";
import './App.scss';


function App() {
  return (
      <div className="App">
            <div className='page-frame'>
                <h1>Todolist</h1>
                <TodoApp/>
            </div>
      </div>
  );
}

export default App;
