import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";
import EmployeesShiftAndSchedulingCreate from "@/components/(admin)/(employee)/(employees-page)/EmployeesShiftAndSchedulingCreate";
import EmployeesShiftAndSchedulingList from "@/components/(admin)/(employee)/(employees-page)/EmployeesShiftAndSchedulingList";
import { useState } from "react";

const EmployeesShiftAndSchedulingPage = () => {
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
      {/* <EmployeesShiftAndSchedulingList />
      <EmployeesShiftAndSchedulingCreate /> */}

      {/* Conditionally render the EmployeesShiftAndSchedulingCreate if showCreateForm is true */}

      {showCreateForm && (
        <EmployeesShiftAndSchedulingCreate
          toggleHideCreateForm={toggleHideCreateForm}
        />
      )}

      {/* Pass toggleCreateForm as a prop to the EmployeesShiftAndSchedulingList */}
      <EmployeesShiftAndSchedulingList toggleCreateForm={toggleCreateForm} />
    </main>
  );
};

export default EmployeesShiftAndSchedulingPage;
