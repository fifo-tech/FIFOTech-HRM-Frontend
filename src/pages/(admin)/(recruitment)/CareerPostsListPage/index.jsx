import CareerPostsList from "@/components/(admin)/(recruitment)/CareerPostsList";
import RecruitmentHeaderSection from "@/components/(admin)/(recruitment)/RecruitmentHeaderSection";

const CareerPostsListPage = () => {
  return (
    <main className="w-full">
      <RecruitmentHeaderSection />
      <CareerPostsList />
    </main>
  );
};

export default CareerPostsListPage;
