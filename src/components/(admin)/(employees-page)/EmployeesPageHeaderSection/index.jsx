import {
  faCalendarAlt,
  faSignOutAlt,
  faUsers,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function EmployeesPageHeaderSection() {
  return (
    <section className="my-8">
      <div className="flex h-12 items-center justify-between rounded-md bg-background p-4">
        {/* Employees */}
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faUsers}
            className="mb-2 text-3xl text-blue-500"
          />
          <span className="font-medium text-gray-700">Employees</span>
        </div>

        {/* Roles & Privileges */}
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faUserShield}
            className="mb-2 text-3xl text-primary"
          />
          <span className="font-medium text-gray-700">Roles & Privileges</span>
        </div>

        {/* Shift & Scheduling */}
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="mb-2 text-3xl text-yellow-500"
          />
          <span className="font-medium text-gray-700">Shift & Scheduling</span>
        </div>

        {/* Employees Exit */}
        <div className="flex flex-col items-center text-center">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="mb-2 text-3xl text-red-500"
          />
          <span className="font-medium text-gray-700">Employees Exit</span>
        </div>
      </div>
    </section>
  );
}

export default EmployeesPageHeaderSection;
