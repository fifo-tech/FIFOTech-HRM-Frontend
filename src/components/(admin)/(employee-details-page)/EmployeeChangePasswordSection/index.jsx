import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeeChangePasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !repeatPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (newPassword !== repeatPassword) {
      alert("New password and repeated password do not match.");
      return;
    }

    alert("Password successfully changed!");
  };

  return (
    <div className="my-6 min-h-screen bg-gray-100">
      <div className="mx-4 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        {/* Alert */}
        <div className="mb-4 rounded-lg bg-yellow-100 p-4 text-yellow-800">
          <p className="text-sm font-semibold">Alert!</p>
          <p className="text-sm">
            Don’t share this password with anyone. The password should be
            changed at least once in 3 months.
          </p>
        </div>

        {/* Title */}
        <h1 className="mb-6 flex items-center text-2xl font-bold text-gray-800">
          <FontAwesomeIcon
            icon={faKey}
            className="mr-2 text-primary"
            aria-hidden="true"
          />
          Change Password
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Current Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Current Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter your current password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={faKey}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* New Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={faKey}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Repeat New Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Repeat New Password <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                placeholder="Repeat your new password"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={faKey}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Change Password Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
