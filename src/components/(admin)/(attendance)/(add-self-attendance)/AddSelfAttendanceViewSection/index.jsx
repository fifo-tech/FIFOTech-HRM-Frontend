import { useEffect, useState } from "react";

const AddSelfAttendanceViewSection = () => {
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  // Function to fetch attendance data from the API
  useEffect(() => {
    const fetchAttendanceData = async () => {
      setLoading(true);
      setError("");

      try {
        const token = localStorage.getItem("token"); // Get token from local storage

        const response = await fetch(`${apiUrl}/employee-attendance-list`, {
          method: "GET", // Using GET method
          headers: {
            Authorization: `Bearer ${token}`, // Add token in Authorization header
            "Content-Type": "application/json", // Ensure the correct content type
          },
        });

        const data = await response.json();
        console.log(data);

        if (data.success && data.data && Array.isArray(data.data)) {
          setAttendanceData(data.data); // Update attendance state
        } else {
          setError("Failed to fetch attendance data.");
        }
      } catch (err) {
        setError("Error fetching attendance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  const filteredData = attendanceData.filter(
    (item) =>
      item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm),
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

  function formatTimeWithAMPM(time) {
    if (!time) return "N/A";

    const [hours, minutes] = time.split(":").map(Number);

    const period = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12;
    const formattedHours = adjustedHours === 0 ? 12 : adjustedHours;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${period}`;
  }

  return (
    <div className="mx-4 my-6 min-h-screen">
      <div className="rounded-md bg-white p-6 shadow-md">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-lg font-semibold">View Attendance</h1>
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
        {loading ? (
          <p>Loading attendance records...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="overflow-x-auto p-4">
              <table className="min-w-full table-auto border-collapse text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border-b border-t px-4 py-2 text-left">
                      EMPLOYEE
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      Employee ID
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      DATE
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      STATUS
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      CLOCK IN
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      CLOCK OUT
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      LATE
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      EARLY LEAVING
                    </th>
                    <th className="border-b border-t px-4 py-2 text-left">
                      TOTAL WORK
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item, index) => (
                    <tr
                      key={index}
                      className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                    >
                      <td className="relative min-w-[240px] px-4 py-2">
                        <div className="group relative flex h-[50px] items-center space-x-4">
                          <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                            <img
                              src={item.image || "/default-profile.jpg"}
                              alt="Employee"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="ml-4 flex flex-col truncate">
                              <span className="truncate whitespace-nowrap font-medium">
                                {item.first_name || "N/A"}{" "}
                                {item.last_name || "N/A"}
                              </span>
                              <span className="truncate text-sm text-gray-500">
                                {item.email || "N/A"}
                              </span>
                            </div>
                          </div>

                          {/* Action Buttons (shown on hover) */}
                          {/* <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                            <Link
                              to={`/employees/${item.id}/edit`}
                              className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                              title="Edit"
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </Link>

                            <button
                              // Implement delete logic here
                              className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                              title="Delete"
                            >
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </div> */}
                        </div>
                      </td>

                      <td className="px-4 py-2">{item.emp_id || "N/A"}</td>
                      <td className="px-4 py-2">{item.date || "N/A"}</td>
                      <td className="px-4 py-2">{item.status || "N/A"}</td>
                      <td className="px-4 py-2">
                        {formatTimeWithAMPM(item.clock_in)}
                      </td>
                      <td className="px-4 py-2">
                        {formatTimeWithAMPM(item.clock_out)}
                      </td>
                      <td className="px-4 py-2">{item.late || "N/A"}</td>
                      <td className="px-4 py-2">
                        {item.early_leaving || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {item.total_work_hour || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {Math.min(entries, paginatedData.length)} to{" "}
                {paginatedData.length} of {filteredData.length} records
              </p>
              <div className="flex items-center">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`rounded-l-md px-4 py-2 text-sm font-medium ${
                    currentPage === 1
                      ? "cursor-not-allowed bg-gray-300 text-gray-400"
                      : "bg-gray-400 text-white"
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
                      ? "cursor-not-allowed bg-gray-300 text-gray-400"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddSelfAttendanceViewSection;
