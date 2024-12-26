import { useState } from "react";

const AnnouncementsListSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Sample announcements data
  const announcements = [
    {
      title: "Holiday Announcement",
      department: "HR",
      startDate: "2024-01-01",
      endDate: "2024-01-02",
    },
    {
      title: "Holiday Announcement",
      department: "HR",
      startDate: "2024-01-01",
      endDate: "2024-01-02",
    },
    // Add more data as needed
  ];

  // Filtering announcements based on search query
  const filteredAnnouncements = announcements.filter((announcement) =>
    announcement.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Pagination logic
  const totalRecords = filteredAnnouncements.length;
  const totalPages = Math.ceil(totalRecords / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(
    startIndex,
    endIndex,
  );

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
    <div className="mx-4 max-w-5xl rounded-sm border border-gray-200 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h6 className="text-xl font-bold text-gray-600">
          List All Announcements
        </h6>
        <button className="rounded-lg bg-primary px-4 py-2 text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-primary">
          + Add New
        </button>
      </div>

      {/* Horizontal Line */}
      <hr className="mb-4 border-gray-300" />

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

      {/* Table */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              TITLE
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              DEPARTMENT
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              START DATE
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left text-sm font-medium text-gray-600">
              END DATE
            </th>
          </tr>
        </thead>
        <tbody>
          {currentAnnouncements.map((announcement, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {announcement.title}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {announcement.department}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {announcement.startDate}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-sm text-gray-700">
                {announcement.endDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          Showing {startIndex + 1} to {Math.min(endIndex, totalRecords)} of{" "}
          {totalRecords} entries
        </p>
        <div className="flex items-center">
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

export default AnnouncementsListSection;
