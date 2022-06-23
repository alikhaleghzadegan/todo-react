import React from 'react';

const Todo = ({text}) => {
    return(
        <div className='task'>
            <button className='completed-button'><i className="fa-solid fa-check"></i></button>
            <input type="text" className="content" value={text} ></input>
            <button className='edit-button'><i className="fas fa-pencil-alt"></i></button>
            <button className='completed-button'><i className="fa-solid fa-trash-can"></i></button>
        </div>
    );
}

export default Todo;