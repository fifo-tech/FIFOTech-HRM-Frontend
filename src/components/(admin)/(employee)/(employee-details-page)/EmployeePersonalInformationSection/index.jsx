import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import EmployeeBankAccount from "./EmployeeBankAccount";
import EmployeeBio from "./EmployeeBio";
import EmployeeEmergencyContact from "./EmployeeEmergencyContact";
import EmployeeSocialProfile from "./EmployeeSocialProfile";

const EmployeePersonalInformationSection = ({ id }) => {
  const [employeeData, setEmployeeData] = useState({
    bio: "",
    experience: "",
  });
  const [socialProfiles, setSocialProfiles] = useState({
    facebook: "",
    linkedin: "",
    github: "",
  });
  const [bankAccount, setBankAccount] = useState({
    bank_name: "",
    bank_account_number: "",
    branch: "",
  });
  const [emergencyContact, setEmergencyContact] = useState({
    emg_contact_name: "",
    emg_relationship: "",
    emg_phone_number: "",
    emg_address: "",
  });
  const [activeTab, setActiveTab] = useState("bio"); // Track active tab

  const apiUrl = import.meta.env.VITE_API_URL;

  // Fetch employee data
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
          bio: data.employee.bio || "",
          experience: data.employee.experience || "",
        });
        setSocialProfiles({
          facebook: data.employee.facebook || "",
          linkedin: data.employee.linkedin || "",
          github: data.employee.github || "",
        });
        setBankAccount({
          bank_name: data.employee.bank_name || "",
          bank_account_number: data.employee.bank_account_number || "",
          branch: data.employee.branch || "",
        });
        setEmergencyContact({
          emg_contact_name: data.employee.emg_contact_name || "",
          emg_relationship: data.employee.emg_relationship || "",
          emg_phone_number: data.employee.emg_phone_number || "",
          emg_address: data.employee.emg_address || "",
        });
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, [id]);

  // Update employee data
  const updateEmployeeData = async (updatedData) => {
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
        body: JSON.stringify(updatedData),
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
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="mx-4 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
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

        {/* Tab Links */}
        <div className="text-md mt-2 flex space-x-10 text-primary">
          <p
            className={`cursor-pointer transition-all duration-200 hover:text-primary hover:shadow-md ${activeTab === "bio" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("bio")}
          >
            Bio
          </p>
          <p
            className={`cursor-pointer transition-all duration-200 hover:text-primary hover:shadow-md ${activeTab === "socialProfile" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("socialProfile")}
          >
            Social Profile
          </p>
          <p
            className={`cursor-pointer transition-all duration-200 hover:text-primary hover:shadow-md ${activeTab === "bankAccount" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("bankAccount")}
          >
            Bank Account
          </p>
          <p
            className={`cursor-pointer transition-all duration-200 hover:text-primary hover:shadow-md ${activeTab === "emergencyContact" ? "font-bold" : ""}`}
            onClick={() => setActiveTab("emergencyContact")}
          >
            Emergency Contact
          </p>
        </div>

        {/* Tab Content */}
        <div className="mt-6 space-y-6">
          {activeTab === "bio" && (
            <EmployeeBio
              employeeData={employeeData}
              handleInputChange={(e) => {
                const { name, value } = e.target;
                setEmployeeData((prev) => ({ ...prev, [name]: value }));
              }}
              handleSubmit={() => updateEmployeeData(employeeData)}
            />
          )}
          {activeTab === "socialProfile" && (
            <EmployeeSocialProfile
              socialProfiles={socialProfiles}
              onInputChange={(e) => {
                const { name, value } = e.target;
                setSocialProfiles((prev) => ({ ...prev, [name]: value }));
              }}
              onSubmit={() => updateEmployeeData(socialProfiles)}
            />
          )}
          {activeTab === "bankAccount" && (
            <EmployeeBankAccount
              bankAccount={bankAccount}
              onSave={(updatedBankAccount) => {
                setBankAccount(updatedBankAccount);
                updateEmployeeData(updatedBankAccount);
              }}
            />
          )}
          {activeTab === "emergencyContact" && (
            <EmployeeEmergencyContact
              contact={emergencyContact}
              onSave={(updatedContact) => {
                setEmergencyContact(updatedContact);
                updateEmployeeData(updatedContact);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeePersonalInformationSection;
