import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeeProfilePictureSection = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const validExtensions = [
        "image/gif",
        "image/png",
        "image/jpg",
        "image/jpeg",
      ];
      if (validExtensions.includes(selectedFile.type)) {
        setFile(URL.createObjectURL(selectedFile));
      } else {
        alert("Invalid file type. Please upload a gif, png, jpg, or jpeg.");
      }
    }
  };

  return (
    <div className="my-6 min-h-screen bg-gray-100">
      <div className="mx-4 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        {/* Title */}
        <h6 className="mb-6 flex items-center text-xl text-gray-600">
          <FontAwesomeIcon
            icon={faImage}
            className="mr-2 text-primary"
            aria-hidden="true"
          />
          Profile Picture
        </h6>

        {/* Profile Picture Section */}
        <form>
          {/* Profile Picture Preview */}
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4 h-32 w-32">
              {file ? (
                <img
                  src={file}
                  alt="Profile Preview"
                  className="h-full w-full rounded-full border border-gray-300 object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-300 bg-gray-200">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>

            {/* File Input */}
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept=".gif,.png,.jpg,.jpeg"
              onChange={handleFileChange}
              className="mt-2 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="mt-2 text-sm text-gray-500">
              Upload files only: <strong>gif, png, jpg, jpeg</strong>
            </p>
          </div>

          {/* Update Picture Button */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-2 text-white shadow-md transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update Picture
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeProfilePictureSection;
