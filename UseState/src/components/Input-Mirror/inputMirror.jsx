import React, { useState } from 'react';

const InputMirror = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-300 via-indigo-300 to-pink-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Input Mirror
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Type something..."
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6"
        />
        <p className="text-lg font-semibold text-center text-gray-800">
          You Typed: <span className="font-semibold text-pink-600">{inputValue}</span>
        </p>
      </div>
    </div>
  );
};

export default InputMirror;
