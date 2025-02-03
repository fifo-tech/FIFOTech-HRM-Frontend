const EmployeeSocialProfile = ({ socialProfiles, onInputChange, onSubmit }) => {
  return (
    <div>
      <h3 className="mb-4 text-lg font-medium text-gray-800">
        Social Profiles
      </h3>
      <div className="space-y-4">
        {/* Facebook */}
        <div>
          <label
            htmlFor="facebook"
            className="block text-sm font-medium text-gray-700"
          >
            Facebook
          </label>
          <input
            type="url"
            id="facebook"
            name="facebook"
            value={socialProfiles.facebook || ""}
            onChange={onInputChange}
            placeholder="https://facebook.com/username"
            className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label
            htmlFor="linkedin"
            className="block text-sm font-medium text-gray-700"
          >
            LinkedIn
          </label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={socialProfiles.linkedin || ""}
            onChange={onInputChange}
            placeholder="https://linkedin.com/in/username"
            className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* GitHub */}
        <div>
          <label
            htmlFor="github"
            className="block text-sm font-medium text-gray-700"
          >
            GitHub
          </label>
          <input
            type="url"
            id="github"
            name="github"
            value={socialProfiles.github || ""}
            onChange={onInputChange}
            placeholder="https://github.com/username"
            className="mt-1 w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-all duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Update Profiles
        </button>
      </div>
    </div>
  );
};

export default EmployeeSocialProfile;
