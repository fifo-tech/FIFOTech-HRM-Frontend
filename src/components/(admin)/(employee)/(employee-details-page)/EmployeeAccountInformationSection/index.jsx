import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeeAccountInformationSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (username.trim() && email.trim()) {
      alert("Account information updated!");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="mx-4 my-6 min-h-screen bg-gray-100">
      <div className="max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        {/* Title */}
        <h1 className="mb-2 flex items-center text-xl text-gray-600">
          <FontAwesomeIcon
            icon={faUser}
            className="mr-2 text-primary"
            aria-hidden="true"
          />
          Account Information
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Change your account information
        </p>

        {/* Form */}
        <form onSubmit={handleSave}>
          {/* Username */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Username <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Account Email <span className="text-red-500">*</span>
            </label>
            <div className="relative mt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute right-3 top-3 text-gray-400"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeAccountInformationSection;
