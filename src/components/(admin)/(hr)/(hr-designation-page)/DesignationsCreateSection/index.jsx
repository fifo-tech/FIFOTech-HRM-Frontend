import { useState, useEffect } from "react";
import { fetchDepartments } from "../../../../../models/Designation/GetDepartments";  // Import method to fetch departments
import { createDesignation } from "../../../../../models/Designation/CreateDesignation";  // Import method to create designation
import Swal from "sweetalert2";  // For showing alerts

const DesignationsCreateSection = () => {
  const [departments, setDepartments] = useState([]); // Initialize as an empty array
  const [department, setDepartment] = useState("");
  const [designationName, setDesignationName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch departments when the component mounts
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const deptList = await fetchDepartments();
        if (Array.isArray(deptList)) {
          setDepartments(deptList);
        } else {
          console.error("Fetched departments are not in an array format");
          Swal.fire({
            title: "Error!",
            text: "Failed to load departments. Please try again later.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Failed to load departments:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load departments. Please try again later.",
          icon: "error",
        });
      }
    };
    loadDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!department || !designationName) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      // Call the createDesignation API
      const response = await createDesignation(department, designationName, description);

      // Show success notification
      Swal.fire({
        title: "Success!",
        text: "Designation created successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      // Reset form fields after success
      setDepartment("");
      setDesignationName("");
      setDescription("");
    } catch (error) {
      // Handle error during designation creation
      Swal.fire({
        title: "Error!",
        text: error.message || "Failed to create designation.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 my-6 max-w-4xl rounded-sm bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Add New Designation</h2>

      <hr className="border-t-1 mb-6 border-gray-300" />

      <form onSubmit={handleSubmit}>
        {/* Department Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Department <span className="text-red-500">*</span>
          </label>
          <select
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          >
            <option value="">Select Department</option>
            {Array.isArray(departments) && departments.length > 0 ? (
              departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))
            ) : (
              <option disabled>No departments available</option>
            )}
          </select>
        </div>

        {/* Designation Name Input */}
        <div className="mb-4">
          <label
            htmlFor="designationName"
            className="block text-sm font-medium text-gray-700"
          >
            Designation Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="designationName"
            name="designationName"
            value={designationName}
            onChange={(e) => setDesignationName(e.target.value)}
            placeholder="Designation Name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Enter description"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-2 font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignationsCreateSection;
