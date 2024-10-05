import React from "react";

const Card = () => {
  return (
    <div className=" bg-offwhite rounded-l-3xl text-black  text-left flex flex-wrap justify-between px-[4.5rem] py-10 ml-10">

      <div className=" grid gap-5  max-w-60 ">
        <img  className=" bg-iconpink rounded-lg p-2 w-12 shadow-shadowpink" src="/speed.svg" alt="icon" />
        <p className=" font-bold">Focus on Innovation</p>
        <p className=" font-normal">
          Stay ahead with the latest advancements in VR technology, bringing new
          dimensions to immersive experiences.
        </p>
      </div>

      <div className=" grid gap-5  max-w-60 ">
        <img  className=" bg-iconyellow rounded-lg p-2 w-12 shadow-shadowyellow" src="/blocks.svg" alt="icon" />

        <p className=" font-bold">Focus on Innovation</p>
        <p className=" font-normal">
          Stay ahead with the latest advancements in VR technology, bringing new
          dimensions to immersive experiences.
        </p>
      </div>

      <div className=" grid gap-5  max-w-60 ">
        <img  className=" bg-iconblue rounded-lg p-2 w-12 shadow-shadowblue" src="/frame.svg" alt="icon" />

        <p className=" font-bold">Focus on Innovation</p>
        <p className=" font-normal">
          Stay ahead with the latest advancements in VR technology, bringing new
          dimensions to immersive experiences.
        </p>
      </div>
    </div>
  );
};

export default Card;
