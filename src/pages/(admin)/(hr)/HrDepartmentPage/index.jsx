import DepartmentCreateSection from "@/components/(admin)/(hr)/(hr-department-page)/DepartmentsCreateSection";
import DepartmentsListSection from "@/components/(admin)/(hr)/(hr-department-page)/DepartmentsListSection";
import HrHeaderSection from "@/components/(admin)/(hr)/HrHeaderSection";

const HrDepartmentPage = () => {
  return (
    <main>
      <HrHeaderSection />
      <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <DepartmentCreateSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <DepartmentsListSection />
        </div>
      </div>
    </main>
  );
};

export default HrDepartmentPage;
