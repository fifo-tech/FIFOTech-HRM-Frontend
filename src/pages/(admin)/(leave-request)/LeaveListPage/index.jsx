import LeaveList from "@/components/(admin)/(leave-request)/LeaveList";
import LeaveRequestCreateSection from "@/components/(admin)/(leave-request)/LeaveRequestCreateSection";
import LeaveRequestHeaderSection from "@/components/(admin)/(leave-request)/LeaveRequestHeaderSection";
import { useState } from "react";

const LeaveListPage = () => {
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
      <LeaveRequestHeaderSection />

      {showCreateForm && (
        <LeaveRequestCreateSection
          toggleHideCreateForm={toggleHideCreateForm}
        />
      )}

      <LeaveList toggleCreateForm={toggleCreateForm} />
    </main>
  );
};

export default LeaveListPage;
