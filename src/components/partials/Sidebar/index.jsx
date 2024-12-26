import { faEdit, faHome, faTable } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  return (
    <aside className="mx-4 my-6 ml-6 bg-card shadow-lg">
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
            icon={<FontAwesomeIcon icon={faEdit} />}
          />
          <SidebarMenuItem
            title="Core HR"
            icon={<FontAwesomeIcon icon={faEdit} />}
            children={[
              { title: "Department", link: "/departments-list" },
              { title: "Designation", link: "/designations-list" },
              { title: "Policies", link: "/policies-list" },
              { title: "Make Announcement", link: "/announcement-list" },
              { title: "Organization Chart", link: "#" },
            ]}
          />
          <SidebarMenuItem
            title="Attendance"
            icon={<FontAwesomeIcon icon={faTable} />}
            children={[
              { title: "Attendance", link: "#" },
              { title: "Monthly Report", link: "#" },
              { title: "Overtime Request", link: "#" },
            ]}
          />
          <SidebarMenuItem
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
          />
          <SidebarMenuItem
            title="Helpdesk"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Invoices"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Estimates"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Leave Request"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Training Sessions"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
          <SidebarMenuItem
            title="Disciplinary Cases"
            icon={<FontAwesomeIcon icon={faTable} />}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
