import {
  faEdit,
  faHome,
  faTable,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  return (
    <aside className="m-4 rounded-lg bg-gray-800 text-white shadow-lg">
      {/* Sidebar Header */}
      <div className="flex items-center border-b border-gray-700 p-4">
        <FontAwesomeIcon icon={faTachometerAlt} className="text-xl" />
        <span className="ml-2 text-xl font-bold">Admin</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-auto p-4">
        <ul>
          <SidebarMenuItem
            title="Home"
            link="/"
            icon={<FontAwesomeIcon icon={faHome} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Employees"
            link="/employees"
            icon={<FontAwesomeIcon icon={faEdit} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Core HR"
            icon={<FontAwesomeIcon icon={faEdit} className="mr-2" />}
            children={[
              { title: "Department", link: "#" },
              { title: "Designation", link: "#" },
              { title: "Policies", link: "#" },
              { title: "Make Announcement", link: "#" },
              { title: "Organization Chart", link: "#" },
            ]}
          />
          <SidebarMenuItem
            title="Attendance"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
            children={[
              { title: "Attendance", link: "#" },
              { title: "Monthly Report", link: "#" },
              { title: "Overtime Request", link: "#" },
            ]}
          />
          <SidebarMenuItem
            title="Finance"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Payroll"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Inventory Control"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
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
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
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
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Projects"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Manage Clients"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Leads"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Performance(PMS)"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
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
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Invoices"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Estimates"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Leave Request"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Training Sessions"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
          <SidebarMenuItem
            title="Disciplinary Cases"
            icon={<FontAwesomeIcon icon={faTable} className="mr-2" />}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
