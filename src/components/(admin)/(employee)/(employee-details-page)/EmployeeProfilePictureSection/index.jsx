import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EmployeeProfilePictureSection = ({ id }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProfilePhoto = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found in local storage");
        }

        const response = await fetch(`${apiUrl}/employee-profile/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile photo");
        }

        const { data } = await response.json();
        setProfilePhoto(data.employee.profile_photo);
      } catch (error) {
        console.error("Error fetching profile photo:", error);
      }
    };

    fetchProfilePhoto();
  }, [id, apiUrl]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validExtensions = [
        "image/gif",
        "image/png",
        "image/jpg",
        "image/jpeg",
      ];
      if (validExtensions.includes(file.type)) {
        setFile(URL.createObjectURL(file));
        setSelectedFile(file);
      } else {
        alert("Invalid file type. Please upload a gif, png, jpg, or jpeg.");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please select a profile picture to upload.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("profile_picture", selectedFile); // Match the backend field name

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in local storage");
      }

      const response = await fetch(`${apiUrl}/update-employee/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // DO NOT set Content-Type manually
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Profile picture updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        setProfilePhoto(URL.createObjectURL(selectedFile));
      } else {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: data.message || "Failed to update profile picture.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while updating the profile picture.",
      });
      console.error("Error updating profile picture:", error);
    }
  };

  return (
    <div className="my-6 min-h-screen bg-gray-100">
      <div className="mx-4 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
        <h6 className="mb-6 flex items-center text-xl text-gray-600">
          <FontAwesomeIcon
            icon={faImage}
            className="mr-2 text-primary"
            aria-hidden="true"
          />
          Profile Picture
        </h6>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4 h-32 w-32">
              {profilePhoto && !file ? (
                <img
                  src={profilePhoto}
                  alt="Current Profile"
                  className="h-full w-full rounded-full border border-gray-300 object-cover"
                />
              ) : file ? (
                <img
                  src={file}
                  alt="Selected Profile Preview"
                  className="h-full w-full rounded-full border border-gray-300 object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-300 bg-gray-200">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}
            </div>

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
