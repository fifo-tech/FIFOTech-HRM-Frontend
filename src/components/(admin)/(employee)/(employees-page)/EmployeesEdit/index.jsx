import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Navigation hook
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_num: "",
    gender: "",
    email: "",
    dept_id: "",
    designation_id: "",
    role_id: "",
    contract_date: "",
    contract_end: "",
    leave_categories: "",
    role_description: "",
    basic_salary: "",
    active_status: "",
    profile_picture: null,
  });

  const [preview, setPreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await fetch(`${apiUrl}/get-employee-details/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.success) {
          const employee = data.data.employee;
          setFormData({
            first_name: employee.first_name || "",
            last_name: employee.last_name || "",
            phone_num: employee.phone_num || "",
            gender: employee.gender || "",
            email: employee.email || "",
            dept_id: employee.dept_id || "",
            designation_id: employee.designation_id || "",
            role_id: employee.role_id || "",
            contract_date: employee.contract_date || "",
            contract_end: employee.contract_end || "",
            office_shift: employee.office_shift || "",
            leave_categories: employee.leave_categories || "",
            role_description: employee.role_description || "",
            basic_salary: employee.basic_salary || "",
            active_status: employee.active_status || "",
            profile_picture: null, // Profile picture will be handled separately
          });
          console.log(employee.active_status);
          setPreview(employee.profile_picture || null);
          setDepartments(data.data.departments || []);
          setDesignations(data.data.designations || []);
          setRoles(data.data.roles || []);
        } else {
          setSuccessMessage(
            data.message || "Failed to fetch employee details.",
          );
        }
      } catch (error) {
        setSuccessMessage("Error fetching employee details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile_picture" && files.length > 0) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, profile_picture: file }));

      // Preview the selected image
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch(`${apiUrl}/edit-employee/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        // Display success alert
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Employee updated successfully.",
          timer: 2000, // Auto-close after 2 seconds
          showConfirmButton: false,
        });

        // Redirect after 2 seconds
        setTimeout(() => navigate("/dashboard/employees"), 2000);
      } else {
        // Display error alert
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: data.message || "Failed to update employee.",
        });
      }
    } catch (error) {
      // Display error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error updating employee. Please try again later.",
      });
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-4 my-8 max-w-6xl rounded-lg bg-white p-8 shadow-md">
      <h6 className="text-lg font-semibold">Edit Employee</h6>
      <hr className="mb-4" />

      {successMessage && (
        <div className="mb-4 rounded-lg bg-green-100 p-4 text-green-700">
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {/* Form Fields */}
        {[
          ["First Name", "first_name"],
          ["Last Name", "last_name"],
          ["Phone Number", "phone_num"],
          ["Email", "email"],
        ].map(([label, name]) => (
          <div key={name}>
            <label className="mb-2 block font-medium text-gray-600">
              {label}
            </label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={`Enter ${label.toLowerCase()}`}
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
            />
          </div>
        ))}

        {/* Gender Dropdown */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
          >
            <option value="" disabled>
              Select gender
            </option>
            {["Male", "Female", "Other"].map((g) => (
              <option key={g} value={g}>
                {g}
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

        {/* Dropdowns for Department and Designation */}
        {[
          ["Department", "dept_id", departments],
          ["Designation", "designation_id", designations],
          ["Role", "role_id", roles],
        ].map(([label, name, options]) => (
          <div key={name}>
            <label className="mb-2 block font-medium text-gray-600">
              {label}
            </label>
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
            >
              <option value="" disabled>
                Select {label.toLowerCase()}
              </option>
              {options.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Active Status */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Active Status<span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            name="active_status"
            value={formData.active_status}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
          </select>
        </div>

        {/* Office Shift */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Office Shift<span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            name="office_shift"
            value={formData.office_shift || ""}
            onChange={handleChange}
          >
            <option value="">Select office shift</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        {/* Contract Date */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Contract Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            name="contract_date"
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
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            name="contract_end"
            value={formData.contract_end || ""}
            onChange={handleChange}
          />
        </div>

        {/* Leave Categories */}
        <div className="col-span-2">
          <label className="block font-medium text-gray-700">
            Leave Categories
          </label>
          <textarea
            rows="3"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            name="leave_categories"
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
            rows="5"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            name="role_description"
            value={formData.role_description || ""}
            onChange={handleChange}
          />
        </div>

        {/* Profile Picture */}
        <div>
          <label className="mb-2 block font-medium text-gray-600">
            Profile Picture
          </label>
          {preview && (
            <div className="mb-4">
              <img
                src={preview}
                alt="Profile Preview"
                className="h-32 w-32 rounded-full object-cover"
              />
            </div>
          )}
          <input
            type="file"
            name="profile_picture"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
          />
        </div>

        <div className="col-span-2 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="rounded bg-gray-300 px-6 py-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded bg-primary px-6 py-2 text-white"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeEdit;
