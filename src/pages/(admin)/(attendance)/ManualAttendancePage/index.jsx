import ManualAttendanceFilterSection from "@/components/(admin)/(attendance)/(manual-attendance-page)/ManualAttendanceFilterSection";
import ManualAttendanceViewSection from "@/components/(admin)/(attendance)/(manual-attendance-page)/ManualAttendanceViewSection";
import AttendanceHeaderSection from "@/components/(admin)/(attendance)/AttendanceHeaderSection";

const ManualAttendancePage = () => {
  return (
    <main>
      <AttendanceHeaderSection />
      <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <ManualAttendanceFilterSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <ManualAttendanceViewSection />
        </div>
      </div>
    </main>
  );
};

export default ManualAttendancePage;
