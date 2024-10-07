import React from "react";
import Slider, { Settings } from "react-slick"; // Import types for Settings
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  title: string;
  imageUrl: string;
}

const Products: React.FC = () => {
  // data for each product card
  const products: Product[] = [
    { title: "HTC VIVE", imageUrl: "/products/htc-vive.svg" },
    { title: "HTC VIVE Pro", imageUrl: "/products/htc-vive-pro.svg" },
    { title: "Oculus Rift", imageUrl: "/products/oculus-rift.svg" },
    { title: "Playstation VR", imageUrl: "/products/playstation-vr.svg" },
    { title: "Samsung VR", imageUrl: "/products/samsung-vr.svg" },
    {
      title: "HTC Vive Cosmic VR",
      imageUrl: "/products/htc-vive-cosmic-vr.svg",
    },
    { title: "HP VR", imageUrl: "/products/hp-vr.svg" },
  ];

  // Slider configuration & settings
  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="mt-10 ">
      <h2 className="font-bold w-fit m-5 text-lg text-start ">
        Products
        <svg
          className=" translate-x-2"
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

      {/* products auto slider */}
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4 cursor-grabbing ">
            <div className="bg-[#000000] text-white rounded-lg h-[11rem] md:h-[20rem]">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full rounded-t-lg"
              />
              <h2 className="text-center md:text-xl font-bold mt-2 p-2">{product.title}</h2>
              <p className=" hidden text-sm  text-center md:flex w-fit m-auto p-2 cursor-pointer ">
                Learn more
                <svg
                  className=" translate-x-1 translate-y-[8.5px]"
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4 3.88889L1 7"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <svg
        className="m-auto"
        width="286"
        height="8"
        viewBox="0 0 286 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H283"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 4L68 4"
          stroke="#8F00FF"
          stroke-width="7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Products;
