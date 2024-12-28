import { useState } from "react";

const AttendanceDailyListSection = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State for the current page

  const data = [
    {
      employee: "Rakibul Hassan",
      email: "hassa@gmail.com",
      date: "2024-12-28",
      status: "Present",
      clockIn: "9:00 AM",
      clockOut: "5:00 PM",
      late: "00:05",
      earlyLeaving: "-",
      totalWork: "7:55",
      image: "../../../../../../src/assets/images/image.jpg",
    },
    {
      employee: "Rakibul Hassan",
      email: "hassa@gmail.com",
      date: "2024-12-28",
      status: "Present",
      clockIn: "9:00 AM",
      clockOut: "5:00 PM",
      late: "00:05",
      earlyLeaving: "-",
      totalWork: "7:55",
      image: "../../../../../../src/assets/images/image-1.jpg",
    },
    {
      employee: "Rakibul Hassan",
      email: "hassa@gmail.com",
      date: "2024-12-28",
      status: "Present",
      clockIn: "9:00 AM",
      clockOut: "5:00 PM",
      late: "00:05",
      earlyLeaving: "-",
      totalWork: "7:55",
      image: "../../../../../../src/assets/images/image-2.jpg",
    },
    // Add more data as needed
  ];

  const filteredData = data.filter(
    (item) =>
      item.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm),
  );

  const totalPages = Math.ceil(filteredData.length / entries);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-full rounded-md bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-700">
            Daily Attendance Report
          </h2>
        </div>

        <hr className="mb-4 border-gray-300" />

        <div className="mb-4 flex items-center justify-between">
          <div>
            <label
              htmlFor="entries"
              className="mr-2 text-sm font-medium text-gray-600"
            >
              Show
            </label>
            <select
              id="entries"
              value={entries}
              onChange={(e) => {
                setEntries(Number(e.target.value));
                setCurrentPage(1); // Reset to the first page
              }}
              className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="ml-2 text-sm font-medium text-gray-600">
              entries
            </span>
          </div>

          <div>
            <label
              htmlFor="search"
              className="mr-2 text-sm font-medium text-gray-600"
            >
              Search:
            </label>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  EMPLOYEE
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  DATE
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  STATUS
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  CLOCK IN
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  CLOCK OUT
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  LATE
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  EARLY LEAVING
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  TOTAL WORK
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item, index) => (
                <tr
                  key={index}
                  className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-100 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                >
                  <td className="h-[50px] border-b px-4 py-2">
                    <div className="group relative flex h-[50px] items-center space-x-4">
                      <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        <img
                          src={`/storage/${item.image}`}
                          alt="Employee"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex min-w-[150px] flex-col truncate group-hover:hidden">
                        <span className="truncate whitespace-nowrap font-medium">
                          {item.employee}
                        </span>
                        <span className="truncate text-sm text-gray-500">
                          {item.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">{item.date}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2">{item.clockIn}</td>
                  <td className="px-4 py-2">{item.clockOut}</td>
                  <td className="px-4 py-2">{item.late}</td>
                  <td className="px-4 py-2">{item.earlyLeaving}</td>
                  <td className="px-4 py-2">{item.totalWork}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing {Math.min(entries, paginatedData.length)} to{" "}
            {paginatedData.length} of {filteredData.length} records
          </p>
          <div className="flex">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`rounded-l-md px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-300 text-gray-400"
                  : "bg-primary text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>
            <span className="flex h-9 w-9 items-center justify-center bg-primary text-lg text-white">
              {currentPage}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`rounded-r-md px-4 py-2 text-sm font-medium ${
                currentPage === totalPages
                  ? "cursor-not-allowed bg-gray-300 text-gray-400"
                  : "bg-primary text-white hover:bg-blue-600"
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

export default AttendanceDailyListSection;
