import React, { useState, useRef } from "react";

function StopWatch() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hour: 0,
  });
  const intervalRef = useRef(null);

  function timer() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((t) => {
          if (t.sec === 59) {
            if (t.min === 59) {
              return { sec: 0, min: 0, hour: t.hour + 1 };
            } else {
              return { sec: 0, min: t.min + 1, hour: t.hour };
            }
          } else {
            return { sec: t.sec + 1, min: t.min, hour: t.hour };
          }
        });
      }, 1000);
    }
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    stopTimer(); // Clear the interval
    setTime({ min: 0, sec: 0, hour: 0 });
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#010318] text-[#D4D4D4]">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#CA0137] mb-12">
        Stop Watch
      </h1>
      <div className="flex justify-center items-center mb-8">
        <p className="text-4xl mx-4 font-semibold">
          {time.hour.toString().padStart(2, "0")} :
        </p>
        <p className="text-4xl mx-4 font-semibold">
          {time.min.toString().padStart(2, "0")} :
        </p>
        <p className="text-4xl mx-4 font-semibold">
          {time.sec.toString().padStart(2, "0")}
        </p>
      </div>
      <div className="flex justify-center items-center space-x-4 sm:space-x-8">
        <button
          className="bg-[#CA0137] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-[#9d0129] shadow-lg transform hover:scale-105 transition duration-200"
          onClick={timer}
        >
          Start
        </button>
        <button
          className="bg-[#CA0137] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-[#9d0129] shadow-lg transform hover:scale-105 transition duration-200"
          onClick={stopTimer}
        >
          Stop
        </button>
        <button
          className="bg-[#CA0137] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl hover:bg-[#9d0129] shadow-lg transform hover:scale-105 transition duration-200"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
