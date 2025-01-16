export const fetchDepartments = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      throw new Error("No token found. Please login again.");
    }
  
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/department-list`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch departments. Please try again.");
      }
  
      const data = await response.json();
      console.log("Fetched Departments:", data); // Check the entire response
  
      // Check if 'data' exists and is an array
      if (data && Array.isArray(data.data)) {
        return data.data; // Return the array of departments
      } else {
        throw new Error("Departments data is not in the expected format.");
      }
  
    } catch (error) {
      console.error("Error fetching departments:", error);
      throw new Error("Failed to fetch departments.");
    }
  };
  