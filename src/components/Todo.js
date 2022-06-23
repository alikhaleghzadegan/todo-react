import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((element)=>element.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map((item)=>{
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    // const editHandler = () => {
        //  COULDNT FIGURE OUT THE EDIT FUNCTION
    // }

    return(
        <div className='task'>
            <button onClick={completeHandler} className={`${todo.completed ? 'completed' : 'completed-button'}`}><i className="fa-solid fa-check"></i></button>
            <input type="text" className={`${todo.completed? 'completed-content' : 'content'}`} value={text} readOnly></input>
            <button className='edit-button'><i className="fas fa-pencil-alt"></i></button>
            <button onClick={deleteHandler} className='completed-button' ><i className="fa-solid fa-trash-can"></i></button>
        </div>
    );
}

export default Todo;