import {
  faCalendarCheck,
  faClock,
  faHeadset,
  faHome,
  faUserPlus,
  faUsers,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  return (
    <aside className="w-70 sticky top-0 mx-4 my-6 ml-6 h-screen overflow-y-scroll rounded-sm bg-card shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center border-border p-4">
        {/* <FontAwesomeIcon icon={faTachometerAlt} className="text-xl" /> */}
        <span className="ml-2 text-xl font-bold">Wetechhub-HRM</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-auto py-4">
        <ul>
          <SidebarMenuItem
            title="Home"
            link="/"
            icon={<FontAwesomeIcon icon={faHome} />}
          />
          <SidebarMenuItem
            title="Employees"
            link="/employees"
            icon={<FontAwesomeIcon icon={faUsers} />}
          />
          <SidebarMenuItem
            title="Core HR"
            icon={<FontAwesomeIcon icon={faUserTie} />}
            children={[
              { title: "Department", link: "/departments-list" },
              { title: "Designation", link: "/designations-list" },
              { title: "Policies", link: "/policies-list" },
              { title: "Make Announcement", link: "/announcement-list" },
              // { title: "Organization Chart", link: "#" },
            ]}
          />
          <SidebarMenuItem
            title="Attendance"
            icon={<FontAwesomeIcon icon={faClock} />}
            children={[
              { title: "Attendance", link: "/attendance-daily-list" },
              { title: "Manual Attendance", link: "/manual-attendance" },
              { title: "Monthly Report", link: "/attendance-monthly-report" },
              { title: "Overtime Request", link: "/overtime-request" },
            ]}
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

          <SidebarMenuItem
            title="Recruitment"
            icon={<FontAwesomeIcon icon={faUserPlus} />}
            children={[
              { title: "Applicants", link: "/applicants-list" },
              { title: "Create Career Post", link: "/create-career-post" },
              { title: "Career-Posts-List", link: "/career-posts-list" },
              // {
              //   title: "Career Completed List",
              //   link: "/career-completed-list",
              // },
            ]}
          />
          <SidebarMenuItem
            title="Helpdesk"
            link="/complaint-list"
            icon={<FontAwesomeIcon icon={faHeadset} />}
          />
          {/* <SidebarMenuItem
            title="Invoices"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Estimates"
            icon={<FontAwesomeIcon icon={faTable} />}
          /> */}
          <SidebarMenuItem
            title="Leave Request"
            link="/leaves-list"
            icon={<FontAwesomeIcon icon={faCalendarCheck} />}
          />
          {/* <SidebarMenuItem
            title="Training Sessions"
            icon={<FontAwesomeIcon icon={faTable} />}
          /> */}
          {/* <SidebarMenuItem
            title="Disciplinary Cases"
            icon={<FontAwesomeIcon icon={faTable} />}
          /> */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
