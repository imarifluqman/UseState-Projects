import React, { useState } from "react";

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleBackgroundColor = (e) => {
    setBackgroundColor(e.target.value);
  };

  const bgColorClass = {
    white: "bg-white",
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <>
      <div
        className={`${bgColorClass[backgroundColor]} h-screen w-full flex flex-col justify-center items-center`}
      >
        <select
          value={backgroundColor}
          onChange={handleBackgroundColor}
          className="px-6 py-2 border-2 border-gray-300 rounded-lg text-lg focus:outline-none mb-6"
        >
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
    </>
  );
};

export default BackgroundChanger;
