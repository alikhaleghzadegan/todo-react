import React, { useState } from 'react'
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>        
        <div className="header">
            <div className="profile">                
                
                <h3>Hello, user!</h3>
            </div>
        </div>          
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
