import {
  faBuilding,
  faBullhorn,
  faFileAlt,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function HrHeaderSection() {
  return (
    <section className="my-8 ml-4 mr-10">
      <div className="flex h-12 items-center justify-between rounded-md bg-background p-4">
        {/* Employees */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faBuilding}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-1">
            <span className="font-medium text-gray-700">Department</span>
            <span className="text-xs text-gray-500">Set up Department</span>
          </div>
        </div>

        {/* Roles & Privileges */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faIdBadge}
            className="mb-2 text-lg text-primary"
          />
          <div className="flex flex-col p-2">
            <span className="font-medium text-gray-700">Designation</span>
            <span className="text-xs text-gray-500">Set up Designations</span>
          </div>
        </div>

        {/* Shift & Scheduling */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faBullhorn}
            className="mb-2 text-lg text-yellow-500"
          />
          <div className="flex flex-col p-2">
            <span className="font-medium text-gray-700">Announcements</span>
            <span className="text-xs text-gray-500">Set up Announcements</span>
          </div>
        </div>

        {/* Employees Exit */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faFileAlt}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-2">
            <span className="font-medium text-gray-700">Policies</span>
            <span className="text-xs text-gray-500">Set up Policies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HrHeaderSection;
