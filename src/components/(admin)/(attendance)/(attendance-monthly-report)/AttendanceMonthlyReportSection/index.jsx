import { useState } from "react";

const AttendanceMonthlyReportSection = () => {
  const [employee, setEmployee] = useState("");
  const [month, setMonth] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log(`Employee: ${employee}, Month: ${month}`);
  };

  return (
    <div className="mx-4 my-6 min-h-screen">
      <div className="min-w-3xl rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-xl font-semibold text-gray-700">
          Attendance Monthly Report
        </h1>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex-1">
            <label
              htmlFor="employee"
              className="block text-sm font-medium text-gray-600"
            >
              Employee
            </label>
            <select
              id="employee"
              value={employee}
              onChange={(e) => setEmployee(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select an Employee</option>
              <option value="Hassan Mahmud">Hassan Mahmud</option>
              <option value="Shohel Rana">Shohel Rana</option>
              <option value="Arefin Piash">Arefin Piash</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="month"
              className="block text-sm font-medium text-gray-600"
            >
              Select Month
            </label>
            <input
              type="month"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={handleSearch}
              className="rounded-md bg-primary px-6 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMonthlyReportSection;
