import React from "react";

const Home = () => {
  return (
    <div className="top-52 text-left">
      <p className=" font-bold text-[42px] ">The Next Big Thing !</p>
      <p className=" font-normal text-[24px] w-[22rem]">
        Join us in our journey to find out how the world of VR is evolving.
      </p>
      <div>
        <p className=" bg-blue rounded-md w-[8.8rem] h-[38px] border-2 border-dashed font-medium text-center">
          Know More
        </p>
        <img className=" w-[592px] translate-x-full " src="/hero.svg" alt="Image" />
      </div>
    </div>
  );
};

export default Home;
