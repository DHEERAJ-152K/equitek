import React from "react";

const Footer = () => {
  return (
    <div className=" bg-footer-gradient rounded-t-[48px] py-20 flex justify-evenly flex-wrap">
      <div className=" w-1/4 text-left">
        <img src="/human.svg" alt="profile Image" />
        <h2 className=" font-bold ">Jonathan Vader</h2>
        <p className="font-normal">
          Hello, EquiTek is a personal blog created by me for tech enthusiasts
          and people looking to buy the latest Tech. I am a VR Games Developer
          who loves to create immersive experiences. You can visit my personal
          website to see my work.
        </p>
        <img src="/know-more.svg" alt="Know more" />
      </div>

      <div className=" w-1/4 text-left">
        <h2 className=" font-bold text-2xl">MAILING LIST</h2>
        <p className=" font-normal text-lg">
          Sign up to the mailing list and stay updated on the latest posts and
          offers
        </p>
        <input className=" bg-offwhite w-full" type="text" pattern="EMAIL ID" />

        <label className="flex">
          <input type="checkbox" name="terms" />
          <span>
            <p className=" font-bold">I agree to receive emails</p>
            <p>
              I agree to receive updates, promotions, and relevant content via
              email.
            </p>
          </span>
        </label>

        <label className="flex">
          <input type="checkbox" name="terms" />
          <span>
            <p className=" font-bold">
              I allow sharing with third-party partners
            </p>
            <i>(optional)</i>
            <p>
              I consent to my email being shared with selected partners for
              offers and promotions.
            </p>
          </span>
        </label>
        <button className=" flex bg-blue border-dashed border-2 w-36 rounded-md font-bold justify-evenly">
          SUBMIT
          <img className=" translate-y-2" src="/arrow1.svg" alt="Arrow" />
        </button>
      </div>

      <div className=" w-1/4">
        <img src="/footer-logo.svg" alt="" />
      </div>
    </div>
  );
};

export default Footer;
