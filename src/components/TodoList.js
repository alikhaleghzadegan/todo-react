import React from 'react';
import Todo from './Todo'

const TodoList = ({todos}) => {
    
    return (
        <div id="task-list">
            <h2>Tasks</h2>
            <hr/>
            <div id="tasks">
                {todos.map((todo)=>( 
                    <Todo key={todo.id} text={todo.text}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList