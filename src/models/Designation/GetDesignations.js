export const fetchDesignations = async () => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      throw new Error("No token found. Please login again.");
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/designation-list", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch designations. Please try again.");
      }
  
      const data = await response.json();
      console.log("Fetched Designations:", data); // Check the entire response
  
      // Check if 'data' exists and is an array
      if (data && Array.isArray(data.data)) {
        return data.data; // Return the array of designations
      } else {
        throw new Error("Designations data is not in the expected format.");
      }
  
    } catch (error) {
      console.error("Error fetching designations:", error);
      throw new Error("Failed to fetch designations.");
    }
  };
  