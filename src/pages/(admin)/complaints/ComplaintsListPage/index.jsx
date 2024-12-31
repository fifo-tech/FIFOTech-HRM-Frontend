import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";
import ComplaintsListSection from "@/components/(admin)/complaints/ComplaintsListSection";

const ComplaintsListPage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <ComplaintsListSection />

      {/* <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <DepartmentCreateSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <DepartmentsListSection />
        </div>
      </div> */}
    </main>
  );
};

export default ComplaintsListPage;
