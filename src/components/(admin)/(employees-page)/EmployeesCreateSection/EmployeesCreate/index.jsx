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
    <div className="container relative mx-2 mt-8 max-w-6xl rounded-md bg-white p-6 shadow-md">
      {/* Hide Button */}
      <button
        className="absolute right-4 top-4 rounded bg-primary px-3 py-1 text-sm font-medium text-white hover:bg-gray-300"
        onClick={() => console.log("Hide form")}
      >
        - Hide
      </button>

      <h6 className="mb-6 text-xl font-semibold">Add New Employee</h6>

      {successMessage && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          {successMessage}
        </div>
      )}

      {errors.length > 0 && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
          <ol className="ml-5 list-disc">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ol>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* First Name & Last Name */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block font-medium">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full rounded border p-2 focus:ring focus:ring-violet-600"
                required
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full rounded border p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>
          </div>
        </div>

        {/* Employee ID, Contact Number, Gender */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block font-medium">
                Employee ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="employee_code"
                value={formData.employee_code}
                onChange={handleChange}
                className="w-full rounded border p-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Contact Number</label>
              <input
                type="text"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded border p-2"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Email & Username */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        </div>

        {/* Password, Office Shift, Role */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Office Shift</label>
              <input
                type="text"
                name="office_shift"
                value={formData.office_shift}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        </div>

        {/* Department & Designation */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block font-medium">Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        </div>

        {/* Basic Salary, Hourly Rate, Payslip Type */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="mb-1 block font-medium">Basic Salary</label>
              <input
                type="number"
                name="basic_salary"
                value={formData.basic_salary}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Hourly Rate</label>
              <input
                type="number"
                name="hourly_rate"
                value={formData.hourly_rate}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
            <div>
              <label className="mb-1 block font-medium">Payslip Type</label>
              <input
                type="text"
                name="payslip_type"
                value={formData.payslip_type}
                onChange={handleChange}
                className="w-full rounded border p-2"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-1 flex justify-end space-x-4 sm:col-span-2 lg:col-span-3">
          <button
            type="button"
            onClick={handleReset}
            className="rounded bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeesCreate;
