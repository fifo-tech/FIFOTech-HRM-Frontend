export const deleteEmployee = async (employeeId) => {
    const API_URL = `http://localhost:8000/api/delete-employee/${employeeId}`;
    
    // Get the bearer token from local storage
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.error("Token not found in local storage.");
      return;
    }
  
    try {
      const response = await fetch(API_URL, {
        method: "DELETE", // HTTP method
        headers: {
          "Content-Type": "application/json", // Request body type
          Authorization: `Bearer ${token}`, // Bearer token
        },
      });
  
      // Parse the response
      const data = await response.json();
  
      if (response.ok) {
        console.log("Employee deleted successfully:", data.message);
      } else {
        console.error("Failed to delete employee:", data.message);
      }
    } catch (error) {
      console.error("Error while deleting employee:", error);
    }
};
