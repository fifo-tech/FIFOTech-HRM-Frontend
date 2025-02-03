import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeesShiftAndSchedulingCreate = ({ toggleHideCreateForm }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    shift: "",
    saturdayStart: "",
    saturdayEnd: "",
    sundayStart: "",
    sundayEnd: "",
    mondayStart: "",
    mondayEnd: "",
    tuesdayStart: "",
    tuesdayEnd: "",
    wednesdayStart: "",
    wednesdayEnd: "",
    thursdayStart: "",
    thursdayEnd: "",
    fridayStart: "",
    fridayEnd: "",
  });

  // const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setForm({
      shift: "",
      saturdayStart: "",
      saturdayEnd: "",
      sundayStart: "",
      sundayEnd: "",
      mondayStart: "",
      mondayEnd: "",
      tuesdayStart: "",
      tuesdayEnd: "",
      wednesdayStart: "",
      wednesdayEnd: "",
      thursdayStart: "",
      thursdayEnd: "",
      fridayStart: "",
      fridayEnd: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${import.meta.env.VITE_API_URL}/shifts`,
        { ...form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      navigate("/shifts");
    } catch (error) {
      console.error("Error creating shift:", error);
    }
  };

  return (
    <div className="mx-6 my-8 min-h-screen">
      <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Create New Shift
          </h2>
          <button
            onClick={toggleHideCreateForm}
            className="rounded bg-primary px-4 py-1 text-white hover:bg-indigo-700"
          >
            <FontAwesomeIcon icon={faMinus} />
            <span>Hide</span>
          </button>
        </div>
        <hr className="my-4 border-gray-300" />
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Shift Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Shift Name
            </label>
            <select
              name="shift"
              value={form.shift}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Select Shift</option>
              <option value="Morning Shift">Morning Shift</option>
              <option value="Day Shift">Day Shift</option>
              <option value="Night Shift">Night Shift</option>
            </select>
          </div>

          {/* Time Inputs for Each Day */}
          {[
            "saturday",
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
          ].map((day) => (
            <div key={day} className="grid grid-cols-2 gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium capitalize text-gray-700">
                  {day} Start Time
                </label>
                <input
                  type="time"
                  name={`${day}Start`}
                  value={form[`${day}Start`]}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium capitalize text-gray-700">
                  {day} End Time
                </label>
                <input
                  type="time"
                  name={`${day}End`}
                  value={form[`${day}End`]}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-md border border-gray-300 px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeesShiftAndSchedulingCreate;
