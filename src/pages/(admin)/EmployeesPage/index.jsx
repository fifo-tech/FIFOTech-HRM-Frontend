import EmployeeDetails from "@/components/(admin)/(employees-page)/EmployeeDetails";
import AccountInformation from "@/components/(admin)/(employees-page)/EmployeeDetails/AccountInformation/AccountInformation";
import BasicInformation from "@/components/(admin)/(employees-page)/EmployeeDetails/BasicInformation";
import ChangePassword from "@/components/(admin)/(employees-page)/EmployeeDetails/ChangePassword";
import Contract from "@/components/(admin)/(employees-page)/EmployeeDetails/Contract";
import PersonalInformation from "@/components/(admin)/(employees-page)/EmployeeDetails/PersonalInformation";
import ProfilePicture from "@/components/(admin)/(employees-page)/EmployeeDetails/ProfilePicture";
import EmployeesCreateSection from "@/components/(admin)/(employees-page)/EmployeesCreateSection";
import EmployeesListSection from "@/components/(admin)/(employees-page)/EmployeesListSection";
import EmployeesPageHeaderSection from "@/components/(admin)/(employees-page)/EmployeesPageHeaderSection";
import EmployeesRolesAndPrivileges from "@/components/(admin)/(employees-page)/EmployeesRolesAndPrivileges";

const EmployeePage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <EmployeesCreateSection />
      <EmployeesListSection />
      <EmployeesRolesAndPrivileges />
      <EmployeeDetails />
      <Contract />
      <BasicInformation />
      <PersonalInformation />
      <ProfilePicture />
      <AccountInformation />
      <ChangePassword />
    </main>
  );
};

export default EmployeePage;
