import { useState } from "react";

const PoliciesListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const policies = [
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
    },
    // Add more policy data as needed
  ];

  const filteredPolicies = policies.filter(
    (policy) =>
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalRecords = filteredPolicies.length;
  const totalPages = Math.ceil(totalRecords / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentPolicies = filteredPolicies.slice(startIndex, endIndex);

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
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-600">
          List All Policies
        </h1>
        <button className="rounded-lg bg-primary px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          + View Policies
        </button>
      </div>
      <hr className="mb-6 border-gray-300" />

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
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
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

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              TITLE
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              ADDED BY
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              CREATED AT
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPolicies.map((policy, index) => (
            <tr
              key={index}
              className="border-gray-200 odd:bg-white even:bg-gray-50"
            >
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {policy.title}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {policy.addedBy}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {policy.createdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default PoliciesListSection;
