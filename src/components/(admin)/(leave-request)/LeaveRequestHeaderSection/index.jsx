import {
  faCalendarAlt,
  faCogs,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function LeaveRequestHeaderSection() {
  return (
    <section className="my-8 ml-4 mr-10">
      <div className="flex h-12 items-center justify-between rounded-md bg-background p-4">
        {/* Manage Leaves */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faCogs}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/dashboard/leaves-list"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">Manage Leaves</span>
            </Link>
            <span className="text-xs text-gray-500">
              Manage all leave requests
            </span>
          </div>
        </div>

        {/* Leave Type */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faListAlt}
            className="mb-2 text-lg text-primary"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/dashboard/leave-types"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">Leave Type</span>
            </Link>
            <span className="text-xs text-gray-500">
              View and manage leave types
            </span>
          </div>
        </div>

        {/* Calendar */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="mb-2 text-lg text-yellow-500"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/dashboard/leave-calendar"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">Calendar</span>
            </Link>
            <span className="text-xs text-gray-500">View leave calendar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaveRequestHeaderSection;
