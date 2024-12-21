import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmployeePersonalInformationSection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        {/* Title */}
        <div>
          <h6 className="mb-8 flex items-center text-xl text-gray-500">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 text-primary"
              aria-hidden="true"
            />
            Personal Information
          </h6>
        </div>

        {/* Subtitle Links */}
        <div className="text-md mt-2 flex space-x-10 text-primary">
          <p className="cursor-pointer transition-all duration-200 hover:text-blue-700 hover:shadow-md">
            Bio
          </p>
          <p className="cursor-pointer transition-all duration-200 hover:text-green-700 hover:shadow-md">
            Social Profile
          </p>
          <p className="cursor-pointer transition-all duration-200 hover:text-purple-700 hover:shadow-md">
            Bank Account
          </p>
          <p className="cursor-pointer transition-all duration-200 hover:text-red-700 hover:shadow-md">
            Emergency Contact
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-6 space-y-6">
          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              rows="5"
              placeholder="Enter employee's bio here.."
              className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Experience */}
          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience
            </label>
            <select
              id="experience"
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select experience</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} year{i > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Update Bio Button */}
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-all duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Bio
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeePersonalInformationSection;
