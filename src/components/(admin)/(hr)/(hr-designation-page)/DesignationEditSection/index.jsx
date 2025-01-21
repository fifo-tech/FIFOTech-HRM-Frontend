import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"; // For showing alerts
import { fetchDepartments } from "../../../../../models/Designation/GetDepartments"; // Method to fetch departments
import { fetchDesignationDetails } from "../../../../../models/Designation/GetDesignationDetails"; // Method to fetch specific designation details
import { updateDesignation } from "../../../../../models/Designation/UpdateDesignation"; // Method to update designation

const DesignationEditSection = () => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate(); // For navigating after successful update
  const [departments, setDepartments] = useState([]);
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

  // Fetch the specific designation details when the component mounts
  useEffect(() => {
    const loadDesignation = async () => {
      try {
        const designation = await fetchDesignationDetails(id); // Fetch the designation details by ID
        if (designation) {
          setDepartment(designation.dept_id); // Set the selected department
          setDesignationName(designation.name); // Set the designation name
          setDescription(designation.description || ""); // Set description if available
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to load designation details.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Failed to load designation details:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to load designation details.",
          icon: "error",
        });
      }
    };

    loadDesignation();
  }, [id]);

  // Handle form submission to update the designation
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!department || !designationName) {
      alert("Please fill all required fields!");
      return;
    }

    setLoading(true);

    try {
      // Call the updateDesignation API
      const response = await updateDesignation(
        id,
        department,
        designationName,
        description,
      );

      if (response.success) {
        // Show success notification
        Swal.fire({
          title: "Success!",
          text: "Designation updated successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // Navigate back to the list page
        navigate("/dashboard/designations-list");
      } else {
        // Handle failure
        Swal.fire({
          title: "Error!",
          text: response.message || "Failed to update designation.",
          icon: "error",
        });
      }
    } catch (error) {
      // Handle error during designation update
      Swal.fire({
        title: "Error!",
        text: error.message || "Failed to update designation.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 my-6 max-w-5xl rounded-sm bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Edit Designation</h2>

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
        <div className="mt-6 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded bg-gray-300 px-6 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-2 font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignationEditSection;
