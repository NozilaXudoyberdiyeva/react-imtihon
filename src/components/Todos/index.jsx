import React from "react";
import Form from "../Form";
import TodoList from "../TodoList";
import { Context } from "../../context/todoContext";

const Todos = () => {
  const ctx = React.useContext(Context);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const todoText = ctx.todoRef.current.value;
    const newTodo = {
      id: ctx.todos.length + 1,
      todoText: todoText,
    };

    if (ctx.selectedIndex >= 0) {
      ctx.todos[ctx.selectedIndex] = newTodo;
      ctx.setSelectedIndex(-1);
    } else {
      ctx.setTodos([...ctx.todos, newTodo]);
    }

    ctx.todoRef.current.value = "";
  };

  const handleDlete = (id) => {
    const filteredTodos = ctx.todos.filter((todo) => todo.id !== id);
    ctx.setTodos([...filteredTodos]);
  };

  const handleEdit = (id) => {
    ctx.setSelectedIndex(id - 1);
  };
  return (
    <div className="container">
      <div className="col-6 offset-3 mt-5">
        <h1 className="text-center">Todos app</h1>
        <div className="card">
          <div className="card-header">
            <Form handleSubmit={handleSubmit} />
          </div>
          <div className="card-body">
            <TodoList
              todos={ctx.todos}
              handleDlete={handleDlete}
              handleEdit={handleEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
