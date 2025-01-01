import AnnouncementsCreateSection from "@/components/(admin)/(hr)/(hr-announcement-page)/AnnouncementsCreateSection";
import AnnouncementsListSection from "@/components/(admin)/(hr)/(hr-announcement-page)/AnnouncementsListSection";
import HrHeaderSection from "@/components/(admin)/(hr)/HrHeaderSection";
import { useState } from "react";

const HrAnnouncementPage = () => {
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
      <HrHeaderSection />

      {/* Conditionally render the AnnouncementsCreateSection */}
      {showCreateForm && (
        <AnnouncementsCreateSection
          toggleHideCreateForm={toggleHideCreateForm}
        />
      )}

      {/* Pass toggleCreateForm as a prop to the AnnouncementsListSection */}
      <AnnouncementsListSection toggleCreateForm={toggleCreateForm} />
    </main>
  );
};

export default HrAnnouncementPage;
