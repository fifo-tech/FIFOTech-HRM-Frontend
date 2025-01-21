import { faEdit, faTable, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal for alerts

const DepartmentsListSection = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [departments, setDepartments] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL; // Base API URL

  // Fetch departments data from the API on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        if (!token) {
          Swal.fire({
            title: "Error!",
            text: "You are not logged in!",
            icon: "error",
          });
          return;
        }

        const response = await fetch(`${apiUrl}/department-list`, {
          method: "GET", // Use GET method to fetch data
          headers: {
            Authorization: `Bearer ${token}`, // Add the Bearer token in the Authorization header
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          setDepartments(data.data); // Set the fetched department data
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch departments.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error fetching departments:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while fetching departments.",
          icon: "error",
        });
      }
    };

    fetchDepartments();
  }, []); // Run once when the component mounts

  // Filter departments based on the search input
  const filteredDepartments = departments.filter((department) =>
    department.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredDepartments.length / entries);

  // Get departments to display based on current page and entries
  const paginatedDepartments = filteredDepartments.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  // Delete handler to remove a department by ID
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage

    if (!token) {
      Swal.fire({
        title: "Error!",
        text: "You are not logged in!",
        icon: "error",
      });
      return;
    }

    try {
      const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#7267EF",
      });

      if (confirm.isConfirmed) {
        const response = await fetch(`${apiUrl}/delete-department/${id}`, {
          method: "DELETE", // Use DELETE method to remove the department
          headers: {
            Authorization: `Bearer ${token}`, // Add Bearer token to the header
            "Content-Type": "application/json", // Set content type as JSON
          },
        });

        const data = await response.json();

        if (data.success) {
          // Remove the deleted department from the list
          setDepartments(
            departments.filter((department) => department.id !== id),
          );
          Swal.fire({
            title: "Deleted!",
            text: "Department deleted successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `Failed to delete department: ${data.message}`,
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.error("Error deleting department:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the department.",
        icon: "error",
      });
    }
  };

  return (
    <div className="mx-4 mr-8 mt-6 max-h-screen max-w-3xl rounded-md bg-white p-6">
      {/* Title */}

      <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={faTable} className="text-gray-700" />
        <h2 className="text-xl font-semibold">List All Departments</h2>
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
            onChange={(e) => {
              setEntries(Number(e.target.value));
              setCurrentPage(1); // Reset to page 1 when entries per page change
            }}
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
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset to page 1 when search input changes
            }}
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
            {paginatedDepartments.map((department) => (
              <tr
                key={department.id}
                className="group h-[50px] border-b border-gray-300 transition-colors duration-150 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
              >
                <td className="relative min-w-52 border-b px-4 py-2 text-center">
                  <span
                    className="block group-hover:hidden"
                    title={department.name}
                  >
                    {department.name}
                  </span>
                  <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                    <Link
                      to={`/dashboard/departments/${department.id}/edit`}
                      className="mx-1 rounded bg-blue-400 p-1 text-sm text-white hover:bg-blue-600"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button
                      onClick={() => handleDelete(department.id)}
                      className="mx-1 rounded bg-red-400 p-1 text-sm text-white hover:bg-red-600"
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
            {paginatedDepartments.length === 0 && (
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
          Showing {(currentPage - 1) * entries + 1} to{" "}
          {Math.min(currentPage * entries, filteredDepartments.length)} of{" "}
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
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-r-md bg-gray-200 px-4 py-2 text-sm text-gray-600 shadow-sm hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsListSection;
