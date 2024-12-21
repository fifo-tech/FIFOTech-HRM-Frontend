import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeeTimesheetAgendaSection = () => {
  const [activeTab, setActiveTab] = useState("Leave Request");
  const [entries, setEntries] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    "Leave Request",
    "Expense Claim",
    "Request Loan",
    "Travel Request",
    "Advance Salary",
    "Overtime Request",
    "Awards",
    "Projects",
    "Tasks",
    "Payslip History",
  ];

  const leaveData = [
    // Sample data for leave requests
    {
      employee: "Hassan Mahmud ",
      type: "Sick Leave",
      duration: "2024-12-20 to 2024-12-22",
      days: 3,
      appliedOn: "2024-12-18",
    },
    {
      employee: "Rakib Hassan ",
      type: "Annual Leave",
      duration: "2024-12-25 to 2024-12-30",
      days: 6,
      appliedOn: "2024-12-15",
    },
  ];

  const filteredLeaves = leaveData.filter((leave) =>
    leave.employee.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredLeaves.length / entries);
  const displayedLeaves = filteredLeaves.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  return (
    <div className="mx-auto my-4 max-w-6xl rounded-lg bg-white p-6 shadow">
      {/* Timesheet Agenda Section */}
      <div className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-gray-800">
          <FontAwesomeIcon icon={faCalendar} className="mr-2 text-primary" />
          Timesheet Agenda
        </h2>
        <hr className="my-4" />

        {/* Tab Menu */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`rounded px-4 py-2 ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Leave Request" && (
          <div>
            {/* Controls */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <label htmlFor="entries" className="mr-2 text-gray-600">
                  Show entries:
                </label>
                <select
                  id="entries"
                  className="rounded border px-2 py-1 text-gray-700"
                  value={entries}
                  onChange={(e) => setEntries(Number(e.target.value))}
                >
                  {[5, 10, 15, 20].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  className="rounded border px-4 py-2 text-gray-700"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Leave Request Table */}
            <table className="w-full table-auto border bg-white shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left text-gray-700">
                    EMPLOYEE
                  </th>
                  <th className="border px-4 py-2 text-left text-gray-700">
                    LEAVE TYPE
                  </th>
                  <th className="border px-4 py-2 text-left text-gray-700">
                    LEAVE DURATION
                  </th>
                  <th className="border px-4 py-2 text-left text-gray-700">
                    DAYS
                  </th>
                  <th className="border px-4 py-2 text-left text-gray-700">
                    APPLIED ON
                  </th>
                </tr>
              </thead>
              <tbody>
                {displayedLeaves.map((leave, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-gray-600">
                      {leave.employee}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{leave.type}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {leave.duration}
                    </td>
                    <td className="px-4 py-2 text-gray-600">{leave.days}</td>
                    <td className="px-4 py-2 text-gray-600">
                      {leave.appliedOn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="mt-4 flex justify-end">
              <button
                className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
              <span className="mx-4 text-gray-600">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeTimesheetAgendaSection;
