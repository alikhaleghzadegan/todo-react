import React from 'react';


const Form = ({inputText, setInputText, todos, setTodos}) =>{
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000 }]);
        setInputText('');
    };
    return (
        <form id="new-task-form"> 
            <input value={inputText} onChange={inputTextHandler} type="text" id="new-task-input" placeholder="What's your plan for today?"/>
            <button onClick={submitTodoHandler} type="submit" id="new-task-submit"><i className="fa-solid fa-square-plus"></i></button>
        </form>
    );

}

export default Form;