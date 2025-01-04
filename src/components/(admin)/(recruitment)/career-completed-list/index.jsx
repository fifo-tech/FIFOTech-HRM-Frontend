import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CareerCompletedList = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample career completed data
  const data = [
    {
      id: 1,
      jobTitle: "Customer Service Representative",
      salary: "20,000",
      experience: "2 years",
      education: "Bachelor's in Business Administration",
      deadline: "2025-01-01",
    },
    {
      id: 1,
      jobTitle: "Senior Developer",
      salary: "80,000",
      experience: "3+ years",
      education: "Bachelor's in Computer Science",
      deadline: "2025-01-01",
    },
  ];

  // Filtered and paginated data
  const filteredData = data.filter(
    (item) =>
      item.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.experience.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.education.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.deadline.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / entries);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleDelete = (id) => {
    alert(`Delete job with ID: ${id}`);
  };

  return (
    <div className="mx-4 my-6 min-h-screen">
      <div className="rounded-md bg-white p-6 shadow-md">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-lg font-semibold">Career Completed List</h6>
        </div>
        <hr className="mb-4" />

        {/* Controls */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <label htmlFor="entries" className="text-sm font-medium">
              Show
            </label>
            <select
              id="entries"
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="ml-2 rounded-md border px-2 py-1 text-sm"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span className="ml-2 text-sm">entries</span>
          </div>
          <div>
            <label htmlFor="search" className="mr-2 text-sm font-medium">
              Search:
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md border px-3 py-1 text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="border-b px-4 py-2 text-left">ID</th>
                <th className="min-w-72 border-b px-4 py-2 text-left">
                  Job Title
                </th>
                <th className="border-b px-4 py-2 text-left">Salary</th>
                <th className="border-b px-4 py-2 text-left">Experience</th>
                <th className="border-b px-4 py-2 text-left">Education</th>
                <th className="border-b px-4 py-2 text-left">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr
                  key={item.id}
                  className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                >
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="relative min-w-[240px] px-4 py-2">
                    <div className="group relative flex h-[50px] items-center space-x-4">
                      <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        <div className="ml-4 flex flex-col truncate">
                          <span className="truncate whitespace-nowrap">
                            {item.jobTitle}
                          </span>
                        </div>
                      </div>

                      {/* Action Button (shown on hover) */}
                      <div className="absolute inset-0 hidden items-center justify-center group-hover:flex">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.salary}</td>
                  <td className="px-4 py-2">{item.experience}</td>
                  <td className="px-4 py-2">{item.education}</td>
                  <td className="px-4 py-2">{item.deadline}</td>
                </tr>
              ))}
              {paginatedData.length === 0 && (
                <tr>
                  <td colSpan="6" className="py-4 text-center text-gray-500">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">
            Showing {Math.min(entries, paginatedData.length)} to{" "}
            {filteredData.length} of {filteredData.length} records
          </p>
          <div className="flex items-center">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`rounded-l-md px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>
            <span className="bg-primary px-4 py-2 text-sm text-white">
              {currentPage}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`rounded-r-md px-4 py-2 text-sm font-medium ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCompletedList;
