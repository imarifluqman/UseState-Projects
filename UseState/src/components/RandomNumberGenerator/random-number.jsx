import React, { useState } from "react";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const randomNumberGenerator = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-xs sm:max-w-md w-full text-center transform transition duration-300 hover:scale-105">
        <h1 className="text-teal-600 text-xl sm:text-3xl md:text-4xl font-extrabold mb-8 ">
          Random Number Generator
        </h1>
        <button
          onClick={randomNumberGenerator}
          className="bg-teal-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-transform duration-200 ease-out hover:scale-110 hover:bg-teal-500 transform"
        >
          Generate Number
        </button>
        {randomNumber !== null && (
          <p className="text-teal-600 text-xl sm:text-2xl mt-6 font-semibold">
            Generated Number: {randomNumber}
          </p>
        )}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;


