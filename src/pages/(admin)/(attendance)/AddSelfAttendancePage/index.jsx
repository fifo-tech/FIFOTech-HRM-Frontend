import AddSelfAttendanceCreateSection from "@/components/(admin)/(attendance)/(add-self-attendance)/AddSelfAttendanceCreateSection";
import AddSelfAttendanceViewSection from "@/components/(admin)/(attendance)/(add-self-attendance)/AddSelfAttendanceViewSection";
import AttendanceHeaderSection from "@/components/(admin)/(attendance)/AttendanceHeaderSection";

const AddSelfAttendancePage = () => {
  //   const [showCreateForm, setShowCreateForm] = useState(false);

  //   // Toggle the visibility of the form
  //   const toggleCreateForm = () => {
  //     setShowCreateForm(!showCreateForm);
  //   };
  //   const toggleHideCreateForm = () => {
  //     setShowCreateForm(false);
  //   };
  return (
    <main>
      <AttendanceHeaderSection />
      <AddSelfAttendanceCreateSection />
      <AddSelfAttendanceViewSection />
    </main>
  );
};

export default AddSelfAttendancePage;
