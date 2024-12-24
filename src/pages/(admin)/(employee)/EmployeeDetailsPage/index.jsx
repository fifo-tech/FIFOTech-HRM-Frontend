import EmployeeAccountInformationSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeAccountInformationSection";
import EmployeeBasicInformationSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeBasicInformationSection";
import EmployeeChangePasswordSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeChangePasswordSection";
import EmployeeContractSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeContractSection";
import EmployeeDocumentsSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeDocumentsSection";
import EmployeePersonalInformationSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeePersonalInformationSection";
import EmployeeProfilePictureSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeProfilePictureSection";
import EmployeeSidebar from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeSidebar";
import EmployeeTimesheetAgendaSection from "@/components/(admin)/(employee)/(employee-details-page)/EmployeeTimesheetAgendaSection";
import { Tabs, TabsItem } from "@/components/ui/Tabs";
import {
  faCalendarAlt,
  faFileContract,
  faFolder,
  faLock,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

const EmployeeDetailsPage = () => {
  // Employee Details
  const details = {
    profilePicture: "https://via.placeholder.com/100",
    name: "Hassan Mahmud",
    department: "HR Department",
    status: "Active",
    email: "hassan@example.com",
  };

  // Tabs
  const tabs = [
    {
      label: "Contract",
      value: "contract",
      element: <EmployeeContractSection />,
      icon: faFileContract,
    },
    {
      label: "Basic Information",
      value: "basic-information",
      element: <EmployeeBasicInformationSection />,
      icon: faFileContract,
    },
    {
      label: "Personal Information",
      value: "personal-information",
      element: <EmployeePersonalInformationSection />,
      icon: faUserAlt,
    },
    {
      label: "Profile Picture",
      value: "profile-picture",
      element: <EmployeeProfilePictureSection />,
      icon: faUser,
    },
    {
      label: "Account Information",
      value: "account-information",
      element: <EmployeeAccountInformationSection />,
      icon: faFolder,
    },
    {
      label: "Documents",
      value: "documents",
      element: <EmployeeDocumentsSection />,
      icon: faFolder,
    },
    {
      label: "Timesheet Agenda",
      value: "timesheetagenda",
      element: <EmployeeTimesheetAgendaSection />,
      icon: faCalendarAlt,
    },
    {
      label: "Change Password",
      value: "changepassword",
      element: <EmployeeChangePasswordSection />,
      icon: faLock,
    },

    // { label: "Personal Information", icon: faUserAlt },
    // { label: "Profile Picture", icon: faUser },
    // { label: "Account Information", icon: faFolder },
    // { label: "Documents", icon: faFolder },
    // { label: "Timesheet Agenda", icon: faCalendarAlt },
    // { label: "Change Password", icon: faLock },
  ];
  return (
    <main>
      {/* Page Header */}
      {/* Details tabs */}
      <div>
        <Tabs value={tabs[0]?.value}>
          <div className="flex">
            <aside className="w-80 self-stretch">
              <EmployeeSidebar details={details} tabs={tabs} />
            </aside>
            <div className="flex-1 self-stretch">
              {tabs.map(({ value, element }, index) => (
                <TabsItem key={index} value={value}>
                  {element}
                </TabsItem>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </main>
  );
};

export default EmployeeDetailsPage;
