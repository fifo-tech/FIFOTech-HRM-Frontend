import AttendanceDailyListSection from "@/components/(admin)/(attendance)/(attendance-daily-list-page)/AttendanceDailyListSection";
import AttendanceHeaderSection from "@/components/(admin)/(attendance)/AttendanceHeaderSection";

const AttendanceDailyListPage = () => {
  return (
    <main>
      <AttendanceHeaderSection />
      {/* <ManualAttendanceFilterSection /> */}
      <AttendanceDailyListSection />
    </main>
  );
};

export default AttendanceDailyListPage;
