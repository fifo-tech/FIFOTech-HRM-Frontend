const EmployeeBio = ({ employeeData, handleInputChange, handleSubmit }) => {
  return (
    <>
      <div>
        <label
          htmlFor="bio"
          className="block text-lg font-medium text-gray-700"
        >
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows="5"
          value={employeeData.bio}
          onChange={handleInputChange}
          placeholder="Enter employee's bio here.."
          className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="experience"
          className="block text-sm font-medium text-gray-700"
        >
          Experience
        </label>
        <select
          id="experience"
          name="experience"
          value={employeeData.experience}
          onChange={handleInputChange}
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

      <div className="mt-8 flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-all duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Update Bio
        </button>
      </div>
    </>
  );
};

export default EmployeeBio;
