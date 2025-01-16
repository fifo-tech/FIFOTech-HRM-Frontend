import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Function to update attendance via API call
async function updateAttendance(data, showSuccessModal, handleReset) {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("No token found. Please log in.");
    return;
  }

  const response = await fetch("http://localhost:8000/api/update-attendance", {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data), // Convert data object to JSON
  });

  const result = await response.json();
  if (result.success) {
    // Show custom success message on screen
    showSuccessModal();
  } else {
    alert(`Error: ${result.message}`);
  }
}

function ManualAttendanceCreateSection({ toggleHideCreateForm }) {
  const [employeeId, setEmployeeId] = useState("");
  const [date, setDate] = useState("");
  const [loginTime, setLoginTime] = useState("");
  const [logoutTime, setLogoutTime] = useState("");
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleReset = () => {
    setEmployeeId("");
    setDate("");
    setLoginTime("");
    setLogoutTime("");
  };

  const handleSave = () => {
    if (!employeeId || !date || !loginTime || !logoutTime) {
      alert("Please fill in all required fields.");
      return;
    }

    // Format loginTime and logoutTime to 12-hour format (h:i A)
    const formatTime = (time) => {
      const [hours, minutes] = time.split(":");
      const date = new Date();
      date.setHours(hours);
      date.setMinutes(minutes);
      return date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    };

    // Prepare the data to send in the API request
    const data = {
      emp_id: employeeId,
      date: date,
      clock_in: formatTime(loginTime), // Format to 12-hour time
      clock_out: formatTime(logoutTime), // Format to 12-hour time
    };

    // Call the updateAttendance function with the prepared data
    updateAttendance(data, () => setShowModal(true), handleReset); // Pass the modal and reset function
  };

  return (
    <section className="container mx-4 my-8 max-w-4xl rounded-lg bg-white shadow-md">
      <div className="rounded-md bg-white p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-lg font-semibold">Manual Attendance</h6>
          <button
            onClick={toggleHideCreateForm}
            className="rounded bg-primary px-4 py-1 text-white hover:bg-indigo-700"
          >
            <FontAwesomeIcon icon={faMinus} />
            <span>Hide</span>
          </button>
        </div>
        <hr className="mb-4" />

        {/* Form */}
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Employee */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee ID<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Enter employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
              />
            </div>

            {/* Select Date */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Login Time */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Login Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={loginTime}
                onChange={(e) => setLoginTime(e.target.value)}
                required
              />
            </div>

            {/* Logout Time */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Logout Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                className="w-full rounded-md border px-3 py-2 text-sm"
                value={logoutTime}
                onChange={(e) => setLogoutTime(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-600"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded bg-primary px-4 py-2 text-white hover:bg-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-1/3">
            <h3 className="text-xl font-semibold text-green-600">Attendance Updated Successfully!</h3>
            <p className="mt-4 text-gray-700">Your attendance has been updated. Click "OK" to reset the form.</p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => {
                  setShowModal(false); // Close the modal
                  handleReset(); // Reset the form
                }}
                className="bg-primary px-4 py-2 text-white rounded hover:bg-indigo-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ManualAttendanceCreateSection;
