import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CareerPostsList = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Sample career post data
  const data = [
    {
      id: 1,
      jobTitle: "Software Engineer",
      jobDescription: "Develop web applications.",
      salary: "80,000",
      experience: "3+ years",
      education: "Bachelor's in Computer Science",
      deadline: "2025-01-15",
      responsibility: "Write clean, scalable code.",
      requirements: "Proficient in React and Node.js.",
      whatWeOffer: "remote work options.",
    },
    {
      id: 1,
      jobTitle: "IT Engineer",
      jobDescription: "Develop web applications.",
      salary: "20,000",
      experience: "2 years",
      education: "Bachelor's in Computer Science",
      deadline: "2025-01-15",
      responsibility: "Write clean, scalable code.",
      requirements: "Proficient Troubleshoot and resolve hardware, software.",
      whatWeOffer: "remote work options.",
    },
  ];

  // Filtered and paginated data
  const filteredData = data.filter(
    (item) =>
      item.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jobDescription.toLowerCase().includes(searchTerm.toLowerCase()),
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

  return (
    <div className="mx-4 my-6 min-h-screen">
      <div className="rounded-md bg-white p-6 shadow-md">
        {/* Header */}
        <h6 className="mb-4 text-lg font-semibold">Career Posts List</h6>
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
        <div className="w-full overflow-x-auto p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="border-b px-4 py-2 text-left">ID</th>
                <th className="min-w-40 border-b px-4 py-2 text-left">
                  Job Title
                </th>
                <th className="max-w-20 whitespace-nowrap border-b px-4 py-2 text-left">
                  Job Description
                </th>
                <th className="max-w-20 border-b px-4 py-2 text-left">
                  Salary
                </th>
                <th className="max-w-20 border-b px-4 py-2 text-left">
                  Experience
                </th>
                <th className="max-w-20 border-b px-4 py-2 text-left">
                  Education
                </th>
                <th className="max-w-20 border-b px-4 py-2 text-left">
                  Deadline
                </th>
                <th className="max-w-24 border-b px-4 py-2 text-left">
                  Responsibility
                </th>
                <th className="max-w-24 border-b px-4 py-2 text-left">
                  Requirements
                </th>
                <th className="max-w-20 border-b px-4 py-2 text-left">
                  What We Offer
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item) => (
                <tr
                  key={item.id}
                  className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                >
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="relative max-w-[150px] px-4 py-2">
                    <div className="group relative flex h-[50px] items-center space-x-4">
                      <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        <span>{item.jobTitle}</span>
                      </div>

                      {/* Action Buttons (shown on hover) */}
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
                  <td className="px-4 py-2">{item.jobDescription}</td>
                  <td className="px-4 py-2">{item.salary}</td>
                  <td className="px-4 py-2">{item.experience}</td>
                  <td className="px-4 py-2">{item.education}</td>
                  <td className="px-4 py-2">{item.deadline}</td>
                  <td className="px-4 py-2">{item.responsibility}</td>
                  <td className="px-4 py-2">{item.requirements}</td>
                  <td className="px-4 py-2">{item.whatWeOffer}</td>
                </tr>
              ))}
              {paginatedData.length === 0 && (
                <tr>
                  <td colSpan="10" className="py-4 text-center text-gray-500">
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

export default CareerPostsList;
