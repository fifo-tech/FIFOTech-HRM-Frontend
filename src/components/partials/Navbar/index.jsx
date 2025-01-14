import { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate to the sign-in page
import { useContext, useRef } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Retrieve first name and last name from localStorage
  const firstName = localStorage.getItem("first_name");
  const lastName = localStorage.getItem("last_name");
  const profile_pic = localStorage.getItem("user_profile_pic");
  
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Log out error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-sky-500 px-4 py-2 shadow">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <button className="mr-4 text-gray-600 hover:text-gray-800">
          <i className="fa fa-bars"></i>
        </button>

        {/* Brand Name */}
        <h1 className="text-lg font-bold text-gray-800">Wetechhub-HRM</h1>
      </div>

      <div className="flex items-center">
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={toggleDropdown}
          >
            <img
              src={profile_pic}
              alt="Profile"
              className="mr-2 h-8 w-8 rounded-full"
            />
            <span>{firstName} {lastName}</span>  {/* Dynamically display the name */}
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
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
