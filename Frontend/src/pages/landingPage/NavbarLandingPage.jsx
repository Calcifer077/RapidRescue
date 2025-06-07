import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavbarLandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-light-green backdrop-blur-md p-6 px-12">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo / App Name */}
        <div className="text-main-text font-bold text-xl">RapidRescue</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-normal-text font-semibold">
          <li className="cursor-pointer hover:text-dark-green">Users</li>
          <li className="cursor-pointer hover:text-dark-green">Hospitals</li>
          <li className="cursor-pointer hover:text-dark-green">Drivers</li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-secondary text-2xl cursor-pointer z-10"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4">
          <ul className="flex flex-col space-y-4 text-secondary font-semibold">
            <li className="cursor-pointer">Users</li>
            <li className="cursor-pointer">Hospitals</li>
            <li className="cursor-pointer">Drivers</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarLandingPage;
