import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const LeaveTypeListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const leaveTypes = [
    { id: 1, type: "Annual Leave", daysPerYear: 20, requiresApproval: "Yes" },
    { id: 2, type: "Sick Leave", daysPerYear: 15, requiresApproval: "Yes" },
    { id: 3, type: "Maternity Leave", daysPerYear: 90, requiresApproval: "No" },
    { id: 4, type: "Paternity Leave", daysPerYear: 14, requiresApproval: "No" },
    { id: 5, type: "Study Leave", daysPerYear: 30, requiresApproval: "Yes" },
  ];

  const filteredLeaveTypes = leaveTypes.filter((leaveType) =>
    leaveType.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalRecords = filteredLeaveTypes.length;
  const totalPages = Math.ceil(totalRecords / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentLeaveTypes = filteredLeaveTypes.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mx-4 my-6 max-w-4xl rounded-sm border bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-600">
          List All Leave Types
        </h1>
      </div>

      <hr className="mb-6 border-gray-300" />

      {/* Controls */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <label htmlFor="entries" className="mr-2 text-sm text-gray-600">
            Show
          </label>
          <select
            id="entries"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="ml-1 text-sm text-gray-600">entries</span>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border-b border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-medium">
              LEAVE TYPE
            </th>
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-medium">
              DAYS PER YEAR
            </th>
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-medium">
              REQUIRES APPROVAL
            </th>
          </tr>
        </thead>
        <tbody>
          {currentLeaveTypes.map((leaveType) => (
            <tr
              key={leaveType.id}
              className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
            >
              <td className="relative min-w-40 px-4 py-2">
                <div className="group relative flex h-[40px] items-center">
                  <span className="truncate group-hover:hidden">
                    {leaveType.type}
                  </span>

                  <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                    <button
                      className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>

                    <button
                      className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </div>
              </td>

              <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">
                {leaveType.daysPerYear}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">
                {leaveType.requiresApproval}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, totalRecords)} of{" "}
          {totalRecords} records
        </p>
        <div>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="rounded-l-md bg-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="bg-primary px-4 py-2 text-sm">{currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="rounded-r-md bg-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveTypeListSection;
