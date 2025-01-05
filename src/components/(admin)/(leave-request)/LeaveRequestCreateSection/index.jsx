import LeaveRequestCreate from "./LeaveRequestCreate";
import LeaveRequestFileUploadSection from "./LeaveRequestFileUploadSection";

const LeaveRequestCreateSection = ({ toggleHideCreateForm }) => {
  return (
    <section className="my-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <LeaveRequestCreate toggleHideCreateForm={toggleHideCreateForm} />
        </div>
        <div className="col-span-1">
          <LeaveRequestFileUploadSection />
        </div>
      </div>
    </section>
  );
};

export default LeaveRequestCreateSection;
