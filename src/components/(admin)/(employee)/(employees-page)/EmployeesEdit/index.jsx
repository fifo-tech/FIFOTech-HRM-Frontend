import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
    profile_picture: null,
  });

  const [preview, setPreview] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
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
            profile_picture: null, // Profile picture will be handled separately
          });
          setPreview(employee.profile_picture || null);
          setDepartments(data.data.departments || []);
          setDesignations(data.data.designations || []);
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
    setSuccessMessage("");

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
      if (data.success) {
        setSuccessMessage("Employee updated successfully!");
        setTimeout(() => navigate("/dashboard/employees"), 2000); // Redirect after 2 seconds
      } else {
        setSuccessMessage(data.message || "Failed to update employee.");
      }
    } catch (error) {
      setSuccessMessage("Error updating employee.");
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

        {/* Dropdowns for Department and Designation */}
        {[
          ["Department", "dept_id", departments],
          ["Designation", "designation_id", designations],
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
