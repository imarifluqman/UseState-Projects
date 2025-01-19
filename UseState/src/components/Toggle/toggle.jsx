import React, { useState } from "react";

const Toggle = () => {
  const [visibility, setVisibility] = useState(true);
  const courses = ["HTML", "CSS", "JavaScript"];

  const showCourses = () => {
    setVisibility(true);
  };

  const hideCourses = () => {
    setVisibility(false);
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#2a2a]">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Courses List</h1>

        <div className="flex justify-center gap-4 mb-4">
          {/* Show Button */}
          <button
            onClick={showCourses}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Show
          </button>
          {/* Hide Button */}
          <button
            onClick={hideCourses}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Hide
          </button>
        </div>

        {visibility && (
          <ul className="space-y-4">
            {courses.map((course, index) => (
              <li
                key={index}
                className="text-xl text-gray-800 p-2 bg-gray-200 rounded-md shadow-md"
              >
                {course}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Toggle;
