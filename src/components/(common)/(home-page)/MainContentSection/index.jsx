import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";

const MainContentSection = () => {
  return (
    <section className="my-8">
      <div className="bg-black">
        <div>MainContentSection</div>
        <div className="grid grid-cols-2 gap-8">
          <FirstContent />
          <SecondContent />
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
