import { useEffect, useState } from "react";

const EmployeeEmergencyContact = ({ onSave, contact }) => {
  const [localContact, setLocalContact] = useState(contact);

  // Sync local state when parent state (contact) updates
  useEffect(() => {
    setLocalContact(contact);
  }, [contact]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(localContact); // Pass updated contact data to parent
    }
    console.log("Emergency Contact Saved:", localContact);
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700">Emergency Contact</h3>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label
            htmlFor="emg_contact_name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="emg_contact_name"
            name="emg_contact_name"
            value={localContact.emg_contact_name || ""}
            onChange={handleInputChange}
            placeholder="Enter name"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Relationship */}
        <div>
          <label
            htmlFor="emg_relationship"
            className="block text-sm font-medium text-gray-700"
          >
            Relationship
          </label>
          <input
            type="text"
            id="emg_relationship"
            name="emg_relationship"
            value={localContact.emg_relationship || ""}
            onChange={handleInputChange}
            placeholder="Enter relationship"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="emg_phone_number"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="emg_phone_number"
            name="emg_phone_number"
            value={localContact.emg_phone_number || ""}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="emg_address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <textarea
            id="emg_address"
            name="emg_address"
            rows="3"
            value={localContact.emg_address || ""}
            onChange={handleInputChange}
            placeholder="Enter address"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-primary px-3 py-2 text-white shadow-md transition-all duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save Emergency Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeEmergencyContact;
