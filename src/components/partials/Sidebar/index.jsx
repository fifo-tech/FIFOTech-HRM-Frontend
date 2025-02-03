import {
  faClock,
  faHome,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  const role_id = localStorage.getItem("role_id");
  return (
    <aside className="w-70 sticky top-0 mx-4 my-6 ml-6 h-screen overflow-y-scroll rounded-md bg-card shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center border-border px-4 pb-0 pt-4">
        {/* <FontAwesomeIcon icon={faTachometerAlt} className="text-xl" /> */}
        {/* <span className="ml-2 text-xl font-bold">Wetechhub-HRM</span> */}
        {/* <div>
          <img src="../../../../public/logo.jpeg" alt="img" className="h-20 w-20"/>
        </div> */}
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-auto py-4">
        <ul>
          <SidebarMenuItem
            title="Home"
            link="/dashboard"
            icon={<FontAwesomeIcon icon={faHome} />}
          />
          <SidebarMenuItem
            title="Employees"
            link="employees"
            icon={<FontAwesomeIcon icon={faUsers} />}
          />

          {role_id === "1" || role_id === "2" ? (
            <SidebarMenuItem
              title="Core HR"
              icon={<FontAwesomeIcon icon={faUserTie} />}
              children={[
                { title: "Department", link: "departments-list" },
                { title: "Designation", link: "designations-list" },
                // { title: "Policies", link: "policies-list" },

                // { title: "Make Announcement", link: "announcement-list" },
              ]}
            />
          ) : null}

          <SidebarMenuItem
            title="Attendance"
            icon={<FontAwesomeIcon icon={faClock} />}
            children={
              role_id === "3"
                ? [{ title: "Add Attendance", link: "add-attendance" }]
                : [
                    {
                      title: "Daily Attendances List",
                      link: "attendance-daily-list",
                    },
                    {
                      title: "Add Self Attendance",
                      link: "add-self-attendance",
                    },
                    {
                      title: "Add Employee Attendance",
                      link: "add-employee-attendance",
                    },
                    // {
                    //   title: "Monthly Report",
                    //   link: "attendance-monthly-report",
                    // },
                    // { title: "Overtime Request", link: "overtime-request" },
                  ]
            }
          />

          {/* <SidebarMenuItem
            title="Finance"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Payroll"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Inventory Control"
            icon={<FontAwesomeIcon icon={faTable} />}
            children={[
              { title: "Warehouses", link: "#" },
              {
                title: "Products",
                link: "#",
                children: [
                  { title: "Products", link: "#" },
                  { title: "Out of Stock", link: "#" },
                  { title: "Expired Products", link: "#" },
                  { title: "Product Tax", link: "#" },
                  { title: "Product Category", link: "#" },
                ],
              },
              { title: "Suppliers", link: "#" },
              {
                title: "Purchases",
                link: "#",

                children: [
                  { title: "New Purchase", link: "#" },
                  { title: "Purchase List", link: "#" },
                ],
              },
            ]}
          />
          <SidebarMenuItem
            title="Sales Order"
            icon={<FontAwesomeIcon icon={faTable} />}
            children={[
              { title: "Manage Orders", link: "#" },
              { title: "Add New Order", link: "#" },
              { title: "Paid Orders", link: "#" },
              { title: "Packed Orders", link: "#" },
              { title: "Delivered Orders", link: "#" },
              { title: "Cancelled Orders", link: "#" },
              { title: "Quote Orders", link: "#" },
              { title: "Add Order Quote", link: "#" },
            ]}
          />
          <SidebarMenuItem
            title="Tasks"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Projects"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Manage Clients"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Leads"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Performance(PMS)"
            icon={<FontAwesomeIcon icon={faTable} />}
            children={[
              { title: "KPI(Indicator)", link: "#" },
              { title: "KPA(Appraisal)", link: "#" },
              { title: "Competencies", link: "#" },
              { title: "Track Goals(OKRs)", link: "#" },
              { title: "Goals Calendar", link: "#" },
            ]}
          /> */}
          {/* {role_id === "1" || role_id === "2" ? (
            <SidebarMenuItem
              title="Recruitment"
              icon={<FontAwesomeIcon icon={faUserPlus} />}
              children={[
                { title: "Applicants", link: "applicants-list" },
                { title: "Create Career Post", link: "create-career-post" },
                { title: "Career-Posts-List", link: "career-posts-list" },
                // {
                //   title: "Career Completed List",
                //   link: "/career-completed-list",
                // },
              ]}
            />
          ) : null} */}

          {/* <SidebarMenuItem
            title="Helpdesk"
            link="complaint-list"
            icon={<FontAwesomeIcon icon={faHeadset} />}
          /> */}
          {/* <SidebarMenuItem
            title="Invoices"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Estimates"
            icon={<FontAwesomeIcon icon={faTable} />}
          /> */}
          {/* <SidebarMenuItem
            title="Leave Request"
            link="leaves-list"
            icon={<FontAwesomeIcon icon={faCalendarCheck} />}
          /> */}
          {/* <SidebarMenuItem
            title="Training Sessions"
            icon={<FontAwesomeIcon icon={faTable} />}
          /> */}
          {/* <SidebarMenuItem
            title="Disciplinary Cases"
            icon={<FontAwesomeIcon icon={faTable} />}
          /> */}
          {/* 
          {role_id === '1' ? (
            <div className="text-center mt-5 font-bold">
              <h1>Welcome Admin</h1>
            </div>
          ) : null}

          {role_id === '2' ? (
            <div className="text-center mt-5 font-bold">
              <h1>Welcome HR</h1>
            </div>
          ) : null}

          {role_id === '3' ? (
            <div className="text-center mt-5 font-bold">
              <h1>Welcome Employee</h1>
            </div>
          ) : null} */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
