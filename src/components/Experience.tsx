import React from "react";

const Experience = () => {
  return (
    <div className="mt-10 grid gap-16">
      <h2 className=" font-bold text-4xl ">
        Experience VR
        <svg
          className=" m-auto "
          width="63"
          height="4"
          viewBox="0 0 63 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H61"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h2>

      <img className="w-full " src="vr-headset.svg" alt="VR-headset" />
    </div>
  );
};

export default Experience;
