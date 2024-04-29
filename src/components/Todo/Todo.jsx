import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ id, task, isEditing, deleteTodo, editTodo }) => {
  return (
    <div className='flex justify-between items-center bg-violet-800 py-3 px-4 rounded-md mb-1 cursor-pointer'>
      <p className='font-primary'>{task}</p>
      <div className='flex items-center gap-x-4'>
        <AiFillEdit className='text-xl' onClick={() => editTodo(id)} />
        <BsFillTrashFill
          className='text-xl'
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
