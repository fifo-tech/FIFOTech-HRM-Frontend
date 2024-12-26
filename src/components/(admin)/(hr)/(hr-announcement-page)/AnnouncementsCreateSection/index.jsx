import { useState } from "react";

const AnnouncementsCreateSection = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [department, setDepartment] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title || !startDate || !endDate || !summary) {
      alert("Please fill in all required fields.");
      return;
    }

    const announcement = {
      title,
      startDate,
      endDate,
      department,
      summary,
      description,
    };

    console.log("New Announcement:", announcement);
    alert("Announcement added successfully!");
    setTitle("");
    setStartDate("");
    setEndDate("");
    setDepartment("");
    setSummary("");
    setDescription("");
  };

  return (
    <div className="mx-auto max-w-4xl rounded-md border border-gray-200 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">
          Add New Announcement
        </h1>
        <button className="rounded-lg bg-primary px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Hide
        </button>
      </div>

      {/* Horizontal Line */}
      <hr className="mb-6 border-gray-300" />

      {/* Form */}
      <div className="space-y-4">
        {/* Row 1: Title, Start Date, End Date */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-700"
            >
              Start Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-700"
            >
              End Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Row 2: Department, Summary */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select department</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="summary"
              className="block text-sm font-medium text-gray-700"
            >
              Summary <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="summary"
              placeholder="Enter summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Row 3: Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description <span className="text-gray-500"></span>
          </label>
          <textarea
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
          <div className="mt-2 flex space-x-2 text-sm text-gray-600">
            <button className="rounded-lg bg-gray-200 px-2 py-1 shadow-sm hover:bg-gray-300">
              Bold
            </button>
            <button className="rounded-lg bg-gray-200 px-2 py-1 shadow-sm hover:bg-gray-300">
              Italic
            </button>
            <button className="rounded-lg bg-gray-200 px-2 py-1 shadow-sm hover:bg-gray-300">
              Underline
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 text-right">
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-primary px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsCreateSection;
