import React, { useState } from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo/Todo";


const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = todo => {
    setTodoValue([
      ...todoValue,
      { id: uuidv4(), task: todo, isEditing: false },
    ]);
  };

  return (
    <div className='container bg-blue-500 mt-20 p-8 rounded-md'>
      <Form createTodo={createTodo} />
      {todoValue.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
