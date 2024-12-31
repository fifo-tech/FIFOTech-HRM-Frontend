import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ComplaintsListSection = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      category: "Service",
      subject: "Delayed response",
      details: "The response to my complaint was delayed by two weeks.",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.details.toLowerCase().includes(searchTerm.toLowerCase()),
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
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-lg font-semibold">Complaint/Suggestion List</h6>
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
              <option value={100}>100</option>
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
                <th className="border-b border-t px-4 py-2 text-left">
                  CATEGORY
                </th>
                <th className="border-b border-t px-4 py-2 text-left">
                  SUBJECT
                </th>
                <th className="border-b border-t px-4 py-2 text-left">
                  DETAILS
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="h-[50px] border-b border-gray-300 transition duration-150 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                >
                  <td className="relative min-w-[200px] px-4 py-2">
                    <div className="group relative flex h-[50px] items-center">
                      <span className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        {item.category}
                      </span>
                      <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                        <button
                          className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                          title="View"
                        >
                          <FontAwesomeIcon icon={faEye} />
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

                  <td className="min-w-28 px-4 py-2">{item.subject}</td>
                  <td className="min-w-32 px-4 py-2">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">
            Showing {Math.min(entries, paginatedData.length)} to{" "}
            {paginatedData.length} of {filteredData.length} records
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

export default ComplaintsListSection;
