import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function LeaveRequestCreate({ toggleHideCreateForm }) {
  const [halfDay, setHalfDay] = useState(false);

  const handleReset = () => {
    // Add reset functionality
  };

  const handleSave = () => {
    // Add save functionality
  };

  return (
    <section className="container mx-4 my-8 max-w-5xl rounded-lg bg-white p-8 shadow-md">
      <div className="rounded-md bg-white p-2">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h6 className="text-lg font-semibold">Add Leave</h6>
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
                Employee <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Enter employee name"
                required
              />
            </div>

            {/* Leave Type */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Leave Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Enter leave type"
                required
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Start Date */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Start Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full rounded-md border px-3 py-2 text-sm"
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                End Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full rounded-md border px-3 py-2 text-sm"
                required
              />
            </div>
          </div>

          {/* Half Day */}
          <div className="mb-4 mt-4 flex items-center">
            <label className="mr-4 text-sm font-medium">Half Day</label>
            <div
              className={`relative inline-block h-6 w-10 ${
                halfDay ? "bg-primary" : "bg-gray-300"
              } cursor-pointer rounded-full`}
              onClick={() => setHalfDay(!halfDay)}
            >
              <div
                className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform ${
                  halfDay ? "translate-x-4 transform" : ""
                }`}
              />
            </div>
          </div>

          {/* Remarks */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Remarks</label>
            <textarea
              className="w-full rounded-md border px-3 py-2 text-sm"
              rows="3"
              placeholder="Add any additional remarks"
            />
          </div>

          {/* Leave Reason */}
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium">
              Leave Reason <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full rounded-md border px-3 py-2 text-sm"
              rows="3"
              placeholder="Provide a reason for the leave"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
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
    </section>
  );
}

export default LeaveRequestCreate;