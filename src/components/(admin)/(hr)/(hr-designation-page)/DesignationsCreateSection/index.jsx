import { useState } from "react";

const DesignationsCreateSection = () => {
  const [department, setDepartment] = useState("");
  const [designationName, setDesignationName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!department || !designationName) {
      alert("Please fill all required fields!");
      return;
    }

    // Form submission logic
    const newDesignation = {
      department,
      designationName,
      description,
    };
    console.log(newDesignation);
    // Reset form
    setDepartment("");
    setDesignationName("");
    setDescription("");
  };

  return (
    <div className="mx-4 my-6 max-w-4xl rounded-sm bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Add New Designation</h2>

      {/* Horizontal line */}
      <hr className="border-t-1 mb-6 border-gray-300" />

      <form onSubmit={handleSubmit}>
        {/* Department Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Department <span className="text-red-500">*</span>
          </label>
          <select
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          >
            <option value="">Select Department</option>
            <option value="HR">Human Resources</option>
            <option value="IT">Information Technology</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Designation Name Input */}
        <div className="mb-4">
          <label
            htmlFor="designationName"
            className="block text-sm font-medium text-gray-700"
          >
            Designation Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="designationName"
            name="designationName"
            value={designationName}
            onChange={(e) => setDesignationName(e.target.value)}
            placeholder="Designation Name"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {/* Description Textarea */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            placeholder="Enter description"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-primary px-6 py-2 font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DesignationsCreateSection;
