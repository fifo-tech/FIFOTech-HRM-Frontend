import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DepartmentsListSection = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [departments, setDepartments] = useState([]);

  // Fetch departments data from the API on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        
        if (!token) {
          alert("You are not logged in!");
          return;
        }

        const apiUrl = import.meta.env.VITE_API_URL;
        
        const response = await fetch(`${apiUrl}/department-list`, {
          method: "GET",  // Use GET method to fetch data
          headers: {
            "Authorization": `Bearer ${token}`,  // Add the Bearer token in the Authorization header
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        
        if (data.success) {
          setDepartments(data.data); // Set the fetched department data
        } else {
          alert("Failed to fetch departments");
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
        alert("An error occurred while fetching departments.");
      }
    };

    fetchDepartments();
  }, []); // Run once when the component mounts

  // Filter departments based on the search input
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(search.toLowerCase())
  );

  // Delete handler to remove a department by ID
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (!token) {
      alert("You are not logged in!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/delete-department/${id}`, {
        method: "DELETE",  // Use DELETE method to remove the department
        headers: {
          "Authorization": `Bearer ${token}`, // Add Bearer token to the header
          "Content-Type": "application/json", // Set content type as JSON
        },
      });

      const data = await response.json();

      if (data.success) {
        // Remove the deleted department from the list
        setDepartments(departments.filter((department) => department.id !== id));
        alert("Department deleted successfully!");
      } else {
        alert("Failed to delete department: " + data.message);
      }
    } catch (error) {
      console.error("Error deleting department:", error);
      alert("An error occurred while deleting the department.");
    }
  };

  return (
    <div className="mx-4 mt-6 max-h-screen max-w-2xl bg-white p-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">List All Departments</h2>
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
      <div className="min-w-full overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200 text-sm">
              <th className="border-b px-4 py-2">DEPARTMENT NAME</th>
              <th className="border-b px-4 py-2">DEPARTMENT HEAD</th>
              <th className="border-b px-4 py-2">CREATED AT</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.slice(0, entries).map((department) => (
              <tr
                key={department.id}
                className="group h-[50px] border-b border-gray-300 transition-colors duration-150 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
              >
                <td className="relative border-b px-4 py-2 text-center">
                  <span
                    className="block group-hover:hidden"
                    title={department.name}
                  >
                    {department.name}
                  </span>
                  <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    <Link
                      to={`/departments/${department.id}/edit`}
                      className="mx-1 rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      onClick={() => handleDelete(department.id)}
                      className="mx-1 rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {department.head_name}
                </td>
                <td className="border-b px-4 py-2 text-center">
                  {new Date(department.created_at).toLocaleDateString()}
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
            onClick={() =>
              setCurrentPage((prev) => prev + 1 /* Add logic here */)
            }
            className="rounded-r-md bg-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsListSection;
