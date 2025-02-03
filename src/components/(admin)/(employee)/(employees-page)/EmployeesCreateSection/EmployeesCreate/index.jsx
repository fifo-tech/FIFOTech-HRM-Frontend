import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

const EmployeesCreate = ({ toggleHideCreateForm }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    gender: "",
    email: "",
    emp_id: "",
    dept_id: "",
    designation_id: "",
    basic_salary: "",
    role_id: "",
    contract_date: "",
    contract_end: "",
    office_shift: "",
    role_description: "",
    leave_categories: "",
    profile_picture: null, // Added for profile picture
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [roles, setRoles] = useState([]);

  // Fetch department and designation data
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchDepartments = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/department-list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setDepartments(data.data);
        } else {
          console.error("Failed to fetch departments:", data.message);
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    const fetchDesignations = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/designation-list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setDesignations(data.data);
        } else {
          console.error("Failed to fetch designations:", data.message);
        }
      } catch (error) {
        console.error("Error fetching designations:", error);
      }
    };

    const fetchRoles = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/roles-list`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          setRoles(data.data);
        } else {
          console.error("Failed to fetch Roles:", data.message);
        }
      } catch (error) {
        console.error("Error fetching Roles:", error);
      }
    };

    fetchDepartments();
    fetchDesignations();
    fetchRoles();
  }, []);

  // Handle change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_picture" && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const newErrors = [];

    // Validate form fields
    if (!formData.first_name) newErrors.push("First Name is required.");
    if (!formData.last_name) newErrors.push("Last Name is required.");
    if (!formData.email) newErrors.push("Email is required.");
    if (!formData.dept_id) newErrors.push("Department is required.");
    if (!formData.designation_id) newErrors.push("Designation is required.");

    // If there are validation errors, show them
    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });

      const apiUrl = import.meta.env.VITE_API_URL;

      fetch(`${apiUrl}/create-employee`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: payload,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            Swal.fire({
              title: "Success!",
              text: "Employee created successfully!",
              icon: "success",
              confirmButtonText: "Ok",
            }).then(() => {
              // Reload the page after success
              window.location.reload();
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: data.message || "Failed to create employee.",
              icon: "error",
              confirmButtonText: "Close",
            });
          }
        })
        .catch((error) => {
          console.error("Error creating employee:", error);
          Swal.fire({
            title: "Error!",
            text: "An unexpected error occurred.",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    }
  };

  const handleReset = () => {
    setFormData({
      first_name: "",
      last_name: "",
      phone_number: "",
      gender: "",
      email: "",
      emp_id: "",
      dept_id: "",
      designation_id: "",
      basic_salary: "",
      role_id: "",
      contract_date: "",
      contract_end: "",
      office_shift: "",
      role_description: "",
      leave_categories: "",
      profile_picture: null,
    });
    setErrors([]);
    setSuccessMessage("");
  };

  return (
    <div className="container mx-4 my-8 max-w-6xl rounded-lg bg-white p-8 shadow-md">
      {/* Title */}
      <div className="mb-4 flex items-center justify-between">
        <h6 className="text-lg font-semibold">Add New Employee</h6>
        <button
          onClick={toggleHideCreateForm}
          className="rounded bg-primary px-4 py-1 text-white hover:bg-indigo-700"
        >
          <FontAwesomeIcon icon={faMinus} />
          <span>Hide</span>
        </button>
      </div>
      <hr className="mb-4" />

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-700">
          {successMessage}
        </div>
      )}

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
          <ul>
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        encType="multipart/form-data"
      >
        {/* First Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Employee ID */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Employee ID (If Existing)
          </label>
          <input
            type="text"
            name="emp_id"
            value={formData.emp_id}
            onChange={handleChange}
            placeholder="Enter Existing Employee ID"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Gender Dropdown */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>
              {" "}
              Select gender{" "}
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Department Dropdown */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Department <span className="text-red-500">*</span>
          </label>
          <select
            name="dept_id"
            value={formData.dept_id}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>
              Select a department
            </option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Designation Dropdown */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Designation <span className="text-red-500">*</span>
          </label>
          <select
            name="designation_id"
            value={formData.designation_id}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>
              Select a designation
            </option>
            {designations.map((desg) => (
              <option key={desg.id} value={desg.id}>
                {desg.name}
              </option>
            ))}
          </select>
        </div>

        {/* Basic Salary Section */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Basic Salary <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="basic_salary"
            value={formData.basic_salary}
            onChange={handleChange}
            placeholder="Enter basic Salary"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Role Dropdown */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            name="role_id"
            value={formData.role_id}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>
              Select a Role
            </option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Contract Date */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Contract Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="contract_date"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.contract_date || ""}
            onChange={handleChange}
          />
        </div>

        {/* Contract End */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Contract End
          </label>
          <input
            type="date"
            name="contract_end"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.contract_end || ""}
            onChange={handleChange}
          />
        </div>

        {/* Office Shift */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Office Shift<span className="text-red-500">*</span>
          </label>
          <select
            name="office_shift"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.office_shift || ""}
            onChange={handleChange}
          >
            <option value="">Select office shift</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        {/* Leave Categories */}
        <div className="col-span-2">
          <label className="block font-medium text-gray-700">
            Leave Categories
          </label>
          <textarea
            rows="3"
            name="leave_categories"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.leave_categories || ""}
            onChange={handleChange}
          />
        </div>

        {/* Role Description */}
        <div className="col-span-2">
          <label className="block font-medium text-gray-700">
            Role Description
          </label>
          <textarea
            rows="4"
            name="role_description"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            value={formData.role_description || ""}
            onChange={handleChange}
          />
        </div>

        {/* Profile Picture Upload */}
        <div className="col-span-2 flex flex-col">
          <label className="mb-2 block font-medium text-gray-600">
            Profile Picture
          </label>
          <input
            type="file"
            name="profile_picture"
            accept="image/*"
            onChange={handleChange}
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formData.profile_picture && (
            <div className="mt-4 h-32 w-32">
              <img
                src={URL.createObjectURL(formData.profile_picture)}
                alt="Profile Preview"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Form Buttons */}
        <div className="col-span-2 flex justify-end gap-4">
          <button
            type="reset"
            onClick={handleReset}
            className="rounded bg-gray-300 px-6 py-2 text-gray-800 hover:bg-gray-400"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded bg-primary px-6 py-2 text-white hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeesCreate;
