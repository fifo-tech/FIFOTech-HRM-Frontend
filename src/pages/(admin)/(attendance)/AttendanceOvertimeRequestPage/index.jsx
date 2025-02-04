import AttendanceOvertimeRequestListSection from "@/components/(admin)/(attendance)/(attendance-overtime-request)/AttendanceOvertimeRequestListSection";
import AttendanceHeaderSection from "@/components/(admin)/(attendance)/AttendanceHeaderSection";

const AttendanceOvertimeRequestPage = () => {
  return (
    <main>
      <AttendanceHeaderSection />
      <AttendanceOvertimeRequestListSection />
      {/* <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <ManualAttendanceFilterSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <ManualAttendanceViewSection />
        </div>
      </div> */}
    </main>
  );
};

export default AttendanceOvertimeRequestPage;
