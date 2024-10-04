import React from "react";

const Explore = () => {
  return (
    <div className="grid grid-cols-1 place-items-center ">
      <div className="border-2 w-1/2">
        <h2 className="font-bold text-3xl">Explore Possibilities</h2>
        <p>Unlock New Dimensions through Tech and Virtual Reality</p>
        <ul className=" flex justify-evenly">
          <li>Sci-Fi</li>
          <li>Nature</li>
          <li>Gaming</li>
          <li>Drive</li>
        </ul>
      </div>
      <div className=" w-3/4">
        <img src="/Gaming.svg" alt="Gaming" />
      </div>

      <div className="w-10/12 text-left">
        <h2>More about Equitek!</h2>
        <div className=" flex justify-evenly">
          <div className=" bg-cards-gradient w-1/4 ">
            <img src="/immersive-experiences.svg" alt="Immersive-experience" />
            <p>Tech Innovations</p>
            <p>
              Unveiling the latest in tech innovation, from cutting-edge gadgets
              to groundbreaking VR experiences. Dive into expert reviews and
              insights.
            </p>
          </div>

          <div className=" bg-cards-gradient w-1/4 ">
            <img src="/vr-game-development.svg" alt="Immersive-experience" />
            <p>Tech Innovations</p>
            <p>
              Unveiling the latest in tech innovation, from cutting-edge gadgets
              to groundbreaking VR experiences. Dive into expert reviews and
              insights.
            </p>
          </div>

          <div className=" bg-cards-gradient w-1/4 ">
            <img src="/tech-innovations.svg" alt="Immersive-experience" />
            <p>Tech Innovations</p>
            <p>
              Unveiling the latest in tech innovation, from cutting-edge gadgets
              to groundbreaking VR experiences. Dive into expert reviews and
              insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
