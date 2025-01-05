import LeaveTypeCreateSection from "@/components/(admin)/(leave-request)/(leave-type-page)/LeaveTypeCreateSection";
import LeaveTypeListSection from "@/components/(admin)/(leave-request)/(leave-type-page)/LeaveTypeListSection";
import LeaveRequestHeaderSection from "@/components/(admin)/(leave-request)/LeaveRequestHeaderSection";

const LeaveTypePage = () => {
  return (
    <main>
      <LeaveRequestHeaderSection />
      <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <LeaveTypeCreateSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          <LeaveTypeListSection />
        </div>
      </div>
    </main>
  );
};

export default LeaveTypePage;
