import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user data from localStorage when the component mounts
  useEffect(() => {
    const storedFirstName = localStorage.getItem("first_name");
    const storedLastName = localStorage.getItem("last_name");
    const storedEmail = localStorage.getItem("user_email");
    const storedProfilePic = localStorage.getItem("user_profile_pic");

    if (storedFirstName && storedLastName && storedEmail && storedProfilePic) {
      setUser({
        firstName: storedFirstName,
        lastName: storedLastName,
        email: storedEmail,
        profilePicture: storedProfilePic,
      });
    }
    setLoading(false);
  }, []);

  // Function to sign in a user (login)
  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        const { first_name, last_name, email, profile_photo_url, token, role_id } = response.data.data;

        // Save user data in localStorage
        localStorage.setItem("first_name", first_name);
        localStorage.setItem("last_name", last_name);
        localStorage.setItem("user_email", email);
        localStorage.setItem("user_profile_pic", profile_photo_url);
        localStorage.setItem("token", token);
        localStorage.setItem("role_id", role_id);
        
        const f_name = localStorage.getItem("first_name");
        console.log(f_name)

        // Set user state
        setUser({
          firstName: first_name,
          lastName: last_name,
          email,
          profilePicture: profile_photo_url,
        });

        return response.data.data;
      } else {
        throw new Error(
          response.data.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Function to log out the user
  const logOut = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. You are already logged out.");
        
      }

      const response = await fetch("http://localhost:8000/api/logout", {
        method: "DELETE",  // Logout uses DELETE method
        headers: {
          "Authorization": `Bearer ${token}`,  // Include the token in the Authorization header
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Clear localStorage and user state
        localStorage.clear();
        setUser(null);
      } else {
        throw new Error("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire({
        title: "Error!",
        text: error.message || "Failed to log out. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    } finally {
      setLoading(false);
    }
  };

  const authInfo = {
    user,
    loading,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
