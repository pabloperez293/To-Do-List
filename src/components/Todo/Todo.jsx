import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ id, task, isEditing, deleteTodo, editTodo }) => {
  return (
    <div className='flex justify-between items-center bg-gray-900 py-3 px-4 rounded-md mb-1 cursor-pointer hover:bg-gray-700'>
      <p className='font-primary text-white'>{task}</p>
      <div className='flex items-center gap-x-4'>
        <AiFillEdit className='text-white text-xl hover:text-blue-400 cursor-pointer' onClick={() => editTodo(id)} />
        <BsFillTrashFill
          className='text-white text-xl hover:text-red-400 cursor-pointer'
          onClick={() => deleteTodo(id)}
        />
      </div>
    </div>
  );
};

export default Todo;
