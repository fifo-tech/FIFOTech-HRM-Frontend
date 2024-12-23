import { useState } from "react";

const DepartmentsListSection = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const departments = [
    { id: 1, name: "HR", head: "Rakib Hassan", createdAt: "2023-01-01" },
    { id: 2, name: "Admin", head: "Sakib Hassan", createdAt: "2023-01-01" },
    // Add more mock data if needed
  ];

  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mx-4 mt-6 max-h-screen max-w-2xl bg-white p-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          List All Departments
        </h2>
      </div>
      <hr className="my-4 w-full border-gray-300" />

      {/* Controls */}
      <div className="mb-4 flex items-center justify-between">
        {/* Entries Dropdown */}
        <div className="flex items-center space-x-2">
          <label htmlFor="entries" className="text-sm text-gray-700">
            Show
          </label>
          <select
            id="entries"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span className="text-sm text-gray-700">entries</span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-b px-4 py-2">DEPARTMENT NAME</th>
              <th className="border-b px-4 py-2">DEPARTMENT HEAD</th>
              <th className="border-b px-4 py-2">CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.slice(0, entries).map((department) => (
              <tr key={department.id}>
                <td className="border-b px-4 py-2 text-center">
                  {department.name}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {department.head}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {department.createdAt}
                </td>
              </tr>
            ))}
            {filteredDepartments.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="border-b px-4 py-2 text-center text-gray-500"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        {/* Showing Records */}
        <p className="text-sm text-gray-700">
          Showing 1 to {filteredDepartments.slice(0, entries).length} of{" "}
          {filteredDepartments.length} records
        </p>

        {/* Pagination Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="rounded-md bg-primary px-3 py-1.5 text-sm shadow-sm hover:bg-violet-300"
          >
            Previous
          </button>
          <span className="px-3 py-1.5 text-sm">{currentPage}</span>
          <button
            onClick={() =>
              setCurrentPage((prev) => prev + 1 /* Add logic here */)
            }
            className="rounded-md bg-primary px-3 py-1.5 text-sm shadow-sm hover:bg-violet-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsListSection;
