import { createContext, useState, useRef } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const todoRef = useRef(null);

  return (
    <Context.Provider
      value={{ todos, setTodos, todoRef, selectedIndex, setSelectedIndex }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
