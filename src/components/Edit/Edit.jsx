import React, { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className='mb-4 font-jersey'>
      <input
        type='text'
        className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-while mb-8 rounded placeholder:text-gray-300'
        placeholder='Que tarea tenes? '
        onChange={(evt) => setValue(evt.target.value)}
        value={value}
      />
      <button className='bg-primary border-none p-2 text-white cursor-pointer rounded ml-2 hover:bg-secondary'>
        Actualizar Tarea
      </button>
    </form>
  );
};

export default Edit;
