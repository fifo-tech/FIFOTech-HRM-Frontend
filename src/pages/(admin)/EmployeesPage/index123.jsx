import {
  faEye,
  faPencilAlt,
  faPlus,
  faTable,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch employees data (replace this with your API call)
  useEffect(() => {
    fetch("/api/employees") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  // Delete Employee Handler
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      // Add API request to delete the employee
      fetch(`/api/employees/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setEmployees((prevEmployees) =>
              prevEmployees.filter((employee) => employee.id !== id),
            );
            setSuccessMessage("Employee deleted successfully!");
          }
        })
        .catch((error) => console.error("Error deleting employee:", error));
    }
  };

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
        <div className="flex items-center justify-between border-b bg-gray-100 p-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faTable} className="text-gray-700" />
            <h2 className="text-xl font-semibold">Employee List</h2>
          </div>
          <a href="/employees/create">
            <button className="flex items-center space-x-1 rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-600">
              <FontAwesomeIcon icon={faPlus} />
              <span>New Employee</span>
            </button>
          </a>
        </div>

        {/* Table */}
        {loading ? (
          <div className="p-4 text-center text-gray-600">Loading...</div>
        ) : (
          <div className="overflow-auto p-4">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">First Name</th>
                  <th className="border px-4 py-2">Last Name</th>
                  <th className="border px-4 py-2">Employee Code</th>
                  <th className="border px-4 py-2">Department</th>
                  <th className="border px-4 py-2">Designation</th>
                  <th className="border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Status</th>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{employee.first_name}</td>
                    <td className="border px-4 py-2">{employee.last_name}</td>
                    <td className="border px-4 py-2">
                      {employee.employee_code}
                    </td>
                    <td className="border px-4 py-2">{employee.department}</td>
                    <td className="border px-4 py-2">{employee.designation}</td>
                    <td className="border px-4 py-2">{employee.role}</td>
                    <td className="border px-4 py-2">
                      {employee.status === 1 ? "Active" : "Inactive"}
                    </td>
                    <td className="border px-4 py-2">
                      <img
                        src={`/storage/${employee.image}`}
                        alt="Employee"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex space-x-2">
                        {/* Edit Button */}
                        <a
                          href={`/employees/${employee.id}/edit`}
                          className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
                          title="Edit"
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </a>

                        {/* Show Button */}
                        <a
                          href={`/employees/${employee.id}`}
                          className="rounded bg-green-500 p-2 text-white hover:bg-green-600"
                          title="Show"
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </a>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(employee.id)}
                          className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeesPage;
