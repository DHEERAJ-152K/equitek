import React from "react";

const Home = () => {
  return (
    <div className="mt-10 md:mt-0 grid grid-cols-1 md:mx-10">
      {/* Title and description */}
      <div className="grid md:w-1/3 gap-5">
        <p className="text-left font-bold text-3xl md:text-[2.5rem] m-auto md:m-0">The Next Big Thing!</p>
        <p className="md:text-left opacity-60 font-normal text-[1rem] md:text-[1.5rem] w-[70%] md:w-auto m-auto">
          Join us in our journey to find out how the world of VR is evolving.
        </p>
      </div>

      {/* Image and button section */}
      <div className="flex flex-col-reverse md:flex-row md:w-full ">
        {/* "Know More" Button */}
        <button className="bg-blue rounded-md w-[8.8rem] py-2 border-2 border-dashed font-medium text-sm text-center mx-auto mb-5 md:absolute md:translate-y-10">
          Know More
        </button>

        {/* Vector image (for large screens) */}
        <img
          className="absolute hidden md:flex translate-x-40 translate-y-6"
          src="/vector40.svg"
          alt="vector"
        />

        {/* vector image (for mobile screens) */}
        <img
          className="md:hidden w-[46px] mx-auto"
          src="/Vector 20.svg"
          alt="small vector"
        />

        {/* Main hero image */}
        <img
          className="w-5/6 md:w-3/6 mx-auto mt-8 md:mt-0 md:translate-x-52 translate-y-10 md:-translate-y-20"
          src="/hero.svg"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default Home;
