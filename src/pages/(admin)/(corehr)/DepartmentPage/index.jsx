import DepartmentCreateSection from "@/components/(admin)/(core-hr-page)/Department/DepartmentsCreateSection";
import DepartmentsListSection from "@/components/(admin)/(core-hr-page)/Department/DepartmentsListSection";
import EmployeesPageHeaderSection from "@/components/(admin)/(employees-page)/EmployeesPageHeaderSection";

const DepartmentPage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <DepartmentCreateSection />
        </div>
        <div className="md:w-2/3">
          <DepartmentsListSection />
        </div>
      </div>
    </main>
  );
};

export default DepartmentPage;
