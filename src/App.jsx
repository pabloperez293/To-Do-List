import React, {useState} from "react";
import TodoList from "./components/TodoList/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`container mx-auto ${darkMode ? "dark" : ""}`} style={{ backgroundColor: darkMode ? '#333' : '#f3f4f6'}} >
    <div className='flex justify-end'>
        <button className="p-2 rounded-full bg-gray-800 text-white hover:shake" onClick={toggleDarkMode}>
          {" "}
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
