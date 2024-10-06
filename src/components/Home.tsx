import React from "react";

const Home = () => {
  return (
    <div className="mt-10 md:mt-0 md:text-left grid grid-cols-1  md:mx-10 ">
      <div className="grid md:w-1/3 ">
        <p className=" font-bold text-3xl md:text-[2.5rem]">
          The Next Big Thing !
        </p>
        <p className=" opacity-60 font-normal  text-[1rem] md:text-[1.5rem] w-[70%] md:w-auto m-auto">
          Join us in our journey to find out how the world of VR is evolving.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:w-full">
        <p className=" md:absolute  bg-blue rounded-md w-[8.8rem] py-[10px] border-2 border-dashed font-[500] text-sm text-center mx-auto mb-5 md:translate-y-10">
          Know More
        </p>
        <img
          className=" absolute hidden md:flex translate-x-40 translate-y-6"
          src="/vector40.svg"
          alt="vector image"
        />
        <img
          className=" md:hidden w-[46px] mx-auto "
          src="/Vector 20.svg"
          alt=""
        />
        <img
          className=" w-5/6 md:w-3/6 mx-auto mt-[2rem] md:mt-0 md:translate-x-64 translate-y-10 md:-translate-y-20"
          src="/hero.svg"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Home;
