import React from "react";

const Home = () => {
  return (
    <div className=" mt-16 md:text-left grid grid-cols-1 gap-5 md:mx-10">
      <div className="grid gap-5 md:w-1/3 ">
        <p className=" font-bold text-3xl md:text-[2.5rem] ">
          The Next Big Thing !
        </p>
        <p className=" opacity-60 font-normal  text-[1rem] md:text-[1.5rem] w-[70%] md:w-auto m-auto">
          Join us in our journey to find out how the world of VR is evolving.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row  ">
        <p className=" md:absolute  bg-blue rounded-md w-[8.8rem] py-[10px] border-2 border-dashed font-[500] text-sm text-center mx-auto md:translate-y-10">
          Know More
        </p>
        <img className=" absolute hidden md:flex translate-x-44 translate-y-6" src="/vector40.svg" alt="vector image" />
        <img className="  md:hidden w-[46px] m-auto -translate-y-10" src="/Vector 20.svg" alt="" />
        <img
          className=" w-[20.2rem] md:w-[37.3rem] mx-auto mt-[5.5rem] md:mt-0 md:translate-x-60 md:-translate-y-20"
          src="/hero.svg"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Home;
