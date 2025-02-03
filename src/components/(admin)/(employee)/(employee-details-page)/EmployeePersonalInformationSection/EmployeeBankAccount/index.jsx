import { useEffect, useState } from "react";

const EmployeeBankAccount = ({ onSave, bankAccount }) => {
  const [localBankAccount, setLocalBankAccount] = useState(bankAccount);

  // Sync local state when parent state updates
  useEffect(() => {
    setLocalBankAccount(bankAccount);
  }, [bankAccount]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalBankAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave(localBankAccount); // Pass updated data to parent
    }
    console.log("Bank Account Details Saved:", localBankAccount);
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700">Bank Account</h3>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
        {/* Bank Name */}
        <div>
          <label
            htmlFor="bank_name"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Name
          </label>
          <input
            type="text"
            id="bank_name"
            name="bank_name"
            value={localBankAccount.bank_name || ""}
            onChange={handleInputChange}
            placeholder="Enter bank name"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Bank Account Number */}
        <div>
          <label
            htmlFor="bank_account_number"
            className="block text-sm font-medium text-gray-700"
          >
            Bank Account Number
          </label>
          <input
            type="text"
            id="bank_account_number"
            name="bank_account_number"
            value={localBankAccount.bank_account_number || ""}
            onChange={handleInputChange}
            placeholder="Enter account number"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Branch */}
        <div>
          <label
            htmlFor="branch"
            className="block text-sm font-medium text-gray-700"
          >
            Branch
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={localBankAccount.branch || ""}
            onChange={handleInputChange}
            placeholder="Enter branch name"
            className="mt-1 w-full rounded-lg border p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-sm"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-lg bg-primary px-3 py-2 text-white shadow-md transition-all duration-200 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save Bank Account Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeBankAccount;
