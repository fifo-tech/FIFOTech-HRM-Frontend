import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";
import PoliciesCreateSection from "@/components/(admin)/(hr)/(hr-policies-page)/PoliciesCreateSection";
import PoliciesListSection from "@/components/(admin)/(hr)/(hr-policies-page)/PoliciesListSection";

const HrPoliciesPage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <PoliciesCreateSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <PoliciesListSection />
        </div>
      </div>
    </main>
  );
};

export default HrPoliciesPage;
