import {
  faCalendarAlt,
  faSignOutAlt,
  faUsers,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function EmployeesPageHeaderSection() {
  return (
    <section className="my-8 mr-10">
      <div className="flex h-12 items-center justify-between rounded-md bg-background p-4">
        {/* Employees */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faUsers}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/dashboard/employees"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">Employees</span>
            </Link>
            <span className="text-xs text-gray-500">Set up Emplouees</span>
          </div>
        </div>

        {/* Roles & Privileges */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faUserShield}
            className="mb-2 text-lg text-primary"
          />
          <div className="flex flex-col p-2">
            <Link
              to="/employee-roles"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">
                Roles & Privileges
              </span>
            </Link>
            <span className="text-xs text-gray-500">Set Roles</span>
          </div>
        </div>

        {/* Shift & Scheduling */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="mb-2 text-lg text-yellow-500"
          />
          <div className="flex flex-col p-2">
            <Link
              to="/office-shifts"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">
                Shift & Scheduling
              </span>
            </Link>
            <span className="text-xs text-gray-500">Manage Shifts</span>
          </div>
        </div>

        {/* Employees Exit */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="mb-2 text-lg text-red-500"
          />
          <div className="flex flex-col p-2">
            <Link
              to="/employees-exit"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">Employees Exit</span>
            </Link>
            <span className="text-xs text-gray-500">Set up Employees Exit</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeesPageHeaderSection;
