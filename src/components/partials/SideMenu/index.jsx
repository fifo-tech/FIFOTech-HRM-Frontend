import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isEmployeesOpen, setIsEmployeesOpen] = useState(false);
  const [isCoreHROpen, setIsCoreHROpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="sb-sidenav-menu bg- card card-body h-full w-60 text-slate-800">
      <div className="nav px-4 py-6">
        <div className="sb-sidenav-menu-heading mb-6 text-xl font-bold">
          WE Tech Hub
        </div>

        {/* Home Link */}
        <Link
          className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
          to="/dashboard"
        >
          <div className="sb-nav-link-icon">
            <i className="fas fa-home"></i>
          </div>
          <span>HOME</span>
        </Link>

        {/* Employees Section */}
        <div>
          <button
            onClick={() => setIsEmployeesOpen(!isEmployeesOpen)}
            className="nav-link flex w-full items-center justify-between rounded-lg py-2 hover:bg-gray-700"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-users"></i>
            </div>
            <span>Employees</span>
            <div className="sb-sidenav-collapse-arrow">
              <i
                className={`fas ${isEmployeesOpen ? "fa-angle-up" : "fa-angle-down"}`}
              ></i>
            </div>
          </button>
          {isEmployeesOpen && (
            <nav className="sb-sidenav-menu-nested space-y-2 pl-8">
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/users"
              >
                Manage Employees
              </Link>
            </nav>
          )}
        </div>

        {/* Core HR Section */}
        <div>
          <button
            onClick={() => setIsCoreHROpen(!isCoreHROpen)}
            className="nav-link flex w-full items-center justify-between rounded-lg py-2 hover:bg-gray-700"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <span>Core HR</span>
            <div className="sb-sidenav-collapse-arrow">
              <i
                className={`fas ${isCoreHROpen ? "fa-angle-up" : "fa-angle-down"}`}
              ></i>
            </div>
          </button>
          {isCoreHROpen && (
            <nav className="sb-sidenav-menu-nested space-y-2 pl-8">
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/department"
              >
                Department
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/designation"
              >
                Designation
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/policies"
              >
                Policies
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/announcement"
              >
                Make Announcement
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/organizational-chart"
              >
                Organizational Chart
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/users"
              >
                Manage Users
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/roles"
              >
                Roles
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/permissions"
              >
                Permissions
              </Link>
            </nav>
          )}
        </div>

        {/* Attendance Section */}
        <div>
          <button
            onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
            className="nav-link flex w-full items-center justify-between rounded-lg py-2 hover:bg-gray-700"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <span>Attendance</span>
            <div className="sb-sidenav-collapse-arrow">
              <i
                className={`fas ${isAttendanceOpen ? "fa-angle-up" : "fa-angle-down"}`}
              ></i>
            </div>
          </button>
          {isAttendanceOpen && (
            <nav className="sb-sidenav-menu-nested space-y-2 pl-8">
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/attendance"
              >
                Attendance
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/manual-attendance"
              >
                Manual Attendance
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/monthly-report"
              >
                Monthly Report
              </Link>
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/overtime-request"
              >
                Overtime Request
              </Link>
            </nav>
          )}
        </div>

        {/* Other Sections */}
        <div className="space-y-2">
          <Link
            className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
            to="/finance"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <span>Finance</span>
          </Link>
          <Link
            className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
            to="/payroll"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <span>Payroll</span>
          </Link>
          <Link
            className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
            to="/inventory-control"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <span>Inventory Control</span>
          </Link>
          <Link
            className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
            to="/tasks"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-tasks"></i>
            </div>
            <span>Tasks</span>
          </Link>
          <Link
            className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
            to="/projects"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <span>Projects</span>
          </Link>
          <Link
            className="nav-link flex items-center space-x-3 rounded-lg py-2 hover:bg-gray-700"
            to="/clients"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-users"></i>
            </div>
            <span>Manage Client</span>
          </Link>
        </div>

        {/* Profile Section */}
        <div>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="nav-link flex w-full items-center justify-between rounded-lg py-2 hover:bg-gray-700"
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-user"></i>
            </div>
            <span>Profile</span>
            <div className="sb-sidenav-collapse-arrow">
              <i
                className={`fas ${isProfileOpen ? "fa-angle-up" : "fa-angle-down"}`}
              ></i>
            </div>
          </button>
          {isProfileOpen && (
            <nav className="sb-sidenav-menu-nested space-y-2 pl-8">
              <Link
                className="nav-link rounded-lg py-2 text-gray-300 hover:bg-gray-700"
                to="/profile"
              >
                View Profile
              </Link>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
