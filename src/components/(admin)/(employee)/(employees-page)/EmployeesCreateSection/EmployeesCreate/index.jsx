import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeesCreate = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    employee_code: "",
    contact_number: "",
    gender: "male",
    email: "",
    username: "",
    password: "",
    office_shift: "",
    role: "",
    department: "",
    designation: "",
    basic_salary: "",
    hourly_rate: "",
    payslip_type: "",
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const newErrors = [];
    if (!formData.first_name) newErrors.push("First Name is required.");
    if (!formData.last_name) newErrors.push("Last Name is required.");
    if (!formData.email) newErrors.push("Email is required.");
    if (!formData.employee_code) newErrors.push("Employee ID is required.");
    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data Submitted:", formData);
      setSuccessMessage("Employee created successfully!");
    }
  };

  const handleReset = () => {
    setFormData({
      first_name: "",
      last_name: "",
      employee_code: "",
      contact_number: "",
      gender: "male",
      email: "",
      username: "",
      password: "",
      office_shift: "",
      role: "",
      department: "",
      designation: "",
      basic_salary: "",
      hourly_rate: "",
      payslip_type: "",
    });
    setErrors([]);
    setSuccessMessage("");
  };

  return (
    <div className="container mx-4 my-8 max-w-4xl rounded-lg bg-white p-8 shadow-md">
      {/* Title */}
      <h6 className="mb-6 text-center text-xl font-semibold text-gray-700">
        Add New Employee
      </h6>
      <div className="mb-4 flex justify-end">
        <button
          // onClick={toggleCreateForm} // Call the passed function to toggle the form visibility
          className="flex items-center space-x-1 rounded bg-primary px-3 py-2 text-white hover:bg-blue-600"
        >
          <FontAwesomeIcon icon={faMinus} />
          <span>Hide</span>
        </button>
      </div>

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

        {/* Employee Code */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Employee ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="employee_code"
            value={formData.employee_code}
            onChange={handleChange}
            placeholder="Enter employee ID"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Contact Number
          </label>
          <input
            type="text"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleChange}
            placeholder="Enter contact number"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
            placeholder="Enter email"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Department */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter department"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Designation */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Enter designation"
            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex justify-end gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 shadow-md hover:bg-gray-200"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-sm text-white shadow-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeesCreate;
