const Footer = () => {
  return (
    <div className=" mt-20 bg-footer-gradient rounded-t-[2rem] py-20  flex flex-col md:flex-row  gap-10 md:gap-0 ">
      <div className="w-10/12 md:w-8/12  m-auto flex flex-col-reverse md:flex-row  gap-12 justify-between">
        {/* profile block */}

        <div className="grid gap-2 md:gap-0 md:w-5/12 ">
          <img
            className="m-auto md:m-0 w-4/12 md:2/6"
            src="/human.svg"
            alt="profile Image"
          />
          <h2 className=" font-bold text-base  md:text-left md:text-lg">
            Jonathan Vader
          </h2>
          <p className="font-normal text-sm md:text-left md:text-lg">
            Hello, EquiTek is a personal blog created by me for tech enthusiasts
            and people looking to buy the latest Tech. I am a VR Games Developer
            who loves to create immersive experiences. You can visit my personal
            website to see my work.
          </p>
          <img
            className="m-auto md:m-0 w-5/12"
            src="/know-more.svg"
            alt="Know more"
          />
        </div>

        {/* breakpoint */}
        <svg
          className="md:hidden"
          width="294"
          height="2"
          viewBox="0 0 294 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1H293.5" stroke="white" />
        </svg>

        <svg className="hidden md:block"
          width="2"
          height="346"
          viewBox="0 0 2 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 0V345.5" stroke="white" />
        </svg>

        {/* mailing section */}
        <div className="grid gap-5   md:w-5/12">
          <h2 className=" font-bold text-lg md:text-2xl text-center">
            MAILING LIST
          </h2>
          <p className=" font-normal text-sm md:text-lg">
            Sign up to the mailing list and stay updated on the latest posts and
            offers
          </p>
          <input
            className=" bg-offwhite w-full h-[2rem] rounded-lg px-5 text-black"
            type="text"
            placeholder="Email ID"
          />

          <label className="flex text-left">
            <input
              className="absolute translate-y-[4px]"
              type="checkbox"
              name="terms"
            />
            <span className=" translate-x-6">
              <p className=" font-bold text-base">I agree to receive emails</p>
              <p className="text-sm">
                I agree to receive updates, promotions, and relevant content via
                email.
              </p>
            </span>
          </label>

          <label className="flex text-left">
            <input
              className="absolute translate-y-[4px]"
              type="checkbox"
              name="terms"
            />
            <span className=" translate-x-6">
              <p className=" font-bold text-base">
                I allow sharing with third-party partners
              </p>
              <i className="text-xs">(optional)</i>
              <p className="text-sm">
                I consent to my email being shared with selected partners for
                offers and promotions.
              </p>
            </span>
          </label>
          <button className="text-base flex bg-blue border-dashed border w-6/12 md:w-36 rounded-md font-bold justify-evenly m-auto py-2">
            SUBMIT
            <svg
              className=" translate-y-[7px] -translate-x-2"
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4253 5.42527C17.6601 5.1904 17.6601 4.8096 17.4253 4.57473L13.5979 0.747341C13.363 0.512474 12.9822 0.512474 12.7473 0.747341C12.5125 0.982209 12.5125 1.36301 12.7473 1.59787L16.1495 5L12.7473 8.40213C12.5125 8.63699 12.5125 9.01779 12.7473 9.25266C12.9822 9.48753 13.363 9.48753 13.5979 9.25266L17.4253 5.42527ZM0 5.60142H17V4.39858H0V5.60142Z"
                fill="#F8F8F8"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className=" m-auto  md:w-3/12">
        <svg
          className="md:hidden"
          width="294"
          height="2"
          viewBox="0 0 294 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1H293.5" stroke="white" />
        </svg>
        <img
          className="w-4/6 md:w-full m-auto mt-10 md:mt-0 "
          src="/footer-logo.svg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Footer;
