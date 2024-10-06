import React from "react";

// Define the data for each card
const cardData = [
  {
    title: "Focus on Innovation",
    description:
      "Stay ahead with the latest advancements in VR technology, bringing new dimensions to immersive experiences.",
    imageSrc: "/speed.svg",
    bgColor: "bg-iconpink",
    shadowColor: "shadow-shadowpink",
  },
  {
    title: "Building the Future",
    description:
      "Explore the foundational elements that drive VR, from cutting-edge hardware to revolutionary software solutions.",
    imageSrc: "/blocks.svg",
    bgColor: "bg-iconyellow",
    shadowColor: "shadow-shadowyellow",
  },
  {
    title: "Connected Worlds",
    description:
      "Discover the seamless integration of virtual reality with other emerging technologies, creating interconnected digital ecosystems.",
    imageSrc: "/frame.svg",
    bgColor: "bg-iconblue",
    shadowColor: "shadow-shadowblue",
  },
];

const Card: React.FC = () => {
  return (
    <div className="bg-offwhite rounded-l-3xl text-black text-left flex justify-around flex-wrap  py-10 md:ml-10 gap-10">
      {cardData.map((card, index) => (
        <div key={index} className="grid gap-5 max-w-72 ">
          <img
            className={`rounded-lg p-2 w-12 ${card.bgColor} ${card.shadowColor}`}
            src={card.imageSrc}
            alt="icon"
          />
          <p className="font-bold">{card.title}</p>
          <p className="font-normal">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
