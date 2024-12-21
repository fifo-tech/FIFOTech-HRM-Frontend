import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EmployeeBasicInformationSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 p-6">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        {/* Title */}
        <div>
          <h6 className="mb-6 flex items-center text-xl text-gray-600">
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="mr-2 text-primary"
              aria-hidden="true"
            />
            Basic Information
          </h6>
        </div>

        {/* Form Section */}
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label className="block font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter contact number"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block font-medium text-gray-700">Gender</label>
            <select className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Employee ID */}
          <div>
            <label className="block font-medium text-gray-700">
              Employee ID
            </label>
            <input
              type="text"
              placeholder="Enter employee ID"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          {/* Additional Fields */}
          {[
            { label: "Status", placeholder: "Select status" },
            { label: "Marital Status", placeholder: "Select marital status" },
            { label: "Role", placeholder: "Enter role" },
            { label: "District", placeholder: "Enter district" },
            { label: "City", placeholder: "Enter city" },
            {
              label: "Zip Code / Postal Code",
              placeholder: "Enter zip or postal code",
            },
            { label: "Religion", placeholder: "Enter religion" },
            { label: "Blood Group", placeholder: "Enter blood group" },
            { label: "Nationality", placeholder: "Enter nationality" },
            { label: "Citizenship", placeholder: "Enter citizenship" },
          ].map(({ label, placeholder }, index) => (
            <div key={index}>
              <label className="block font-medium text-gray-700">{label}</label>
              <input
                type="text"
                placeholder={placeholder}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          ))}

          {/* Address Fields */}
          {[
            { label: "Present Address", rows: 3 },
            { label: "Permanent Address", rows: 3 },
          ].map(({ label, rows }, index) => (
            <div key={index} className="col-span-1 md:col-span-2">
              <label className="block font-medium text-gray-700">{label}</label>
              <textarea
                rows={rows}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
              ></textarea>
            </div>
          ))}
        </form>

        {/* Update Profile Button */}
        <div className="mt-8 flex justify-end">
          <button className="rounded-lg bg-primary px-6 py-2 text-white shadow transition hover:bg-primary">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBasicInformationSection;
