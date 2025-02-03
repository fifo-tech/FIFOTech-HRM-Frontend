import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";
import EmployeesRolesAndPrivilegesCreate from "@/components/(admin)/(employee)/(employees-page)/EmployeesRolesAndPrivilegesCreate";
import EmployeesRolesAndPrivilegesList from "@/components/(admin)/(employee)/(employees-page)/EmployeesRolesAndPrivilegesList";
import { useState } from "react";

const EmployeesRolesAndPrivilegesPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  // console.log(isUpdated);

  // Toggle the visibility of the form
  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };
  const toggleHideCreateForm = () => {
    setShowCreateForm(false);
  };
  return (
    <main>
      <EmployeesPageHeaderSection />

      {/* Conditionally render the EmployeesRolesAndPrivilegesCreate if showCreateForm is true */}

      {showCreateForm && (
        <EmployeesRolesAndPrivilegesCreate
          toggleHideCreateForm={toggleHideCreateForm}
          setIsUpdated={setIsUpdated}
        />
      )}

      {/* Pass toggleCreateForm as a prop to the EmployeesRolesAndPrivilegesList */}
      <EmployeesRolesAndPrivilegesList
        toggleCreateForm={toggleCreateForm}
        isUpdated={isUpdated}
      />
    </main>
  );
};

export default EmployeesRolesAndPrivilegesPage;
