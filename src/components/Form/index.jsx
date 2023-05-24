import React from "react";
import { Context } from "../../context/todoContext";

const Form = ({ handleSubmit }) => {
  const ctx = React.useContext(Context);
  return (
    <form className="d-flex" onSubmit={(evt) => handleSubmit(evt)}>
      <input
        className="form-control me-2"
        name="todo_text"
        type="text"
        ref={ctx.todoRef}
        placeholder="Enter"
      />
      <button className="btn btn-primary" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
