import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img
          className=" w-[39px] md:w-[58px] h-[38px] absolute top-[66px] md:top-[39px] left-[25px] md:left-[47px]"
          src="/Group4.svg"
          alt="logo Image"
        />
        <p className=" size-[16px] md:size-[58px] leading-[18.75px] font-[700] w-[58px] h-[19px] absolute top-[74px] md:top-[47px] left-[75px] md:left-[97px] ">
          EquiTek
        </p>
      </div>

      <div>
        <img
          className=" w-[23px] h-[12px]  top-[77px] left-[323px] md:hidden"
          src="/hamburger.svg"
          alt=""
        />
        <ul className=" hidden md:flex font-[400] gap-2">
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
