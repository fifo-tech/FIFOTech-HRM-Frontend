import { useState } from "react";

const ManualAttendanceFilterSection = () => {
  // State for form fields
  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");

  const handleFilter = () => {
    // Logic to filter attendance
    console.log("Filter clicked:", { date, employee });
  };

  return (
    <div className="mx-4 my-6 max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Filter Attendance</h2>
      <hr className="mb-4" />
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Date
        </label>
        <input
          type="date"
          id="date"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="employee"
          className="block text-sm font-medium text-gray-700"
        >
          Employee
        </label>
        <input
          type="text"
          id="employee"
          placeholder="Enter employee name"
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />
      </div>
      <div className="text-right">
        <button
          onClick={handleFilter}
          className="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ManualAttendanceFilterSection;
