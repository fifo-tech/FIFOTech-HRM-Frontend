import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeesRolesAndPrivileges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entries, setEntries] = useState(10);
  const roles = [
    { name: "Admin", permission: "Full Access", addedDate: "2024-12-01" },
    { name: "Manager", permission: "Limited Access", addedDate: "2024-12-02" },
    { name: "Employee", permission: "View Only", addedDate: "2024-12-03" },
    { name: "HR", permission: "Custom Access", addedDate: "2024-12-04" },
  ];

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex w-full flex-col gap-4 bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold">List All Roles</h5>
        <input
          type="text"
          placeholder="Search..."
          className="rounded border px-2 py-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        {/* Table Section */}
        <div className="w-full">
          {/* Show Entries */}
          <div className="mb-2 flex items-center justify-between">
            <label>
              Show
              <select
                className="mx-2 rounded border px-10 py-1"
                value={entries}
                onChange={(e) => setEntries(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              entries
            </label>
          </div>

          {/* Table */}
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Role Name</th>
                <th className="px-4 py-2 text-left">Menu Permission</th>
                <th className="px-4 py-2 text-left">Added Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoles.slice(0, entries).map((role, index) => (
                <tr
                  key={index}
                  className="hover:border-primary-500 hover:border"
                >
                  <td className="group relative px-4 py-2">
                    <span>{role.name}</span>
                    <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 transform items-center gap-2 group-hover:flex">
                      <button className="rounded px-1 py-0.5 text-blue-500 transition hover:bg-blue-800 hover:text-white">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button className="rounded px-1 py-0.5 text-red-500 transition hover:bg-red-700 hover:text-white">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-2">{role.permission}</td>
                  <td className="px-4 py-2">{role.addedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-2 flex items-center justify-between">
            <div>
              Showing 1 to {Math.min(filteredRoles.length, entries)} of{" "}
              {filteredRoles.length} records
            </div>
            <div className="flex space-x-2">
              <button className="rounded border bg-gray-200 px-2 py-1 hover:bg-gray-300">
                Previous
              </button>
              <button className="rounded border bg-primary px-2 py-1 hover:bg-gray-300">
                1
              </button>
              <button className="rounded border bg-gray-200 px-2 py-1 hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeesRolesAndPrivileges;
