import { faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { getAttendanceList } from "../../../../../models/Attendance/GetAttendance";

const AttendanceDailyListSection = () => {
  const [entries, setEntries] = useState(50);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // State for the current page
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAttendanceData = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getAttendanceList(); // Fetch attendance data
        //console.log("Hello");
        //console.log(data);
        if (data && Array.isArray(data)) {
          setAttendanceData(data); // Update attendance state
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

  function formatTimeWithAMPM(time) {
    if (!time) return "N/A";

    const [hours, minutes] = time.split(":").map(Number);

    // Determine AM or PM
    const period = hours >= 12 ? "PM" : "AM";

    // Adjust hours for 12-hour format
    const adjustedHours = hours % 12;

    // If the hour is 0 (midnight), set it to 12 for 12:00 AM
    const formattedHours = adjustedHours === 0 ? 12 : adjustedHours;

    // Ensure 2 digits for minutes
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes} ${period}`;
  }

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
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faTable} className="text-gray-700" />
          <h2 className="text-xl font-semibold">Daily Attendance Report</h2>
        </div>

        <hr className="mb-4 border-gray-300" />

        {loading ? (
          <p>Loading attendance records...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
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

            <div className="min-h-screen overflow-x-auto overflow-y-auto">
              <table className="max-w-full border-collapse text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="min-w-[150px] border-b border-gray-300 px-4 py-2 text-left">
                      EMPLOYEE
                    </th>
                    <th className="min-w-[120px] border-b border-gray-300 px-4 py-2 text-left">
                      Employee ID
                    </th>
                    <th className="min-w-[120px] border-b border-gray-300 px-4 py-2 text-left">
                      DATE
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 text-left">
                      STATUS
                    </th>
                    <th className="min-w-[120px] border-b border-gray-300 px-4 py-2 text-left">
                      CLOCK IN
                    </th>
                    <th className="min-w-[120px] border-b border-gray-300 px-4 py-2 text-left">
                      CLOCK OUT
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 text-left">
                      LATE
                    </th>
                    <th className="border-b border-gray-300 px-4 py-2 text-left">
                      LATE REASON
                    </th>
                    <th className="min-w-[45px] border-b border-gray-300 px-4 py-2 text-left">
                      EARLY LEAVE
                    </th>
                    <th className="min-w-[45px] border-b border-gray-300 px-4 py-2 text-left">
                      EARLY LEAVE REASON
                    </th>
                    <th className="min-w-[45px] border-b border-gray-300 px-4 py-2 text-left">
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
                      <td className="h-[50px] max-w-[240px] border-b px-4 py-2">
                        <div className="group relative flex h-[50px] items-center space-x-4">
                          <div className="flex flex-shrink-0 items-start truncate">
                            <img
                              src={item.image || "/default-profile.jpg"}
                              alt="Employee"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex min-w-[150px] flex-col truncate">
                            <span className="truncate whitespace-nowrap font-medium">
                              {item.first_name || "N/A"}{" "}
                              {item.last_name || "N/A"}
                            </span>
                            <span className="truncate text-sm text-gray-500">
                              {item.email || "N/A"}
                            </span>
                          </div>
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
                        {item.clock_in_reason || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {item.early_leaving || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {item.clock_out_reason || "N/A"}
                      </td>
                      <td className="px-4 py-2">
                        {item.total_work_hour || "N/A"}
                      </td>
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
                      : "bg-gray-400 text-white"
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

export default AttendanceDailyListSection;
