import {
  faEdit,
  faEye,
  faPlus,
  faTable,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import { deleteEmployee } from "../../../../../models/Employee/DeleteEmployee"; // Import API call function
import { fetchEmployees } from "../../../../../models/Employee/EmployeeList"; // Import API call function

const EmployeesListSection = ({ toggleCreateForm }) => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        const data = await fetchEmployees();
        if (Array.isArray(data.data)) {
          setEmployees(data.data); // Use data.data based on the response format
        } else {
          setError("Received unexpected data format from API.");
        }
        setError(""); // Clear any previous errors
      } catch (err) {
        setError("Failed to fetch employees. Please try again later.");
        console.error("Error fetching employees:", err); // Log for debugging
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const handleViewDetails = (id) => {
    console.log(id);
    navigate(`/dashboard/employee-details/${id}`, { state: { id: id } });
  };

  const handleEdit = (id) => {
    console.log(id);
    navigate(`/dashboard/employee-edit/${id}`);
  };

  const handleDelete = async (id) => {
    console.log(id);
    // SweetAlert2 for delete confirmation
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#7267EF",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        // Call the deleteEmployee API function
        await deleteEmployee(id);

        // Update the frontend state by removing the employee from the list
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id),
        );

        // Display a success message
        setSuccessMessage("Employee deleted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Clear the success message after 3 seconds
      } catch (error) {
        console.error("Error while deleting employee:", error);
        alert("Failed to delete the employee. Please try again.");
      }
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredEmployees = employees.filter((employee) => {
    const query = searchQuery.toLowerCase();
    return (
      employee.first_name.toLowerCase().includes(query) ||
      employee.last_name.toLowerCase().includes(query) ||
      employee.emp_id.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const currentEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(
    currentPage * itemsPerPage,
    filteredEmployees.length,
  );

  const role_id = localStorage.getItem("role_id");

  return (
    <div className="container mx-auto mt-8 rounded-md p-4">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <>
          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 rounded bg-green-100 p-3 text-success">
              {successMessage}
            </div>
          )}

          {/* Card */}
          <div className="rounded-lg bg-white shadow-lg">
            {/* Card Header */}
            <div className="flex items-center justify-between border-b bg-white p-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faTable} className="text-gray-700" />
                <h2 className="text-xl font-semibold">Employee List</h2>
              </div>

              {role_id === "1" || role_id === "2" ? (
                <div className="flex justify-end">
                  <button
                    onClick={toggleCreateForm}
                    className="flex items-center space-x-1 rounded bg-primary px-2 py-1 text-white hover:bg-indigo-600"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                    <span>New Employee</span>
                  </button>
                </div>
              ) : null}
            </div>

            {/* Top Controls */}
            <div className="flex flex-col justify-between gap-4 border-b p-4 sm:flex-row sm:items-center">
              <div>
                <label>
                  Show{" "}
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className="rounded border p-1"
                  >
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>{" "}
                  entries
                </label>
              </div>
              <input
                type="text"
                placeholder="Search employees..."
                value={searchQuery}
                onChange={handleSearch}
                className="max-w-sm rounded border p-2"
              />
            </div>

            {/* Table */}
            <div className="overflow-auto p-4">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-t px-4 py-2">Name</th>
                    <th className="border-b border-t px-4 py-2">
                      Employee Code
                    </th>
                    <th className="border-b border-t px-4 py-2">Department</th>
                    <th className="border-b border-t px-4 py-2">Designation</th>
                    <th className="border-b border-t px-4 py-2">Role</th>
                    <th className="border-b border-t px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmployees.map((employee) => (
                    <tr
                      key={employee.id}
                      className="h-[50px] border-b border-gray-300 transition duration-100 hover:bg-gray-50 hover:shadow-[0_-5px_10px_rgba(99,102,241,0.2),0_5px_10px_rgba(99,102,241,0.2),-5px_0_10px_rgba(99,102,241,0.2)]"
                    >
                      <td className="h-[50px] max-w-[240px] border-b px-4 py-2">
                        <div className="group relative flex h-[50px] items-center space-x-4">
                          {/* Image */}
                          <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                            <img
                              src={employee.profile_photo_path}
                              alt="Employee"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                            {/* <span>{employee.blood_group}</span> */}
                          </div>

                          {/* Name and Email */}
                          <div className="flex min-w-[150px] flex-col truncate group-hover:hidden">
                            <span className="truncate whitespace-nowrap font-medium">
                              {`${employee.first_name} ${employee.last_name}`}
                            </span>
                            <span className="truncate text-sm text-gray-500">
                              {employee.email}
                            </span>
                            <span className="truncate text-sm text-gray-500">
                              {employee.phone_num}
                            </span>
                          </div>

                          {/* Disapear Edit Delte View section from Employee */}

                          {role_id != 3 ? (
                            <td className="px-4 py-2">
                              <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                                <button
                                  className="rounded bg-blue-400 p-2 text-sm text-white hover:bg-blue-500"
                                  title="Edit"
                                  onClick={() => handleEdit(employee.id)}
                                >
                                  <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                  className="rounded bg-indigo-400 p-2 text-sm text-white hover:bg-primary"
                                  title="View Details"
                                  onClick={() => handleViewDetails(employee.id)}
                                >
                                  <FontAwesomeIcon icon={faEye} />
                                </button>

                                <button
                                  onClick={() => handleDelete(employee.id)}
                                  className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-500"
                                  title="Delete"
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </button>
                              </div>
                            </td>
                          ) : null}
                        </div>
                      </td>
                      <td className="px-4 py-2">{employee.emp_id}</td>
                      <td className="px-4 py-2">{employee.department_name}</td>
                      <td className="px-4 py-2">{employee.designation_name}</td>
                      <td className="px-4 py-2">{employee.role_name}</td>
                      <td className="px-4 py-2">{employee.active_status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
              <div>
                Showing {startIndex} to {endIndex} of {filteredEmployees.length}{" "}
                records
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`rounded-l-md px-4 py-2 ${
                    currentPage === 1
                      ? "cursor-not-allowed bg-gray-300"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  Previous
                </button>
                <span className="flex h-10 w-10 items-center justify-center bg-primary text-lg text-white">
                  {currentPage}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`rounded-r-md px-4 py-2 ${
                    currentPage === totalPages
                      ? "cursor-not-allowed bg-gray-300"
                      : "bg-gray-400 text-white"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EmployeesListSection;
