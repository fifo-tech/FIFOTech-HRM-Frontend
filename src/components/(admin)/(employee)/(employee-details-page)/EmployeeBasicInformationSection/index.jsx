import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EmployeeBasicInformationSection = ({ id }) => {
  const [employeeData, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    contactNumber: "",
    gender: "",
    emp_id: "",
    date_of_birth: "",
    status: "",
    marital_status: "",
    role: "",
    district: "",
    city: "",
    zip_code: "",
    religion: "",
    blood_group: "",
    nationality: "",
    citizenship: "",
    present_address: "",
    permanent_address: "",
  });

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }

        const response = await fetch(`${apiUrl}/employee-profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }

        const { data } = await response.json();

        setEmployeeData({
          first_name: data.employee.first_name || "",
          last_name: data.employee.last_name || "",
          phone_num: data.employee.phone_num || "",
          gender: data.employee.gender || "",
          empId: data.employee.emp_id || "",
          date_of_birth: data.employee.date_of_birth || "",
          status: data.employee.active_status || "",
          marital_status: data.employee.marital_status || "",
          role: data.employee.role_name || "",
          district: data.employee.district || "",
          city: data.employee.city || "",
          zip_code: data.employee.zip_code || "",
          religion: data.employee.religion || "",
          blood_group: data.employee.blood_group || "",
          nationality: data.employee.nationality || "",
          citizenship: data.employee.citizenship || "",
          present_address: data.employee.present_address || "",
          permanent_address: data.employee.permanent_address || "",
        });
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Clicked");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in local storage");
      }

      const response = await fetch(`${apiUrl}/update-employee/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(employeeData),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Employee information updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: data.message || "Failed to update employee information.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while updating the employee information.",
      });
      console.error("Error updating employee data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-6">
      <div className="mx-4 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
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

        <form
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              value={employeeData.first_name}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={employeeData.last_name}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="phone_num"
              value={employeeData.phone_num}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <label className="block font-medium text-gray-700">Gender</label>
            <select
              name="gender"
              value={employeeData.gender}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Additional fields */}
          {[
            // {
            //   label: "Date of Birth",
            //   name: "dateOfBirth",
            //   value: employeeData.dateOfBirth,
            // },
            {
              label: "Marital Status",
              name: "marital_status",
              value: employeeData.marital_status,
            },
            //  { label: "Role", name: "role", value: employeeData.role },
            {
              label: "District",
              name: "district",
              value: employeeData.district,
            },
            { label: "City", name: "city", value: employeeData.city },
            {
              label: "Zip Code",
              name: "zip_code",
              value: employeeData.zip_code,
            },
            {
              label: "Religion",
              name: "religion",
              value: employeeData.religion,
            },
            {
              label: "Blood Group",
              name: "blood_group",
              value: employeeData.blood_group,
            },
            {
              label: "Nationality",
              name: "nationality",
              value: employeeData.nationality,
            },
            {
              label: "Citizenship",
              name: "citizenship",
              value: employeeData.citizenship,
            },
          ].map(({ label, name, value }, index) => (
            <div key={index}>
              <label className="block font-medium text-gray-700">{label}</label>
              <input
                type="text"
                name={name}
                value={value}
                onChange={handleInputChange}
                className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          ))}

          {/* Date of Birth */}
          <div>
            <label className="block font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              value={employeeData.date_of_birth}
              onChange={handleInputChange}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block font-medium text-gray-700">
              Present Address
            </label>
            <textarea
              name="present_address"
              value={employeeData.present_address}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block font-medium text-gray-700">
              Permanent Address
            </label>
            <textarea
              name="permanent_address"
              value={employeeData.permanent_address}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 p-2.5 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-2 text-white shadow transition hover:bg-primary"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeBasicInformationSection;
