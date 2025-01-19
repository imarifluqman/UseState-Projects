import React, { useState } from "react";

const CharacterCounter = () => {
  const [characterCounter, setCharacterCounter] = useState("");

  const handleCharacterCounter = (e) => {
    setCharacterCounter(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-pink-500 text-center mb-8">
          Character Counter
        </h1>
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={characterCounter}
            onChange={handleCharacterCounter}
            className="w-full p-4 text-xl border-4 border-transparent bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out mb-4"
            placeholder="Start typing..."
          />
          <p className="mt-4 text-lg font-semibold text-gray-700">
            {characterCounter.length} characters
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;