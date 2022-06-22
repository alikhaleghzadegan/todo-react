import React from "react";
const Form = () => {
  return (
    <form id="new-task-form">
      <input
        type="text"
        id="new-task-input"
        placeholder="What are your tasks?"
      />
      <button id="new-task-submit" value="Add task">
        <i className="fa fa-plus"></i>
      </button>
    </form>
  );
};
export default Form;
