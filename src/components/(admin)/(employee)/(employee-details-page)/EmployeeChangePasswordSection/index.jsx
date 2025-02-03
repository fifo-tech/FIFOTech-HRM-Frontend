import { faEye, faEyeSlash, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2 for better alerts

const role_id = localStorage.getItem("role_id");
const token = localStorage.getItem("token");
const apiUrl = import.meta.env.VITE_API_URL;

const EmployeeChangePasswordSection = ({ id }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    repeat: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !repeatPassword || (role_id == 3 && !currentPassword)) {
      Swal.fire({
        title: "Warning!",
        text: "Please fill in all required fields.",
        icon: "warning",
      });
      return;
    }

    if (newPassword !== repeatPassword) {
      Swal.fire({
        title: "Error!",
        text: "New password and repeated password do not match.",
        icon: "error",
      });
      return;
    }

    const payload = {
      id,
      password: newPassword,
      password_confirmation: repeatPassword,
      ...(role_id == 3 && { current_password: currentPassword }),
    };

    try {
      const response = await fetch(`${apiUrl}/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: data.message || "Password successfully changed!",
          icon: "success",
        });
        setCurrentPassword("");
        setNewPassword("");
        setRepeatPassword("");
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Failed to change password. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while changing the password. Please try again.",
        icon: "error",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div className="my-6 min-h-screen bg-gray-100">
      <div className="mx-4 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4 rounded-lg bg-yellow-100 p-4 text-yellow-800">
          <p className="text-sm font-semibold">Alert!</p>
          <p className="text-sm">
            Don’t share this password with anyone. The password should be
            changed at least once in 3 months.
          </p>
        </div>

        <h1 className="mb-6 flex items-center text-xl font-bold text-gray-800">
          <FontAwesomeIcon
            icon={faKey}
            className="mr-2 text-primary"
            aria-hidden="true"
          />
          Change Password
        </h1>

        <form onSubmit={handleSubmit}>
          {role_id == 3 && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">
                Current Password <span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2">
                <input
                  type={showPassword.current ? "text" : "password"}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter your current password"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FontAwesomeIcon
                  icon={showPassword.current ? faEyeSlash : faEye}
                  className="absolute right-3 top-3 cursor-pointer text-gray-400"
                  onClick={() => togglePasswordVisibility("current")}
                />
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword.new ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={showPassword.new ? faEyeSlash : faEye}
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                onClick={() => togglePasswordVisibility("new")}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Repeat New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type={showPassword.repeat ? "text" : "password"}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat your new password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={showPassword.repeat ? faEyeSlash : faEye}
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
                onClick={() => togglePasswordVisibility("repeat")}
              />
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeChangePasswordSection;
