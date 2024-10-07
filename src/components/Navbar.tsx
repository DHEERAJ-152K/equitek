
const Navbar = () => {
  return (
    <nav className="flex justify-between p-10">
      {/* Logo section */}
      <div className="flex items-center gap-3">
        <img
          className="w-[39px] h-[38px] cursor-pointer"
          src="/Group4.svg"
          alt="EquiTek logo"
        />
        <p className="font-bold  text-lg  cursor-pointer">EquiTek</p>
      </div>

      {/* Navigation section */}
      <div>
        {/* Hamburger icon foor mobile screens */}
        <img
          className="w-6 h-3 md:hidden cursor-pointer"
          src="/hamburger.svg"
          alt="Menu"
        />

        {/* Navigation links for larger screens */}
        <ul className="hidden md:flex gap-6 text-base font-normal">
          <li className="relative group cursor-pointer">
            Home
            <span className="block w-0 h-[4px] bg-offwhite rounded-full transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            About us
            <span className="block w-0 h-[4px] bg-offwhite rounded-full transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            Products
            <span className="block w-0 h-[4px] bg-offwhite rounded-full transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
