import { useState } from "react";

const LeaveTypeCreateSection = () => {
  const [leaveType, setLeaveType] = useState("");
  const [daysPerYear, setDaysPerYear] = useState("");
  const [requiresApproval, setRequiresApproval] = useState("Yes");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leaveType || !daysPerYear) {
      alert("Please fill all required fields!");
      return;
    }

    // Form submission logic
    const newLeaveType = {
      leaveType,
      daysPerYear,
      requiresApproval,
    };
    console.log(newLeaveType);

    // Reset form
    setLeaveType("");
    setDaysPerYear("");
    setRequiresApproval("Yes");
  };

  return (
    <div className="mx-4 my-6 max-w-4xl rounded-sm bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Add New Leave Type</h2>

      {/* Horizontal line */}
      <hr className="border-t-1 mb-6 border-gray-300" />

      <form onSubmit={handleSubmit}>
        {/* Leave Type Input */}
        <div className="mb-4">
          <label
            htmlFor="leaveType"
            className="block text-sm font-medium text-gray-700"
          >
            Leave Type <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="leaveType"
            name="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            placeholder="Leave Type"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {/* Days Per Year Input */}
        <div className="mb-4">
          <label
            htmlFor="daysPerYear"
            className="block text-sm font-medium text-gray-700"
          >
            Days Per Year <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="daysPerYear"
            name="daysPerYear"
            value={daysPerYear}
            onChange={(e) => setDaysPerYear(e.target.value)}
            placeholder="Days Per Year"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          />
        </div>

        {/* Requires Approval Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="requiresApproval"
            className="block text-sm font-medium text-gray-700"
          >
            Requires Approval <span className="text-red-500">*</span>
          </label>
          <select
            id="requiresApproval"
            name="requiresApproval"
            value={requiresApproval}
            onChange={(e) => setRequiresApproval(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* Conditional Note */}
        {requiresApproval === "No" && (
          <div className="mt-2 text-sm text-gray-600">
            <p>
              <strong>Note:</strong> If you select{" "}
              <span className="text-red-500">No</span>, the leave will be
              automatically approved for this leave type.
            </p>
          </div>
        )}

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

export default LeaveTypeCreateSection;
