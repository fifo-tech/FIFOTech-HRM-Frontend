import AddEmployeeAttendanceCreateSection from "@/components/(admin)/(attendance)/(add-employee-attendance)/AddEmployeeAttendanceCreateSection";
import AttendanceHeaderSection from "@/components/(admin)/(attendance)/AttendanceHeaderSection";

const AddEmployeeAttendancePage = () => {
  return (
    <main>
      <AttendanceHeaderSection />
      <AddEmployeeAttendanceCreateSection />
    </main>
  );
};

export default AddEmployeeAttendancePage;
