import React, { useState } from "react";

const Form = () => {
  const [inputform, setInputform] = useState("");
  const [list, setList] = useState([]);
  const [testlist, setTestlist] = useState([]);
  //handle text change
  const handleChange = (e) => {
    setInputform(e.target.value);
  };
  //object list: key, value access: loadId[i].Id,loadId[i].todos
  const loadId = [
    {
      id: list.length + 1,
      todos: inputform,
    },
  ];

  //handle Click Event:update liststate and save it as key pair values
  const handleClick = (e) => {
    e.preventDefault();
    setList([...list, loadId]);
  };
  return (
    <form id="new-task-form">
      <input
        type="text"
        id="new-task-input"
        placeholder="What are your tasks?"
        value={inputform}
        onChange={handleChange}
      />
      <button id="new-task-submit" onClick={handleClick}>
        <i className="fa fa-plus"></i>
      </button>
    </form>
  );
};
export default Form;
