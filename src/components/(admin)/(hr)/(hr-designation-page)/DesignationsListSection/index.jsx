import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DesignationsListSection = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [designations, setDesignations] = useState([]);
  const [departments, setDepartments] = useState([]);

  // Fetch designations and departments data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem("token");
        if (!token) {
          alert("You are not logged in!");
          return;
        }

        // Fetch departments data
        
        const deptResponse = await fetch(`${apiUrl}/department-list`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const deptData = await deptResponse.json();
        if (deptData.success) {
          setDepartments(deptData.data);  // Store departments data
        } else {
          alert("Failed to fetch departments");
        }

        // Fetch designations data
        const desigResponse = await fetch(`${apiUrl}/designation-list`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const desigData = await desigResponse.json();
        if (desigData.success) {
          setDesignations(desigData.data);  // Store designations data
        } else {
          alert("Failed to fetch designations");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  // Filter designations based on the search input
  const filteredDesignations = designations.filter((designation) =>
    designation.name.toLowerCase().includes(search.toLowerCase()) ||
    departments.some(
      (dept) => dept.id === designation.dept_id && dept.name.toLowerCase().includes(search.toLowerCase())
    )
  );

  // Delete handler to remove a designation by ID
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in!");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/delete-designation/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        // Remove the deleted designation from the list
        setDesignations(designations.filter((designation) => designation.id !== id));
        alert("Designation deleted successfully!");
      } else {
        alert("Failed to delete designation: " + data.message);
      }
    } catch (error) {
      console.error("Error deleting designation:", error);
      alert("An error occurred while deleting the designation.");
    }
  };

  // Get department name by dept_id
  const getDepartmentName = (dept_id) => {
    const department = departments.find((dept) => dept.id === dept_id);
    return department ? department.name : "Unknown";
  };

  return (
    <div className="mx-4 mt-6 max-h-screen max-w-2xl rounded-sm bg-white p-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">List All Designations</h2>
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
            <tr className="bg-gray-200 text-sm">
              <th className="border-b px-4 py-2">DESIGNATION</th>
              <th className="border-b px-4 py-2">DEPARTMENT</th>
            </tr>
          </thead>
          <tbody>
            {filteredDesignations.slice(0, entries).map((designation) => (
              <tr
                key={designation.id}
                className="group h-[50px] border-b border-gray-300 transition-colors duration-150 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
              >
                <td className="relative min-w-52 border-b px-4 py-2 text-center">
                  <span
                    className="block group-hover:hidden"
                    title={designation.name}
                  >
                    {designation.name}
                  </span>
                  <div className="absolute right-24 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    <Link
                      to={`/designations/${designation.id}/edit`}
                      className="mx-1 rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      onClick={() => handleDelete(designation.id)}
                      className="mx-1 rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {getDepartmentName(designation.dept_id)}
                </td>
              </tr>
            ))}
            {filteredDesignations.length === 0 && (
              <tr>
                <td
                  colSpan="2"
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
          Showing 1 to {filteredDesignations.slice(0, entries).length} of{" "}
          {filteredDesignations.length} records
        </p>

        {/* Pagination Buttons */}
        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-l-md bg-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="bg-primary px-4 py-2 text-sm">{currentPage}</span>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="rounded-r-md bg-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignationsListSection;
