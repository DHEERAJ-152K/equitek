
const Navbar = () => {
  return (
    <div className="flex justify-between p-10">
      <div className="flex gap-[11px]">
        <img
          className=" w-[39px] md:w-[58px] h-[38px] "
          src="/Group4.svg"
          alt="logo Image"
        />
        <p className=" font-bold w-[58px] h-[19px] translate-y-[4px]  ">
          EquiTek
        </p>
      </div>

      <div>
        <img
          className=" w-[23px] h-[12px]  md:hidden translate-y-3"
          src="/hamburger.svg"
          alt=""
        />
        <ul className=" hidden md:flex font-normal gap-2 text-lg">
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
