import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";

const EmployeeContractSection = ({ id }) => {
  const [employee, setEmployee] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${apiUrl}/employee-profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          const { employee, departments, designations } = response.data.data;
          setEmployee(employee);
          setDepartments(departments);
          setDesignations(designations);
        }
      } catch (error) {
        console.error("Error fetching employee details:", error);
      }
    };

    fetchEmployeeDetails();
  }, [id, apiUrl]);

  return (
    <div className="mx-4 my-6 grid min-h-screen max-w-3xl rounded-md bg-white p-6">
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
      {/* <div className="mb-8 grid grid-cols-5 gap-2 bg-white">
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
      </div> */}

      {/* Form Section */}
      {employee ? (
        <form className="grid grid-cols-2 gap-6">
          {/* Add other fields using the same structure */}
          <div>
            <label className="block font-medium text-gray-700">
              Employee ID
            </label>
            <input
              type="text"
              name="empId"
              value={employee.emp_id}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
              readOnly
            />
          </div>

          {/* Contract Date */}
          <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Contract Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.contract_date || ""}
              readOnly
            />
          </div>

          {/* Department */}
          <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Department<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.department_name || ""}
              disabled
            >
              <option value="" disabled>
                Select department
              </option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* Designation */}
          <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Designation<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.designation_name || ""}
              disabled
            >
              <option value="" disabled>
                Select designation
              </option>
              {designations.map((des) => (
                <option key={des.id} value={des.name}>
                  {des.name}
                </option>
              ))}
            </select>
          </div>

          {/* Basic Salary */}
          <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Basic Salary<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.basic_salary || ""}
              readOnly
            />
          </div>

          {/* Hourly Rate */}
          {/* <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Hourly Rate
            </label>
            <input
              type="number"
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.hourly_rate || ""}
              readOnly
            />
          </div> */}

          {/* Payslip Type */}
          {/* <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Payslip Type<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.payslip_type || ""}
              readOnly
            >
              <option value="">Select payslip type</option>
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
            </select>
          </div> */}

          {/* Office Shift */}
          <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Office Shift<span className="text-red-500">*</span>
            </label>
            <select
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.office_shift || ""}
              disabled
            >
              <option value="">Select office shift</option>
              <option value="Morning">Morning</option>
              <option value="Evening">Evening</option>
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
              value={employee.contract_end || ""}
              readOnly
            />
          </div>

          {/* Active Status */}
          <div className="col-span-1">
            <label className="block font-medium text-gray-700">
              Active Status<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm transition-all hover:bg-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              value={employee.active_status || ""}
              readOnly
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
              value={employee.leave_categories || ""}
              readOnly
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
              value={employee.role_description || ""}
              readOnly
            />
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmployeeContractSection;
