import React, { useState } from "react";
import Form from "../Form/Form";
import { v4 as uuidv4 } from "uuid";
uuidv4();

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
    </div>
  );
};

export default TodoList;
