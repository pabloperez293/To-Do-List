import React, { useState } from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit";
import { FaSun, FaMoon } from "react-icons/fa";


const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // Agrega esta línea

  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='container mx-auto bg-red-500 mt-20 p-8 rounded-md text-center'>
    <h2 className="text-white text-2xl font-bold mb-4">Agregar tareas en tu To-Do list</h2>
    <div className='flex justify-end'>
    <button className="p-2 rounded-full bg-gray-800 text-white hover:shake" onClick={toggleDarkMode}>
          {" "}
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    
      <Form createTodo={createTodo} />
      {todoValue.map((todo) =>
        todo.isEditing ? (
          <Edit
            key={todo.id}
            editTodo={editTask}
            task={todo}
            createTodo={createTodo}
          />
        ) : (
          <Todo
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
