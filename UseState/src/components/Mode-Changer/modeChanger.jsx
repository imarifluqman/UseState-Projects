import { useState } from "react";

const ModeChanger = () => {
  const [mode, setMode] = useState("dark");
  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`h-screen w-full flex flex-col justify-center items-center space-y-5 font-bold ${mode === "dark" ? "bg-black text-white" : "bg-white text-black"} transition-all duration-500`}
    >
      <h1 className="text-xl sm:text-3xl md:text-5xl ">
        Dark Mode And Light Mode
      </h1>
      <button onClick={changeMode} className={`px-5 py-2 border-2 border-white rounded ${ mode === "dark" ? "border-white" : "border-black"}`}>
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ModeChanger;