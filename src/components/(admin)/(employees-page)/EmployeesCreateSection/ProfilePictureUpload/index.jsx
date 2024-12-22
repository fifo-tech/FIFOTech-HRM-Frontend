import { useState } from "react";

const ProfilePictureUpload = () => {
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
    <div className="mx-4 my-8 flex h-72 w-72 flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-bold">Profile Picture</h2>
      <div className="mb-4 h-32 w-32">
        {file ? (
          <img
            src={file}
            alt="Profile Preview"
            className="h-full w-full rounded-full border border-gray-300 object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-gray-300 bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <input
        type="file"
        accept=".gif,.png,.jpg,.jpeg"
        onChange={handleFileChange}
        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Choose file..."
      />
      <p className="mt-2 text-sm text-gray-500">
        <span class="text-sm">Upload files only: gif, png, jpg, jpeg</span>
      </p>
    </div>
  );
};

export default ProfilePictureUpload;
