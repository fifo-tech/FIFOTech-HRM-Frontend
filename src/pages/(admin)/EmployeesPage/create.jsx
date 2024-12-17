import { useState } from "react";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    employee_code: "",
    department: "",
    designation: "",
    role: "",
    gender: "male",
    blood_group: "",
    nid: "",
    contract_number: "",
    dob: "",
    doj: "",
    email: "",
    image: null,
    religion: "",
    status: "1",
  });

  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]); // Reset errors

    // Dummy validation
    const newErrors = [];
    if (!formData.first_name) newErrors.push("First Name is required.");
    if (!formData.last_name) newErrors.push("Last Name is required.");
    if (!formData.email) newErrors.push("Email is required.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form Data Submitted:", formData);
      setSuccessMessage("Employee created successfully!");
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-3xl rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-6 text-2xl font-semibold">Create Employee</h1>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
          {successMessage}
        </div>
      )}

      {/* Error List */}
      {errors.length > 0 && (
        <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
          <ol className="ml-5 list-disc">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ol>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="mb-1 block font-medium">First Name</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full rounded border p-2 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-1 block font-medium">Last Name</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full rounded border p-2 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Employee ID */}
        <div>
          <label className="mb-1 block font-medium">Employee ID</label>
          <input
            type="text"
            name="employee_code"
            value={formData.employee_code}
            onChange={handleChange}
            className="w-full rounded border p-2 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="mb-1 block font-medium">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full rounded border p-2 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Gender */}
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

        {/* Date of Birth */}
        <div>
          <label className="mb-1 block font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="mb-1 block font-medium">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="mb-1 block font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded border p-2"
          >
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded bg-blue-500 py-2 font-medium text-white hover:bg-blue-600"
        >
          Save Employee
        </button>
      </form>
    </div>
  );
};

export default CreateEmployee;
