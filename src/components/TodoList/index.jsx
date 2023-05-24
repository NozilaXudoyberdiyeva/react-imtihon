import React from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoList = ({ todos, handleDlete, handleEdit }) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        {todos.length > 0 &&
          todos.map((todo) => (
            <div key={todo.id}>
              <li className="list-group-item d-flex  justify-content-between mb-2">
                {todo.id}. {todo.todoText}
                <div className="btns">
                  <input className="form-check-input me-2" type="checkbox" />
                  <button
                    className="btn btn-success me-1"
                    type="submit"
                    onClick={() => handleEdit(todo.id)}
                  >
                    <MdOutlineModeEdit />
                  </button>
                  <button
                    className="btn btn-danger"
                    type="submit"
                    onClick={() => handleDlete(todo.id)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </li>
            </div>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
