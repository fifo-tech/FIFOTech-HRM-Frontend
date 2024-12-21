import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const EmployeeContractSection = () => {
  return (
    <div className="grid min-h-screen bg-white p-6">
      {/* Title */}
      <div>
        <h6 className="mb-4 flex items-center text-xl text-gray-600">
          <FontAwesomeIcon
            icon={faFileContract}
            className="mr-2 text-primary"
            aria-hidden="true"
          />
          Set Contract
        </h6>
      </div>

      {/* Top Row Categories */}
      <div className="mb-8 grid grid-cols-5 gap-2 bg-white">
        {[
          "Contract",
          "Allowances",
          "Commissions",
          "Statutory Deductions",
          "Reimbursements",
        ].map((item, index) => (
          <div
            key={index}
            className="flex h-16 items-center justify-center bg-white text-center font-medium text-primary"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Form Section */}
      <form className="grid grid-cols-2 gap-6">
        {/* Contract Date */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Contract Date<span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>

        {/* Department */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Department<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter department"
            required
          />
        </div>

        {/* Designation */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Designation<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter designation"
            required
          />
        </div>

        {/* Basic Salary */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Basic Salary<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter basic salary"
            required
          />
        </div>

        {/* Hourly Rate */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">Hourly Rate</label>
          <input
            type="number"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter hourly rate"
          />
        </div>

        {/* Payslip Type */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Payslip Type<span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select payslip type</option>
            <option value="monthly">Monthly</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        {/* Office Shift */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Office Shift<span className="text-red-500">*</span>
          </label>
          <select
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select office shift</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>

        {/* Contract End */}
        <div className="col-span-1">
          <label className="block font-medium text-gray-700">
            Contract End
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>

        {/* Leave Categories */}
        <div className="col-span-2">
          <label className="block font-medium text-gray-700">
            Leave Categories
          </label>
          <textarea
            rows="3"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter leave categories"
          />
        </div>

        {/* Role Description */}
        <div className="col-span-2">
          <label className="block font-medium text-gray-700">
            Role Description
          </label>
          <textarea
            rows="5"
            className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            placeholder="Enter role description"
          />
        </div>
      </form>

      {/* Update Button */}
      <div className="mt-8 flex justify-end">
        <button className="rounded bg-primary px-6 py-2 text-white shadow-md transition hover:bg-blue-600">
          Update Contract
        </button>
      </div>
    </div>
  );
};

export default EmployeeContractSection;
