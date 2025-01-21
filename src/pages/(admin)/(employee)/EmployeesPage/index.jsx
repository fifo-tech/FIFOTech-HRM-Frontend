import EmployeesCreateSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesCreateSection";
import EmployeesListSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesListSection";
import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";
import { useState } from "react";

const EmployeePage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

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

      {/* Conditionally render the EmployeesCreateSection if showCreateForm is true */}

      {showCreateForm && (
        <EmployeesCreateSection toggleHideCreateForm={toggleHideCreateForm} />
      )}

      {/* Pass toggleCreateForm as a prop to the EmployeesListSection */}
      <EmployeesListSection toggleCreateForm={toggleCreateForm} />
    </main>
  );
};

export default EmployeePage;

