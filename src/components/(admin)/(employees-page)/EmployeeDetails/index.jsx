import EmployeeDetailsSidebar from "./EmployeeDetailsSidebar";

const EmployeeDetails = () => {
  return (
    <div className="flex">
      <EmployeeDetailsSidebar />
      <div className="flex-1 p-6">
        {/* Main Content */}
        <h1 className="text-2xl font-bold">Employee Details</h1>
        {/* Add additional content here */}
      </div>
    </div>
  );
};

export default EmployeeDetails;
