import { useState } from "react";

const DepartmentCreateSection = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");

  const handleSave = async () => {
    // Validate input fields
    if (!departmentName || !departmentHead) {
      alert("Please fill in all the required fields.");
      return;
    }

    // Get the token from localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You are not logged in!");
      return;
    }

    const newDepartment = {
      name: departmentName,
      head_name: departmentHead,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/create-department`, {
        method: "POST",  // Use POST to create new department
        headers: {
          "Authorization": `Bearer ${token}`,  // Add Bearer token to the header
          "Content-Type": "application/json",  // Set content type as JSON
        },
        body: JSON.stringify(newDepartment),  // Send the department data as JSON in the body
      });

      const data = await response.json();

      if (data.success) {
        alert("Department created successfully!");
        // Reset the fields after successful creation
        setDepartmentName("");
        setDepartmentHead("");
      } else {
        alert("Failed to create department: " + data.message);
      }
    } catch (error) {
      console.error("Error creating department:", error);
      alert("An error occurred while creating the department.");
    }
  };

  return (
    <div className="mx-4 my-6 flex max-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <div>
          <h6 className="mb-4 text-lg font-semibold text-gray-700">Add New Department</h6>
        </div>
        <hr className="my-4 border-gray-300" />
        
        {/* Department Name Input */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="departmentName"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="departmentName"
            type="text"
            placeholder="Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="departmentName"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="departmentHead"
            type="text"
            placeholder="Department Head"
            value={departmentHead}
            onChange={(e) => setDepartmentHead(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>





        {/* Department Head Dropdown */}
        {/* <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="departmentHead"
          >
            Department Head<span className="text-red-500">*</span>
          </label>
          <select
            id="departmentHead"
            value={departmentHead}
            onChange={(e) => setDepartmentHead(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select Department Head</option>
            {departmentHeads.map((head) => (
              <option key={head} value={head}>
                {head}
              </option>
            ))}
          </select>
        </div> */}

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-all hover:bg-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCreateSection;
