import AnnouncementsCreateSection from "@/components/(admin)/(hr)/(hr-announcement-page)/AnnouncementsCreateSection";
import AnnouncementsListSection from "@/components/(admin)/(hr)/(hr-announcement-page)/AnnouncementsListSection";
import HrHeaderSection from "@/components/(admin)/(hr)/HrHeaderSection";

const HrAnnouncementPage = () => {
  return (
    <main>
      <HrHeaderSection />
      <AnnouncementsListSection />
      <AnnouncementsCreateSection />
    </main>
  );
};

export default HrAnnouncementPage;
