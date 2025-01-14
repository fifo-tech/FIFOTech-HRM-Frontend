import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { createEmployee } from "@/models/Employee/CreateEmployee";

const EmployeesCreate = ({ toggleHideCreateForm }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    gender: "",
    email: "",
    dept_id: "",
    designation_id: "",
    profile_picture: null, // Added for profile picture
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);

  // Fetch department and designation data
  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchDepartments = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/department-list", {
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
        const response = await fetch("http://localhost:8000/api/designation-list", {
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

    fetchDepartments();
    fetchDesignations();
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

      fetch("http://localhost:8000/api/create-employee", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: payload,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSuccessMessage("Employee created successfully!");
            setFormData({
              first_name: "",
              last_name: "",
              phone_number: "",
              gender: "",
              email: "",
              dept_id: "",
              designation_id: "",
              profile_picture: null,
            });
          } else {
            setErrors([data.message || "Failed to create employee."]);
          }
        })
        .catch((error) => {
          console.error("Error creating employee:", error);
          setErrors(["An unexpected error occurred."]);
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
      dept_id: "",
      designation_id: "",
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
            <option value="" disabled> Select gender </option>
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
            <option value="" disabled>Select a department</option>
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
            <option value="" disabled>Select a designation</option>
            {designations.map((desg) => (
              <option key={desg.id} value={desg.id}>
                {desg.name}
              </option>
            ))}
          </select>
        </div>

        {/* Profile Picture Upload */}
        <div className="col-span-2 flex flex-col ">
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
