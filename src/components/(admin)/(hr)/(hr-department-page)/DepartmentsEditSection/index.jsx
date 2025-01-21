import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentsEditSection = () => {
  const { id } = useParams(); // Get department ID from URL
  const navigate = useNavigate(); // Navigation hook
  const [formData, setFormData] = useState({ name: "", head_name: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    // Fetch department details for the given ID
    const fetchDepartment = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/department-details/${id}`, {
          headers: {
            method: "GET",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.success) {
          setFormData({
            name: data.data.name || "",
            head_name: data.data.head_name || "",
          });
        } else {
          setErrorMessage(data.message || "Failed to fetch department.");
        }
      } catch (error) {
        setErrorMessage("An error occurred while fetching department details.");
      }
    };

    fetchDepartment();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/update-department/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccessMessage("Department updated successfully!");
        setTimeout(() => navigate("/dashboard/departments-list"), 2000); // Redirect after 2 seconds
      } else {
        setErrorMessage(data.message || "Failed to update department.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating the department.");
    }
  };

  return (
    <div className="container mx-auto my-8 max-w-4xl rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Edit Department</h2>
      {errorMessage && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-600">
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Department Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter department name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Department Head
          </label>
          <input
            type="text"
            name="head_name"
            value={formData.head_name}
            onChange={handleChange}
            placeholder="Enter department head name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate("/dashboard/departments-list")}
            className="rounded bg-gray-300 px-4 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-indigo-600 px-4 py-2 text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentsEditSection;
