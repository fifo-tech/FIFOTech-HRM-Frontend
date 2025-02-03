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
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EmployeeDetailsPage = () => {
  const location = useLocation();
  const id = location.state?.id; // Employee ID from navigation

  const [details, setDetails] = useState(null); // State to store employee details
  const [activeTab, setActiveTab] = useState("contract"); // Default active tab
  const [loading, setLoading] = useState(true); // Loading state

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    // Fetch employee details
    const fetchEmployeeDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        if (!token) throw new Error("Token not found"); // Check if token exists

        const response = await axios.get(`${apiUrl}/employee-profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token in Authorization header
          },
        });
        setDetails(response.data.data.employee); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching employee details:", error);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    if (id) fetchEmployeeDetails(); // Call API only if ID exists
  }, [id]);

  // Define tabs dynamically
  const tabs = [
    {
      label: "Contract",
      value: "contract",
      icon: faFileContract,
      element: <EmployeeContractSection id={id} />,
    },
    {
      label: "Basic Information",
      value: "basic-information",
      icon: faFileContract,
      element: <EmployeeBasicInformationSection id={id} />,
    },
    {
      label: "Personal Information",
      value: "personal-information",
      icon: faUserAlt,
      element: <EmployeePersonalInformationSection id={id} />,
    },
    {
      label: "Profile Picture",
      value: "profile-picture",
      icon: faUser,
      element: <EmployeeProfilePictureSection id={id} />,
    },
    {
      label: "Account Information",
      value: "account-information",
      icon: faFolder,
      element: <EmployeeAccountInformationSection />,
    },
    {
      label: "Documents",
      value: "documents",
      icon: faFolder,
      element: <EmployeeDocumentsSection id={id} />,
    },
    {
      label: "Timesheet Agenda",
      value: "timesheetagenda",
      icon: faCalendarAlt,
      element: <EmployeeTimesheetAgendaSection />,
    },
    {
      label: "Change Password",
      value: "changepassword",
      icon: faLock,
      element: <EmployeeChangePasswordSection id={id} />,
    },
  ];

  // Show loading spinner while fetching data
  if (loading) {
    return <div>Loading...</div>; // Add a spinner or loading indicator
  }

  // Handle case when no details are found
  if (!details) {
    return <div>Employee details not found.</div>;
  }

  return (
    <main>
      <div>
        <Tabs value={activeTab}>
          <div className="flex">
            <aside className="w-80 self-stretch">
              <EmployeeSidebar
                details={{
                  profilePicture: details.profile_photo,
                  name: `${details.first_name} ${details.last_name}`,
                  department: details.department_name,
                  status: details.active_status,
                  email: details.email,
                }}
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab} // Pass the function to set active tab
              />
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
