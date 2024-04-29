import React, { useState } from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";
import Edit from "../Edit/Edit"; 


const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = todo => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]);
  };

  const deleteTodo = id => {
    setTodoValue(todoValue.filter(todo => todo.id !== id))
  }

  const editTodo = id => {
    setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
  }

  const editTask = (task, id) => {
    setTodoValue(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  
  return (
    <div className='container bg-blue-500 mt-20 p-8 rounded-md'>
      <Form createTodo={createTodo} />
      {todoValue.map(todo => (
        todo.isEditing ? (
          <Edit key={todo.id} editTodo={editTask} task={todo} createTodo={createTodo} />
        ): (
        <Todo {...todo} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} />
      )
      ))}
    </div>
  );
};

export default TodoList;
