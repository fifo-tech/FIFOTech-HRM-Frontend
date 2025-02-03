import { TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeeSidebar = ({ tabs, details, activeTab, setActiveTab }) => {
  return (
    <div className="mx-4 my-6">
      <div className="rounded-md bg-white shadow-lg">
        {/* Profile Details Section */}
        <div className="mb-4 border-b p-4 text-center">
          <img
            src={details.profilePicture}
            alt={`${details.name}'s profile`}
            className="mx-auto mb-2 h-20 w-20 rounded-full object-cover"
          />
          <h3 className="text-lg font-bold">{details.name}</h3>
          <p className="mb-2 text-sm text-gray-600">
            {details.department} Department
          </p>
          <span
            className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
              details.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {details.status}
          </span>
          <p className="mt-2 text-sm text-gray-500">{details.email}</p>
        </div>

        {/* Tabs List */}
        <TabsList className="flex flex-col space-y-2">
          {tabs?.map(({ value, label, icon }, index) => (
            <TabsTrigger
              key={index}
              value={value}
              className={`flex w-full items-center gap-4 rounded px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-primary ${
                activeTab === value ? "bg-gray-300" : "" // Apply active tab styling
              }`}
              onClick={() => setActiveTab(value)} // Update active tab
            >
              <span className="inline-block shrink-0">
                <FontAwesomeIcon icon={icon} className="text-lg" />
              </span>
              <span className="block flex-1 shrink-0 text-sm font-medium">
                {label}
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
    </div>
  );
};

export default EmployeeSidebar;
