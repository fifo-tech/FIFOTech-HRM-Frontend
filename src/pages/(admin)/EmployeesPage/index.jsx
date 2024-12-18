import EmployeesCreateSection from "@/components/(admin)/(employees-page)/EmployeesCreateSection";
import EmployeesListSection from "@/components/(admin)/(employees-page)/EmployeesListSection";
import EmployeesPageHeaderSection from "@/components/(admin)/(employees-page)/EmployeesPageHeaderSection";

const EmployeePage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <EmployeesCreateSection />
      <EmployeesListSection />
    </main>
  );
};

export default EmployeePage;
