import { useState } from "react";

const Explore = () => {
  const [picture, setPicture] = useState<string>("Gaming.jpg");
  const [isVisible, setVisible] = useState<boolean>(false);

  // Toggles the visibility of the content
  const handleComponent = () => setVisible(true);

  // Data for categories to avoid repetition
  const categories = [
    { name: "Sci-Fi", img: "Sci-fi.jpg" },
    { name: "Nature", img: "nature.jpg" },
    { name: "Gaming", img: "Gaming.jpg" },
    { name: "Drive", img: "driving.jpg" },
  ];

  // Data for "More about EquiTek" sections
  const equitekDetails = [
    {
      title: "Tech Innovations",
      description:
        "Unveiling the latest in tech innovation, from cutting-edge gadgets to groundbreaking VR experiences. Dive into expert reviews and insights.",
      img: "/immersive-experiences.svg",
    },
    {
      title: "VR Game Development",
      description:
        "Explore the art of VR game development, showcasing the blend of technology and creativity in crafting immersive virtual worlds.",
      img: "/vr-game-development.svg",
    },
    {
      title: "Immersive Experiences",
      description:
        "Delve into a collection of VR projects, where technology pushes the boundaries of imagination and transforms the digital landscape.",
      img: "/tech-innovations.svg",
    },
  ];

  return (
    <div className="mt-10 ">
      {/* Explore More Button */}
      {!isVisible && (
        <p
          onClick={handleComponent}
          className="m-auto mt-16 w-64 p-2 bg-blue border-[1px] border-dashed rounded-md font-normal cursor-pointer"
        >
          Explore More
        </p>
      )}

      {/* Main Explore Content */}
      {isVisible && (
        <div id="explore" className="mt-10 grid place-items-center mx-5 gap-16 md:gap-20">
          {/* Explore Possibilities Section */}
          <div className="bg-[#2B2044] w-full md:max-w-[50rem] grid py-5 shadow-whiteShadow rounded-xl gap-2">
            <h2 className="font-bold text-base md:text-3xl">Explore Possibilities</h2>
            <p className="text-sm md:text-xl w-[14rem] md:w-full m-auto">
              Unlock New Dimensions through Tech and Virtual Reality
            </p>

            {/* Category Buttons */}
            <ul className="flex justify-evenly md:mt-10">
              {categories.map((category) => (
                <li
                  key={category.name}
                  onClick={() => setPicture(category.img)}
                  className="cursor-pointer py-2 px-1 text-xs md:text-lg text-black w-[4rem] md:w-[7rem] rounded-lg border-2 hover:border-purple hover:bg-transparent hover:text-offwhite border-iconblue bg-offwhite transition duration-500 ease-out"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Display */}
          <div className="m-auto">
            <img  src={picture} alt={picture} />
          </div>

          {/* More about EquiTek Section */}
          <div className="grid gap-10 md:px-16">
            <h2 className="text-lg md:text-left md:text-3xl font-bold">
              More about EquiTek!
              <svg
                className="m-auto md:hidden"
                width="111"
                height="4"
                viewBox="0 0 111 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 2H109" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h2>

            {/* Cards with Details */}
            <div className="grid md:grid-cols-3 text-left gap-5 ">
              {equitekDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="bg-custom-gradient md:bg-cards-gradient rounded-r-xl rounded-t-xl flex flex-row-reverse md:place-items-center md:flex-col px-2 py-5 md:gap-5"
                >
                  <img className="w-[7rem] md:w-[15.5rem]" src={detail.img} alt={detail.title} />
                  <div className="grid md:w-3/4 md:gap-5">
                    <p className="text-base md:text-lg font-bold">{detail.title}</p>
                    <p className="text-[13px] md:text-base ">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
