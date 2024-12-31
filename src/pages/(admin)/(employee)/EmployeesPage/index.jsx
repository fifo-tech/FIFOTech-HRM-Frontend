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

  return (
    <main>
      <EmployeesPageHeaderSection />
      {/* <div className="border p-4">
        <Tabs value="hello">
          <TabsList className="gap-4">
            <TabsTrigger
              className="bg-secondary px-4 py-2"
              activeClassName="bg-red-400"
              value="hello"
            >
              Hello Trigger
            </TabsTrigger>
            <TabsTrigger
              className="bg-secondary px-4 py-2"
              activeClassName="bg-red-400"
              value="bello"
            >
              Bello Trigger
            </TabsTrigger>
          </TabsList>
          <TabsContent>
            <TabsItem value="hello">Hello Everyone</TabsItem>
            <TabsItem value="bello">Bello Everyone</TabsItem>
          </TabsContent>
        </Tabs>
      </div> */}

      {/* Conditionally render the EmployeesCreateSection if showCreateForm is true */}
      {showCreateForm && <EmployeesCreateSection />}

      {/* Pass toggleCreateForm as a prop to the EmployeesListSection */}
      <EmployeesListSection toggleCreateForm={toggleCreateForm} />

      {/* <EmployeesCreateSection /> */}
      {/* <EmployeesListSection /> */}
    </main>
  );
};

export default EmployeePage;
