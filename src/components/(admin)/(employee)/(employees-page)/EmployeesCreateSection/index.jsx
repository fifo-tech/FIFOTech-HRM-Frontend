import EmployeesCreate from "./EmployeesCreate";
import ProfilePictureUpload from "./ProfilePictureUpload";

const EmployeesCreateSection = ({ toggleHideCreateForm }) => {
  return (
    <section className="my-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-4">
          <EmployeesCreate toggleHideCreateForm={toggleHideCreateForm} />
        </div>
        {/* <div className="col-span-1">
          <ProfilePictureUpload />
        </div> */}
      </div>
    </section>
  );
};

export default EmployeesCreateSection;
