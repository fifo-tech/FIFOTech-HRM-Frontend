// models/Designation/UpdateDesignation.js
import axios from "axios"; // Assuming you're using axios for HTTP requests

export const updateDesignation = async (
  id,
  department,
  designationName,
  description,
) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL; // Get the API URL from environment variable
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

    const response = await axios.post(
      `${apiUrl}/update-designation/${id}`,
      {
        dept_id: department,
        name: designationName,
        description: description,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add Authorization header
        },
      },
    );

    if (response.data.success) {
      return response.data; // You can modify this if you need more info
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.error("Error updating designation:", error);
    throw new Error(
      error.response?.data?.message || "Failed to update designation.",
    );
  }
};
