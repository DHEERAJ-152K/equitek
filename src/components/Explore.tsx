import  { useState } from "react";

const Explore = () => {
  const [picture, setPicture] = useState<string>("Gaming.svg");
  const [isVisible, setVisible] = useState<boolean>(false)

  const handleComponent = () => {
    setVisible(true);
  }
  return (
    <div className="mt-10">
       <p onClick={handleComponent} className={`${isVisible?'hidden':'block'} m-auto w-64 p-2 bg-blue border-[1px] border-dashed rounded-md font-normal `}>
        Explore More.
      </p>
      <div
        id="explore"
        className={` ${isVisible?'block':'hidden'} mt-10 grid grid-cols-1 place-items-center mx-5 gap-16 md:gap-20 `}
      >
        <div className="w-full md:max-w-[50rem] grid  py-5 shadow-whiteShadow rounded-xl gap-2">
          <h2 className="font-bold text-base md:text-3xl">
            Explore Possibilities
          </h2>
          <p className=" text-sm md:text-xl w-[14rem] md:w-full m-auto">
            Unlock New Dimensions through Tech and Virtual Reality
          </p>
          <ul className=" flex justify-evenly md:mt-10">
            <li
              onClick={() => setPicture("Sci-fi.svg")}
              className=" cursor-pointer py-2 px-1 text-xs md:text-lg text-black w-[4rem] md:w-[7rem] rounded-lg border-2 hover:border-purple hover:bg-transparent hover:text-offwhite border-iconblue bg-offwhite transition duration-500 ease-out"
            >
              Sci-Fi
            </li>
            <li
              onClick={() => setPicture("nature.svg")}
              className=" cursor-pointer py-2 px-1 text-xs md:text-lg text-black w-[4rem] md:w-[7rem] rounded-lg border-2 hover:border-purple hover:bg-transparent hover:text-offwhite border-iconblue bg-offwhite transition duration-500 ease-out"
            >
              Nature
            </li>
            <li
              onClick={() => setPicture("Gaming.svg")}
              className=" cursor-pointer py-2 px-1 text-xs md:text-lg text-black w-[4rem] md:w-[7rem] rounded-lg border-2 hover:border-purple hover:bg-transparent hover:text-offwhite border-iconblue bg-offwhite transition duration-500 ease-out"
            >
              Gaming
            </li>
            <li
              onClick={() => setPicture("driving.svg")}
              className=" cursor-pointer py-2 px-1 text-xs md:text-lg text-black w-[4rem] md:w-[7rem] rounded-lg border-2 hover:border-purple hover:bg-transparent hover:text-offwhite border-iconblue bg-offwhite transition duration-500 ease-out"
            >
              Drive
            </li>
          </ul>
        </div>

        <div className=" m-auto ">
          <img
            className="ease-in-out duration-700 opacity-100 transition-all"
            src={picture}
            alt="Picture"
          />
        </div>

        <div className=" grid gap-10">
          <h2 className="text-xl md:text-3xl font-bold ">
            More about EquiTek!{" "}
            <svg
              className="m-auto"
              width="111"
              height="4"
              viewBox="0 0 111 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H109"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h2>

          <div className=" grid md:grid-cols-3 text-left gap-5 md:px-16">
            <div className="  bg-custom-gradient md:bg-cards-gradient rounded-r-xl rounded-t-xl flex flex-row-reverse md:place-items-center md:flex-col px-2 py-5 md:gap-5">
              <img
                className=" w-[7.6rem] md:w-[15.5rem]"
                src="/immersive-experiences.svg"
                alt="Immersive-experience"
              />
              <div className="grid md:w-3/4 md:gap-5">
                <p className="text-base md:text-lg font-bold">
                  Tech Innovations
                </p>
                <p className=" text-sm md:text-base text-justify">
                  Unveiling the latest in tech innovation, from cutting-edge
                  gadgets to groundbreaking VR experiences. Dive into expert
                  reviews and insights.
                </p>
              </div>
            </div>

            <div className=" bg-custom-gradient md:bg-cards-gradient rounded-r-xl rounded-t-xl flex flex-row-reverse md:place-items-center md:flex-col px-2 py-5 md:gap-5">
              <img
                className=" w-[7.6rem] md:w-[15.5rem]"
                src="/vr-game-development.svg"
                alt="Immersive-experience"
              />
              <div className="grid md:w-3/4 md:gap-5">
                <p className="text-base md:text-lg font-bold">
                  VR Game Development
                </p>
                <p className=" text-sm md:text-base text-justify">
                  Explore the art of VR game development, showcasing the blend
                  of technology and creativity in crafting immersive virtual
                  worlds.
                </p>
              </div>
            </div>

            <div className=" bg-custom-gradient md:bg-cards-gradient rounded-r-xl rounded-t-xl flex flex-row-reverse md:place-items-center md:flex-col px-2 py-5 md:gap-5">
              <img
                className=" w-[7.6rem] md:w-[15.5rem]"
                src="/tech-innovations.svg"
                alt="Immersive-experience"
              />
              <div className="grid md:w-3/4 md:gap-5">
                <p className="text-base md:text-lg font-bold">
                  Immersive Experiences
                </p>
                <p className=" text-sm md:text-base text-justify">
                  Delve into a collection of VR projects, where technology
                  pushes the boundaries of imagination and transforms the
                  digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
