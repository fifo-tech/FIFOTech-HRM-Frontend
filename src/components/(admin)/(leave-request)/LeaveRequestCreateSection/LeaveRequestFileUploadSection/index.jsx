import { useState } from "react";

const LeaveRequestFileUploadSection = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const validExtensions = [
        "application/pdf",
        "image/gif",
        "image/png",
        "image/jpg",
        "image/jpeg",
      ];
      if (validExtensions.includes(selectedFile.type)) {
        setFile(URL.createObjectURL(selectedFile));
      } else {
        alert(
          "Invalid file type. Please upload a PDF, gif, png, jpg, or jpeg.",
        );
      }
    }
  };

  return (
    <div className="mx-4 my-8 flex h-72 w-72 flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">Leave Attachment</h2>
      <div className="mb-4 h-32 w-32">
        {file ? (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-gray-500">File selected</span>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center border-2 border-gray-300 bg-gray-200">
            <span className="text-gray-500">No file chosen</span>
          </div>
        )}
      </div>
      <input
        type="file"
        accept=".pdf,.gif,.png,.jpg,.jpeg"
        onChange={handleFileChange}
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Choose file..."
      />
      <p className="mt-2 text-sm text-gray-500">
        Upload files only: pdf, gif, png, jpg, jpeg
      </p>
    </div>
  );
};

export default LeaveRequestFileUploadSection;
