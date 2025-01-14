export const createDesignation = async (dept_id, name, description) => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      throw new Error("No token found. Please login again.");
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/create-designation", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dept_id,
          name,
          description,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create designation.");
      }
  
      const data = await response.json();
      return data; // Assuming the API returns the created designation data
    } catch (error) {
      console.error("Error creating designation:", error);
      throw new Error("Failed to create designation.");
    }
  };
  