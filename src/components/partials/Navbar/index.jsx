import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // To navigate to the sign-in page
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Retrieve first name and last name from localStorage
  const firstName = localStorage.getItem("first_name");
  const lastName = localStorage.getItem("last_name");
  const profile_pic = localStorage.getItem("user_profile_pic");
  const logged_in_user_id = localStorage.getItem("logged_in_user_id");

  const handleLogout = async () => {
    try {
      await logOut();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Log out error:", error);
    }
  };

  const handleProfileClick = () => {
    // Close the dropdown menu before navigating
    setIsDropdownOpen(false);
    navigate(`/dashboard/employee-details/${logged_in_user_id}`, {
      state: { id: logged_in_user_id },
    });
  };

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }

        const response = await fetch(
          `${apiUrl}/employee-profile/${logged_in_user_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile photo");
        }

        const { data } = await response.json();
        setProfilePhoto(data.employee.profile_photo);
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    fetchProfilePhoto();
  }, [logged_in_user_id, apiUrl]);

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-sky-500 px-4 py-2 shadow">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <button className="mr-4 text-gray-600 hover:text-gray-800">
          <i className="fa fa-bars"></i>
        </button>

<<<<<<< HEAD
        <img
          src="../../../../public/fav-radius-logo.png"
          alt="logo"
          className="me-2 h-10"
        />
=======
        <img src="./assets/fav-radius-logo.png" alt="logo" className="h-10 me-2" />
>>>>>>> fee993422078cac531ac3d930c1af4694f212958

        {/* Brand Name */}
        <h1 className="text-lg font-bold text-white">WeTechHub - HRMS</h1>
      </div>

      <div className="flex items-center">
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center focus:outline-none"
            onClick={toggleDropdown}
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="mr-2 h-8 w-8 rounded-full"
            />
            <div className="text-white">
              <span>
                {firstName} {lastName}
              </span>
            </div>
            {/* Dynamically display the name */}
            <i className="fa fa-angle-down ml-2"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded bg-white shadow-lg">
              <a
                onClick={handleProfileClick} // Call handleProfileClick instead of navigate directly
                className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
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
