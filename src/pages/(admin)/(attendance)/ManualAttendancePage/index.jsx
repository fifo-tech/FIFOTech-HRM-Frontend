import ManualAttendanceCreateSection from "@/components/(admin)/(attendance)/(manual-attendance-page)/ManualAttendanceCreateSection";
import ManualAttendanceFilterSection from "@/components/(admin)/(attendance)/(manual-attendance-page)/ManualAttendanceFilterSection";
import ManualAttendanceViewSection from "@/components/(admin)/(attendance)/(manual-attendance-page)/ManualAttendanceViewSection";
import AttendanceHeaderSection from "@/components/(admin)/(attendance)/AttendanceHeaderSection";
import { useState } from "react";

const ManualAttendancePage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Toggle the visibility of the form
  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };
  const toggleHideCreateForm = () => {
    setShowCreateForm(false);
  };
  return (
    <main>
      <AttendanceHeaderSection />
      {/* Conditionally render the ManualAttendanceCreateSection if showCreateForm is true */}
      {showCreateForm && (
        <ManualAttendanceCreateSection
          toggleHideCreateForm={toggleHideCreateForm}
        />
      )}

      <div className="col col-span-3 flex h-full w-full">
        <div className="col-span-1 h-full w-1/3">
          <ManualAttendanceFilterSection />
        </div>
        <div className="col-span-2 h-full w-2/3">
          {/* Pass toggleCreateForm as a prop to the ManualAttendanceViewSection */}
          <ManualAttendanceViewSection toggleCreateForm={toggleCreateForm} />
        </div>
      </div>
    </main>
  );
};

export default ManualAttendancePage;
