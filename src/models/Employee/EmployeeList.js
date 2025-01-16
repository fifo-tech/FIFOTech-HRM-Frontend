export const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/employee-list`, {
        method: "GET", // Specify GET method
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
          "Content-Type": "application/json", // Add Content-Type header
        },
      });
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the JSON response
      return data; // Return the response data
  
    } catch (error) {
      console.error("Error fetching employees:", error); // Error handling
      throw error; // Rethrow error for further handling in the calling component
    }
  };
  