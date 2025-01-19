import React from "react";
import { data } from "../../../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="bg-[#0a0e39] flex justify-center items-center h-44 sm:h-64 ">
        <h1 className=" text-2xl sm:text-5xl text-[#fff] font-extrabold">
          Mini Projects Of UseState
        </h1>
      </div>
      <div className="max-w-[1200px] m-auto my-10 sm:my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center p-4 gap-10">
          {data.map((item) => {
            return (
              <Link to={item.link} key={item.id}>
              <div
                
                className="bg-white w-full h-[400px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 duration-300 ease-in-out "
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-xl font-extrabold text-black  mb-4">
                    {item.heading}
                  </h1>
                  <button className={`${item.color}  text-white py-2 px-8 rounded-lg block hover:${item.hover} `}>
                    {item.button}
                  </button>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
     
      
    </div>
  );
};

export default Home;
