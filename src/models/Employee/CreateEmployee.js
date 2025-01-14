export const createEmployee = async (first_name, last_name, phone_num, gender, email, dept_id, designation_id) => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      throw new Error("No token found. Please login again.");
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/create-employee", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name,
          last_name,
          phone_num,
          gender,
          email,
          dept_id,
          designation_id,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to create employee.");
      }
  
      const data = await response.json();
      return data; // Assuming the API returns the created employee data
    } catch (error) {
      console.error("Error creating employee:", error);
      throw new Error("Failed to create employee.");
    }
  };
  