import React, { useState } from "react";

const Form = ({createTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    createTodo(value);
    setValue("");
  };
  return (
    <form className='mb-4 font-primary w-full'>
      <input
        type='text'
        onSubmit={handleSubmit}
        className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-while mb-8 rounded placeholder:text-gray-300'
        placeholder='Que tarea tenes? '
        onChange={(evt) => setValue(evt.target.value)} value={value}
      />
      <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2'>
        {" "}
        Agregar Tarea
      </button>
    </form>
  );
};

export default Form;
