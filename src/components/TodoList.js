import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {
    
    return (
        <div id="task-list">
            <h2>Tasks</h2>
            <hr/>
            <div id="tasks">
                {todos.map((todo)=>( 
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList