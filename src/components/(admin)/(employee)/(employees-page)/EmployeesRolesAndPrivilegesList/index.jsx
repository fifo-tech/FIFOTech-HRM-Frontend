import { faEdit, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const EmployeesRolesAndPrivilegesList = ({ toggleCreateForm, isUpdated }) => {
  const [entries, setEntries] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [roles, setRoles] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL; // Base API URL

  // Fetch roles from the API on component mount
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          Swal.fire({
            title: "Error!",
            text: "You are not logged in!",
            icon: "error",
          });
          return;
        }

        const response = await fetch(`${apiUrl}/roles-list`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          setRoles(data.data);
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to fetch roles.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error fetching roles:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while fetching roles.",
          icon: "error",
        });
      }
    };

    fetchRoles();
  }, [isUpdated]);

  // Filter roles based on the search term
  const filteredRoles = roles.filter(
    (role) =>
      role.name && role.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredRoles.length / entries);
  const paginatedRoles = filteredRoles.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

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
        const response = await fetch(`${apiUrl}/delete-role/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          setRoles(roles.filter((role) => role.id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Role deleted successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: `Failed to delete role: ${data.message}`,
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.error("Error deleting role:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while deleting the role.",
        icon: "error",
      });
    }
  };

  return (
    <div className="mx-4 my-6 min-h-screen">
      <div className="rounded-md bg-white p-6 shadow-md">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-xl font-semibold">List All Roles</h6>
          <button
            onClick={toggleCreateForm}
            className="rounded bg-primary px-3 py-1 text-white hover:bg-indigo-600"
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Add New</span>
          </button>
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
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
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
        <div className="overflow-x-auto p-4">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-100 text-sm">
              <tr>
                <th className="border-b border-t px-4 py-2 text-left">
                  ROLE NAME
                </th>
                <th className="border-b border-t px-4 py-2 text-left">
                  ADDED DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedRoles.map((role) => (
                <tr
                  key={role.id}
                  className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                >
                  <td className="relative min-w-[150px] px-4 py-2">
                    <div className="group relative flex h-[50px] items-center space-x-4">
                      <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        <span>{role.name}</span>
                      </div>
                      <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                        <Link
                          to={`/dashboard/roles/${role.id}/edit`}
                          className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-600"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    {new Date(role.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {paginatedRoles.length === 0 && (
                <tr>
                  <td
                    colSpan="2"
                    className="px-4 py-2 text-center text-gray-500"
                  >
                    No roles found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">
            Showing {Math.min(entries, paginatedRoles.length)} to{" "}
            {paginatedRoles.length} of {filteredRoles.length} records
          </p>
          <div className="flex items-center">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`rounded-l-md px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-200 text-gray-400"
                  : "text-gray bg-gray-300 hover:bg-gray-500"
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
                  ? "cursor-not-allowed bg-gray-200 text-gray-400"
                  : "text-gray bg-gray-300 hover:bg-gray-500"
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

export default EmployeesRolesAndPrivilegesList;
