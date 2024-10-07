const Experience = () => {
  return (
    <div className="mt-10 grid gap-16">
      <h2 className=" font-bold text-4xl ">
        Experience VR
        <svg
          className="m-auto"
          width="183"
          height="6"
          viewBox="0 0 183 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 3H180"
            stroke="white"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h2>

      {/* VR Image */}
      <img className="w-full " src="vr-headset.svg" alt="VR-headset" />
    </div>
  );
};

export default Experience;
