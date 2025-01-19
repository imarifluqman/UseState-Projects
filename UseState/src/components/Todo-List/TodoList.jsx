import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  const handleTodoInput = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setNewTodo([...newTodo, todo]);
      setTodo("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-yellow-400">Todo List</h1>
      
      {/* Input and Button container */}
      <div className="flex w-full max-w-lg mb-6 space-x-4">
        <input
          type="text"
          value={todo}
          onChange={handleTodoInput}
          className="w-full p-4 text-lg bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
          placeholder="Enter a todo"
        />
        <button
          onClick={handleAddTodo}
          className="w-1/3 py-4 px-6 text-lg bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
        >
          Add
        </button>
      </div>
      
      {/* Todo List */}
      <ul className="w-full max-w-lg space-y-4">
        {newTodo.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-4 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md"
          >
            <span>{index + 1}. {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

