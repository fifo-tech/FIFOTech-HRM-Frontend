import AttendanceMonthlyReportSection from "@/components/(admin)/(attendance)/(attendence-monthly-report)/AttendenceMonthlyReportSection";
import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";

const AttendanceMonthlyReportPage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <AttendanceMonthlyReportSection />
    </main>
  );
};

export default AttendanceMonthlyReportPage;
