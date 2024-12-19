import {
  faCalendarAlt,
  faFileContract,
  faFolder,
  faInfoCircle,
  faLock,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeDetailsSidebar = () => {
  const employee = {
    profilePicture: "https://via.placeholder.com/100", // Replace with actual image URL
    name: "Hassan Mahmud",
    department: "HR Department",
    status: "Active",
    email: "hassan@example.com",
  };

  const menuItems = [
    { title: "Contract", icon: faFileContract },
    { title: "Basic Information", icon: faInfoCircle },
    { title: "Personal Information", icon: faUserAlt },
    { title: "Profile Picture", icon: faUser },
    { title: "Account Information", icon: faFolder },
    { title: "Documents", icon: faFolder },
    { title: "Timesheet Agenda", icon: faCalendarAlt },
    { title: "Change Password", icon: faLock },
  ];

  return (
    <aside className="w-64 bg-white p-4 shadow-lg">
      {/* Profile Section */}
      <div className="mb-4 border-b pb-4 text-center">
        <img
          src={employee.profilePicture}
          alt={`${employee.name}'s profile`}
          className="mx-auto mb-2 h-20 w-20 rounded-full object-cover"
        />
        <h3 className="text-lg font-bold">{employee.name}</h3>
        <p className="text-sm text-gray-600">{employee.department}</p>
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
            employee.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.status}
        </span>
        <p className="mt-2 text-sm text-gray-500">{employee.email}</p>
      </div>

      {/* Menu Section */}
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button className="flex w-full items-center gap-4 rounded px-4 py-2 text-left text-gray-700 transition hover:bg-gray-100 hover:text-primary">
                <FontAwesomeIcon icon={item.icon} className="text-lg" />
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default EmployeeDetailsSidebar;
