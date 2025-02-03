import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeesRolesAndPrivilegesCreate = ({
  toggleHideCreateForm,
  setIsUpdated,
}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    roleName: "", // Form field for role name
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value, // Update form state on input change
    }));
  };

  const handleReset = () => {
    setForm({
      roleName: "", // Reset form state
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.roleName) {
      Swal.fire({
        title: "Error!",
        text: "Role Name is required.",
        icon: "error",
      });
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        Swal.fire({
          title: "Error!",
          text: "You are not logged in!",
          icon: "error",
        });
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/create-role`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: form.roleName }), // Mapping roleName to name field
      });

      const data = await response.json();

      // Debugging the response from the API
      console.log("API Response:", data);

      if (response.ok && data.success) {
        setIsUpdated((prev) => !prev);

        // Clear input field after success
        handleReset();

        Swal.fire({
          title: "Success!",
          text: "Role created successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });

        // Redirect to roles list after a short delay
        setTimeout(() => {
          navigate("");
        }, 1600);
      } else {
        Swal.fire({
          title: "Error!",
          text: `Failed to create role: ${data.message}`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error creating role:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while creating the role.",
        icon: "error",
      });
    }
  };

  return (
    <div className="mx-40 my-6 max-h-screen max-w-5xl">
      <div className="rounded-md bg-white p-6 shadow-md">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-xl font-semibold">Create New Role</h6>
          <button
            onClick={toggleHideCreateForm}
            className="rounded bg-primary px-4 py-1 text-white hover:bg-indigo-700"
          >
            <FontAwesomeIcon icon={faMinus} />
            <span>Hide</span>
          </button>
        </div>
        <hr className="mb-4" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="roleName"
              className="mb-2 block text-sm font-medium"
            >
              Role Name
            </label>
            <input
              type="text"
              id="roleName"
              name="roleName"
              value={form.roleName}
              onChange={handleChange}
              required
              className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-md border px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeesRolesAndPrivilegesCreate;
