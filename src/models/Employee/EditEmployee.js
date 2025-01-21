export const editEmployee = async (
    employeeId,
    first_name,
    last_name,
    phone_num,
    gender,
    email,
    dept_id,
    designation_id
  ) => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      throw new Error("No token found. Please login again.");
    }
  
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/edit-employee/${employeeId}`, {
        method: "PUT",
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
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to edit employee.");
      }
  
      const data = await response.json();
      return data; // Assuming the API returns the updated employee data
    } catch (error) {
      console.error("Error editing employee:", error);
      throw new Error(error.message || "Failed to edit employee.");
    }
  };
  