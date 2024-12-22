import {
  faEye,
  faPencilAlt,
  faPlus,
  faTable,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeesListSection = ({ toggleCreateForm }) => {
  const initialEmployees = [
    {
      id: 1,
      first_name: "Hassan",
      last_name: "Mahmud",
      email: "mahmud@gmail.com",
      employee_code: "E001",
      department: "HR",
      designation: "Manager",
      role: "Admin",
      status: 1,
      image: "../../../../src/assets/images/image.jpg",
    },
    {
      id: 2,
      first_name: "Rakibul",
      last_name: "Hassan",
      email: "hassan@gmail.com",
      employee_code: "E002",
      department: "IT",
      designation: "Developer",
      role: "User",
      status: 1,
      image: "../../../../src/assets/images/image-1.jpg",
    },
    {
      id: 3,
      first_name: "Arefin",
      last_name: "Piash",
      email: "piash@gmail.com",
      employee_code: "E003",
      department: "Finance",
      designation: "Analyst",
      role: "User",
      status: 0,
      image: "../../../../src/assets/images/image-2.jpg",
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id),
      );
      setSuccessMessage("Employee deleted successfully!");
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
      employee.employee_code.toLowerCase().includes(query)
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

  return (
    <div className="container mx-auto mt-8 p-4">
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

          <div className="mb-4 flex justify-end">
            <button
              onClick={toggleCreateForm} // Call the passed function to toggle the form visibility
              className="flex items-center space-x-1 rounded bg-primary px-3 py-2 text-white hover:bg-blue-600"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>New Employee</span>
            </button>
          </div>

          {/* <a href="/employees/create">
            <button className="flex items-center space-x-1 rounded bg-primary px-3 py-2 text-white hover:bg-blue-600">
              <FontAwesomeIcon icon={faPlus} />
              <span>New Employee</span>
            </button>
          </a> */}
        </div>

        {/* Top Controls */}
        <div className="flex flex-col justify-between gap-4 border-b p-4 sm:flex-row sm:items-center">
          {/* Show Entries */}
          <div>
            <label>
              Show{" "}
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="rounded border p-1"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>{" "}
              entries
            </label>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-30 max-w-sm rounded border p-2"
          />
        </div>

        {/* Table */}
        <div className="overflow-auto p-4">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Employee Code</th>
                <th className="border px-4 py-2">Department</th>
                <th className="border px-4 py-2">Designation</th>
                <th className="border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Status</th>
                {/* <th className="border px-4 py-2">Image</th> */}
              </tr>
            </thead>
            <tbody>
              {currentEmployees.map((employee, index) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="h-[50px] border px-4 py-2">
                    <div className="group relative flex items-center space-x-4">
                      {/* Image */}
                      <div className="flex flex-shrink-0 items-start truncate group-hover:hidden">
                        <img
                          src={`/storage/${employee.image}`}
                          alt="Employee"
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      </div>

                      {/* Name and Email */}
                      <div className="flex flex-col truncate group-hover:hidden">
                        <span className="truncate whitespace-nowrap font-medium">
                          {employee.first_name + " " + employee.last_name}
                        </span>
                        <span className="truncate text-sm text-gray-500">
                          {employee.email}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="absolute inset-0 hidden items-center justify-center space-x-2 group-hover:flex">
                        <a
                          href={`/employees/${employee.id}/edit`}
                          className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </a>
                        <a
                          href={`/employee-details/${employee.id}`}
                          className="rounded bg-primary p-2 text-white hover:bg-violet-800"
                          title="Show"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </a>
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className="border px-4 py-2">{employee.employee_code}</td>
                  <td className="border px-4 py-2">{employee.department}</td>
                  <td className="border px-4 py-2">{employee.designation}</td>
                  <td className="border px-4 py-2">{employee.role}</td>
                  <td className="border px-4 py-2">
                    {employee.status === 1 ? "Active" : "Inactive"}
                  </td>
                  {/* <td className="border px-4 py-2">
                    <img
                      src={`/storage/${employee.image}`}
                      alt="Employee"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center">
          {/* Pagination Info */}
          <div>
            Showing {startIndex} to {endIndex} of {filteredEmployees.length}{" "}
            records
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`rounded px-4 py-2 text-sm font-medium ${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-300 text-gray-400"
                  : "bg-primary text-white hover:bg-blue-600"
              }`}
            >
              Previous
            </button>

            {/* Current Page Number */}
            <span className="flex h-9 w-9 items-center justify-center bg-primary text-lg text-white">
              {currentPage}
            </span>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`rounded px-4 py-2 text-sm font-medium ${
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

export default EmployeesListSection;
