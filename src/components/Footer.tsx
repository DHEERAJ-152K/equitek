import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isThirdPartyAllowed, setIsThirdPartyAllowed] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Regex for email validation
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
    e.preventDefault();
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure the user agrees to the terms and the email is valid
    if (isAgreed && isEmailValid) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="mt-20 bg-footer-gradient rounded-t-[2rem] py-10 md:py-20 flex flex-col md:flex-row gap-10 md:gap-0">
      <div className="w-10/12 md:w-8/12 m-auto flex flex-col-reverse md:flex-row gap-12 justify-between">
        {/* Profile block */}
        <div className="grid gap-2 md:w-5/12 md:text-left">
          <img
            className="m-auto md:m-0 w-4/12"
            src="/human.svg"
            alt="Profile"
          />
          <h2 className="font-bold text-base md:text-lg">Jonathan Vader</h2>
          <p className="font-normal text-sm md:text-base">
            Hello, EquiTek is a personal blog created by me for tech enthusiasts
            and people looking to buy the latest Tech. I am a VR Games Developer
            who loves to create immersive experiences. You can visit my personal
            website to see my work
          </p>
          <img
            className="m-auto md:m-0 w-5/12 cursor-pointer"
            src="/know-more.svg"
            alt="Know more"
          />
        </div>

         {/* breakpoint */}
         <svg
          className="md:hidden m-auto"
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

        <div className="hidden md:block w-[2px] bg-white h-[346px]" />

        {/* Mailing section */}
        <div className="grid gap-5 md:w-5/12">
          <h2 className="font-bold text-lg md:text-2xl text-center md:text-left">
            MAILING LIST
          </h2>
          <p className="font-normal text-sm md:text-lg md:text-left">
          Sign up to the mailing list and stay updated on the latest posts and offers
          </p>

          {/* Form */}
          <form className="text-left grid gap-3 m-auto" onSubmit={handleSubmit}>
            <input
              className={`bg-offwhite w-full h-[2rem] rounded-lg px-5 text-black ${
                !isEmailValid ? "border border-red-500" : ""
              }`}
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={handleEmailChange}
            /> 

            {/* Email Validation */}
            {!isEmailValid && (
              <p className="text-[#ef4444] text-sm">
                Please enter a valid email.
              </p>
            )}

             {/* Success Message */}
             {isSubmitted && (
              <p className="text-[#86efac]  mt-4">Thank you for subscribing!</p>
            )}

            <label className="flex items-start ">
              <input
                className="mt-1 bg-transparent"
                type="checkbox"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
              />
              <span className="ml-2 ">
                <p className="font-bold text-base">I agree to receive emails</p>
                <p className="text-sm ">
                I agree to receive updates, promotions, and relevant content via email.
                </p>
              </span>
            </label>

            <label className="flex items-start">
              <input
                className="mt-1 bg-transparent"
                type="checkbox"
                checked={isThirdPartyAllowed}
                onChange={() => setIsThirdPartyAllowed(!isThirdPartyAllowed)}
              />
              <span className="ml-2">
                <p className="font-bold text-base">
                  I allow sharing with third-party partners 
                </p>
                <i className="text-xs">(optional)</i>
                <p className="text-sm">
                I consent to my email being shared with selected partners for offers and promotions.
                </p>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className={`mt-4 text-base flex bg-blue text-white border border-dashed w-6/12 md:w-36 rounded-md font-bold justify-evenly m-auto md:m-0 py-2 ${
                !isAgreed || !isEmailValid
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!isAgreed || !isEmailValid}
            >
              SUBMIT
              <svg
                className="translate-y-[7px] -translate-x-2"
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
              >
                <path
                  d="M17.4253 5.42527C17.6601 5.1904 17.6601 4.8096 17.4253 4.57473L13.5979 0.747341C13.363 0.512474 12.9822 0.512474 12.7473 0.747341C12.5125 0.982209 12.5125 1.36301 12.7473 1.59787L16.1495 5L12.7473 8.40213C12.5125 8.63699 12.5125 9.01779 12.7473 9.25266C12.9822 9.48753 13.363 9.48753 13.5979 9.25266L17.4253 5.42527ZM0 5.60142H17V4.39858H0V5.60142Z"
                  fill="#F8F8F8"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="m-auto md:w-3/12">
      <svg
          className="md:hidden m-auto"
          width="294"
          height="2"
          viewBox="0 0 294 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.5 1H293.5" stroke="white" />
        </svg>
        <img
          className="w-4/6 md:w-full m-auto mt-10 md:mt-0"
          src="/footer-logo.svg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Footer;
