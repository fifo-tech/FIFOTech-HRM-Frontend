import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex items-center justify-between bg-neutral px-4 py-2 shadow">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <button className="mr-4 text-gray-600 hover:text-gray-800">
          <i className="fa fa-bars"></i>
        </button>

        {/* Brand Name */}
        <h1 className="text-lg font-bold text-gray-800">MyBrand</h1>
      </div>

      <div className="flex items-center">
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={toggleDropdown}
          >
            <img
              src="src/assets/images/img.jpg"
              alt="Profile"
              className="mr-2 h-8 w-8 rounded-full"
            />
            <span>John Doe</span>
            <i className="fa fa-angle-down ml-2"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded bg-white shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Settings
              </a>
              <a
                href="login.html"
                className="block px-4 py-2 text-red-500 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
