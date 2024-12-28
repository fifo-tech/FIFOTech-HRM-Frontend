import AttendanceDailyListSection from "@/components/(admin)/(attendance)/(attendance-daily-list-page)/AttendanceDailyListSection";
import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";

const AttendanceDailyListPage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <AttendanceDailyListSection />
    </main>
  );
};

export default AttendanceDailyListPage;
