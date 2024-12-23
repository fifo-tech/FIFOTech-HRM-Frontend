import { useState } from "react";

const DepartmentCreateSection = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentHead, setDepartmentHead] = useState("");

  const departmentHeads = [
    "Rakib Hassan",
    "Arefin Piash",
    "Sifat Rahman ",
    "Rofiqul Islam",
    // Add more options as needed
  ];

  const handleSave = () => {
    console.log("New Department Created:", { departmentName, departmentHead });
    // Add your save logic here (e.g., API call)
  };

  return (
    <div className="mx-4 my-6 flex max-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h6 className="mb-4 text-xl font-semibold text-gray-700">
          Add New Department
        </h6>
        <hr className="my-4 border-gray-300" />
        {/* Department Name Input */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="departmentName"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="departmentName"
            type="text"
            placeholder="Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Department Head Dropdown */}
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="departmentHead"
          >
            Department Head
          </label>
          <select
            id="departmentHead"
            value={departmentHead}
            onChange={(e) => setDepartmentHead(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Department Head
            </option>
            {departmentHeads.map((head) => (
              <option key={head} value={head}>
                {head}
              </option>
            ))}
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-all hover:bg-violet-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCreateSection;
