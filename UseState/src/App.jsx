// import React, { useState } from "react";

// const App = () => {
//   const [time,setTime] =useState({
//     sec: 0 ,
//     min : 0 ,
//     hour : 0
//   })

//   const timer = () => {
//    setTime((s)=>{
//   return console.log({...s,sec:s.sec+1});
   
//    },1000)
//     // setTime((s)=>{return {...s,sec:s.sec +1}})
    
//   }

//   return (
//    <div className="flex flex-col justify-center items-center h-screen">
//      <div className="flex space-x-8 ">
//    <p>Sec</p>
//    <p>Min</p>
//    <p>Hour</p>
//    </div>
//     <div className="flex space-x-8 ">
//    <p>{time.sec}</p>
//    <p>{time.min}</p>
//    <p>{time.hour}</p>
//    </div>
//    <div className="space-x-6">
//    <button onClick={timer}>Start</button>
//    <button>Stop</button>
//    <button>Reset</button>
//    </div>

//    </div>
//   );
// };

// export default App;


import React from 'react'
import Home from './components/Home/home'

const App = () => {
  return (
    <div>
     <Home/>
      </div>
  )
}

export default App