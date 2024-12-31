import {
  faBusinessTime,
  faCalendarAlt,
  faClipboardList,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function AttendanceHeaderSection() {
  return (
    <section className="my-8 ml-4 mr-10">
      <div className="flex h-12 items-center justify-between rounded-md bg-background p-4">
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faClipboardList}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-1">
            <span className="font-medium text-gray-700">Attendance</span>
            <span className="text-xs text-gray-500">View Attendance</span>
          </div>
        </div>

        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faUserEdit}
            className="mb-2 text-lg text-primary"
          />
          <div className="flex flex-col p-2">
            <span className="font-medium text-gray-700">Manual Attendance</span>
            <span className="text-xs text-gray-500">Add/Edit Attendance</span>
          </div>
        </div>

        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="mb-2 text-lg text-yellow-500"
          />
          <div className="flex flex-col p-2">
            <span className="font-medium text-gray-700">Monthly Report</span>
            <span className="text-xs text-gray-500">View Monthly Report</span>
          </div>
        </div>

        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faBusinessTime}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-2">
            <span className="font-medium text-gray-700">Overtime Request</span>
            <span className="text-xs text-gray-500">
              Set up Overtime Request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttendanceHeaderSection;
