import { useState } from "react";

const PoliciesCreateSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const validExtensions = [
      "image/gif",
      "image/png",
      "image/jpg",
      "image/jpeg",
    ];

    if (selectedFile && !validExtensions.includes(selectedFile.type)) {
      setErrorMessage(
        "Invalid file type. Please upload a gif, png, jpg, or jpeg file.",
      );
      setFile(null);
    } else {
      setErrorMessage("");
      setFile(selectedFile);
    }
  };

  const handleSave = () => {
    if (!title) {
      alert("Title is required.");
      return;
    }

    const formData = {
      title,
      description,
      file,
    };

    console.log("Saved Data:", formData);
    alert("Policy saved successfully!");
  };

  return (
    <div className="mx-4 my-6 max-w-lg rounded-sm border bg-white p-6 shadow-lg">
      <h1 className="mb-6 text-xl font-semibold text-gray-600">
        Create New Policy
      </h1>
      <hr className="border-t-1 mb-6 border-gray-300" />

      {/* Title Field */}
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter policy title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          required
        />
      </div>

      {/* Description Field */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-600"
        >
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          placeholder="Enter policy description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
          required
        ></textarea>
      </div>

      {/* File Upload */}
      <div className="mb-6">
        <label
          htmlFor="attachment"
          className="block text-sm font-medium text-gray-600"
        >
          Attachment<span className="text-red-500">*</span>
        </label>
        <input
          type="file"
          id="attachment"
          onChange={handleFileChange}
          className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:rounded-sm file:border file:border-black file:bg-gray-100 file:px-2 file:py-1 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-200"
          required
        />

        {errorMessage && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}
        <p className="mt-1 text-xs text-gray-600">
          Upload files only: gif, png, jpg, jpeg
        </p>
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button
          onClick={handleSave}
          className="rounded-sm bg-primary px-5 py-2 text-white shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PoliciesCreateSection;
