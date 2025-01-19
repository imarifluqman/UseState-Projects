import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(10);

  const increment = () => {
    if (count >= 20) {
      alert("Counter does not move above 20");
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 0) {
      alert("Counter does not move below 0");
    } else {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#0A192F] to-[#1C2A48] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-[#A8B2D1] text-5xl font-bold mb-6">Counter</h1>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#E6F1F8] text-6xl font-bold mb-6">{count}</p>
            <div className="space-x-4">
              <button
                onClick={increment}
                className="bg-[#1C3A64] text-white px-6 py-2 rounded-md hover:bg-[#2C4A7D] transition"
              >
                Add
              </button>
              <button
                onClick={decrement}
                className="bg-[#1C3A64] text-white px-6 py-2 rounded-md hover:bg-[#2C4A7D] transition"
              >
                Remove
              </button>
              <button
                onClick={reset}
                className="bg-[#e74132] text-white px-6 py-2 rounded-md hover:bg-[#f56853] transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

