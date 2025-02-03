import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const apiUrl = import.meta.env.VITE_API_URL;

const AddSelfAttendanceCreateSection = ({ employeeId }) => {
  const [attendance, setAttendance] = useState({
    intime: null,
    outtime: null,
  });
  const [lateReason, setLateReason] = useState("");
  const [earlyLeaveReason, setEarlyLeaveReason] = useState("");

  const handleClockIn = async () => {
    const token = localStorage.getItem("token");
    const currentTime = new Date().toISOString();

    try {
      const response = await fetch(`${apiUrl}/clock-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          intime: currentTime,
          late_reason: lateReason,
        }),
      });

      const data = await response.json();

      // Checking the "success" field from the Laravel API
      if (data.success) {
        setAttendance({ ...attendance, intime: currentTime });
        Swal.fire("Success!", "Clock-in recorded successfully!", "success");
      } else {
        //  If Clock In has already been done, an info message will be displayed.
        if (
          data.code === 400 &&
          data.message === "Clock In already recorded for today"
        ) {
          Swal.fire("Info!", data.message, "info");
        } else {
          Swal.fire(
            "Error!",
            data.message || "Failed to record clock-in.",
            "error",
          );
        }
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  const handleClockOut = async () => {
    const token = localStorage.getItem("token");
    const currentTime = new Date().toISOString();

    try {
      const response = await fetch(`${apiUrl}/clock-out`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          outtime: currentTime,
          early_leave_reason: earlyLeaveReason, // Early leave reason send
        }),
      });

      const data = await response.json();

      if (data.success) {
        setAttendance({ ...attendance, outtime: currentTime });
        Swal.fire("Success!", "Clock-out recorded successfully!", "success");
      } else {
        if (
          data.code === 400 &&
          data.message === "Clock Out already recorded for today"
        ) {
          Swal.fire("Info!", data.message, "info");
        } else {
          Swal.fire(
            "Error!",
            data.message || "Failed to record clock-out.",
            "error",
          );
        }
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  // Clock in and Clock Out er data Fetched

  useEffect(() => {
    // Take today's attendance data from API
    const fetchAttendance = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(`${apiUrl}/in-out-time`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (data.success) {
          console.log(data.data.clock_in);
          setAttendance({
            intime: data.data.clock_in,
            outtime: data.data.clock_out,
          });
        } else {
          Swal.fire("Error!", data.message, "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
        Attendance
      </h2>

      <div className="mb-4">
        <textarea
          placeholder="Late Reason"
          className="mt-2 w-full rounded-lg border p-2 text-sm focus:ring focus:ring-blue-300"
          value={lateReason}
          onChange={(e) => setLateReason(e.target.value)}
          rows="3"
        />
        <button
          className="w-full rounded-lg bg-green-500 px-5 py-3 text-white transition hover:bg-green-300"
          onClick={handleClockIn}
        >
          Clock In
        </button>
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Early Leave Reason"
          className="mt-2 w-full rounded-lg border p-2 text-sm focus:ring focus:ring-blue-300"
          value={earlyLeaveReason}
          onChange={(e) => setEarlyLeaveReason(e.target.value)}
          rows="3"
        />
        <button
          className="w-full rounded-lg bg-primary px-5 py-3 text-white transition hover:bg-indigo-300"
          onClick={handleClockOut}
        >
          Clock Out
        </button>
      </div>

      <div className="mt-4 rounded-lg bg-gray-50 p-4 shadow-sm">
        <p className="text-gray-700">
          <strong>In-Time:</strong>{" "}
          {attendance.intime ? attendance.intime : "Not yet recorded"}
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Out-Time:</strong>{" "}
          {attendance.outtime ? attendance.outtime : "Not yet recorded"}
        </p>
      </div>
    </div>
  );
};

export default AddSelfAttendanceCreateSection;
