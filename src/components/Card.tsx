import React from "react";

// Data for each card
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

// Reusable CardItem component
const CardItem: React.FC<{
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  shadowColor: string;
}> = ({ title, description, imageSrc, bgColor, shadowColor }) => (
  <div className="grid gap-5 max-w-72">
    <img
      className={`rounded-lg p-2 w-12 ${bgColor} ${shadowColor}`}
      src={imageSrc}
      alt={title}
    />
    <p className="font-bold text-base">{title}</p>
    <p className="font-normal text-sm">{description}</p>
  </div>
);

const Card: React.FC = () => {
  return (
    <div className="bg-offwhite rounded-l-3xl text-black text-left flex justify-around flex-wrap py-10 md:ml-10 gap-10">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          bgColor={card.bgColor}
          shadowColor={card.shadowColor}
        />
      ))}
    </div>
  );
};

export default Card;
