import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const EmployeesRolesAndPrivileges = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    {
      roleName: "Admin",
      menuPermission: "Full Access",
      addedDate: "2024-12-30",
    },
  ];

  const filteredData = data.filter((item) =>
    item.roleName.toLowerCase().includes(searchTerm.toLowerCase()),
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
          <h6 className="text-xl font-semibold">List All Roles</h6>
          <button className="rounded bg-primary px-3 py-1 text-white hover:bg-indigo-600">
            <FontAwesomeIcon icon={faPlus} /> Add New
          </button>
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
                  ROLE NAME
                </th>
                <th className="border-b border-t px-4 py-2 text-left">
                  MENU PERMISSION
                </th>
                <th className="border-b border-t px-4 py-2 text-left">
                  ADDED DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                >
                  <td className="relative min-w-[150px] px-4 py-2">
                    <div className="group relative flex h-[50px] items-center space-x-4">
                      <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        <span>{item.roleName}</span>
                      </div>
                      <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                        <Link
                          to={`/roles/${index}/edit`}
                          className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <button
                          onClick={() => console.log("Delete", index)}
                          className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.menuPermission}</td>
                  <td className="px-4 py-2">{item.addedDate}</td>
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

export default EmployeesRolesAndPrivileges;
