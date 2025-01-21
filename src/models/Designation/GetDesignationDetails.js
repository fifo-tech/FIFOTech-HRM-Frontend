// models/Designation/GetDesignationDetails.js
import axios from "axios"; // Assuming you're using axios for HTTP requests

export const fetchDesignationDetails = async (id) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL; // Get the API URL from environment variable
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

    const response = await axios.get(`${apiUrl}/designation-details/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add Authorization header
      },
    });

    if (response.data.success) {
      return response.data.data.designation;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error fetching designation details:", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch designation details.",
    );
  }
};
