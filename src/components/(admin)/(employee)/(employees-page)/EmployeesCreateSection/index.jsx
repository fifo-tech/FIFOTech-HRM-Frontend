import EmployeesCreate from "./EmployeesCreate";

const EmployeesCreateSection = ({ toggleHideCreateForm, setIsUpdated }) => {
  return (
    <section className="my-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4">
          <EmployeesCreate
            toggleHideCreateForm={toggleHideCreateForm}
            setIsUpdated={setIsUpdated}
          />
        </div>
        {/* <div className="col-span-1">
          <ProfilePictureUpload />
        </div> */}
      </div>
    </section>
  );
};

export default EmployeesCreateSection;
