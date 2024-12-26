import EmployeesPageHeaderSection from "@/components/(admin)/(employee)/(employees-page)/EmployeesPageHeaderSection";
import AnnouncementsCreateSection from "@/components/(admin)/(hr)/(hr-announcement-page)/AnnouncementsCreateSection";
import AnnouncementsListSection from "@/components/(admin)/(hr)/(hr-announcement-page)/AnnouncementsListSection";

const HrAnnouncementPage = () => {
  return (
    <main>
      <EmployeesPageHeaderSection />
      <AnnouncementsListSection />
      <AnnouncementsCreateSection />
    </main>
  );
};

export default HrAnnouncementPage;
