import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      attachment: "../../../../../../src/assets/images/image.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image-1.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image-2.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image-2.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image-1.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image-2.jpg",
    },
    {
      title: "Leave Policy",
      createdAt: "2024-12-20",
      addedBy: "Admin",
      description: "Details about leave policies.",
      attachment: "../../../../../../src/assets/images/image.jpg",
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

      <table className="w-full border-collapse border-b border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              TITLE
            </th>
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              ADDED BY
            </th>
            <th className="border-b border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              CREATED AT
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPolicies.map((policy, index) => (
            <tr
              key={index}
              className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
            >
              <td className="relative min-w-[150px] px-4 py-2">
                <div className="group relative flex h-[50px] items-center space-x-4">
                  {/* Employee Details */}
                  <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                    <img
                      src={`/storage/${policy.attachment}`}
                      alt="policy"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col truncate px-4 py-4 text-sm">
                      <span className="truncate whitespace-nowrap">
                        {policy.title}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons (shown on hover) */}
                  <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                    <Link
                      to={`/policy-list/${policy.id}/edit`}
                      className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                      title="Edit"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>

                    <button
                      onClick={() => handleDelete(policy.id)}
                      className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                      title="Delete"
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </div>
              </td>

              <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">
                {policy.addedBy}
              </td>
              <td className="border-b border-gray-200 px-4 py-2 text-sm text-gray-700">
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
