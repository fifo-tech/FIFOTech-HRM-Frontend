import {
  faDownload,
  faFolder,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EmployeeDocumentsSection = ({ id }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [entries, setEntries] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [newDocument, setNewDocument] = useState({
    doc_name: "",
    doc_type: "",
    doc_file: null,
  });

  const entriesOptions = [5, 10, 15, 20];

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${apiUrl}/get-documents/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch documents");
      }

      const data = await response.json();
      console.log("Fetched Documents:", data); // Debugging

      setDocuments(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error("Error fetching documents:", error);
      setDocuments([]);
    }
  };

  const handleDeleteDocument = async (docId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${apiUrl}/delete-document/${docId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        Swal.fire("Deleted!", "Document has been deleted.", "success");
        fetchDocuments(); // Refresh the document list
      } else {
        Swal.fire("Error!", "Failed to delete the document.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  const handleDownloadDocument = async (docId) => {
    const token = localStorage.getItem("token");

    try {
      // Call the backend to get the document
      const response = await fetch(`${apiUrl}/download-document/${docId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Convert the response into a blob (binary data)
        const blob = await response.blob();

        // Create a temporary download link
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = docId; // You can set a custom name here based on the document

        // Trigger the download
        link.click();
      } else {
        Swal.fire("Error", "Failed to download the document.", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Something went wrong during the download.", "error");
    }
  };

  const handleAddDocument = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("doc_name", newDocument.doc_name);
    formData.append("doc_type", newDocument.doc_type);
    formData.append("doc_file", newDocument.doc_file);

    try {
      const response = await fetch(`${apiUrl}/add-documents`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.ok) {
        setNewDocument({
          doc_name: "",
          doc_type: "",
          doc_file: null,
        });

        document.getElementById("file-input").value = "";
        Swal.fire("Success!", "Document added successfully!", "success");
        fetchDocuments();
      } else {
        Swal.fire("Error!", "Failed to add document.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.doc_name &&
      doc.doc_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredDocuments.length / entries);
  const displayedDocuments = filteredDocuments.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  return (
    <div className="mx-4 my-6 max-w-3xl rounded-lg bg-white p-6 shadow">
      <h2 className="flex items-center text-xl font-semibold text-gray-800">
        <FontAwesomeIcon icon={faFolder} className="mr-2 text-primary" />
        Documents
      </h2>
      <hr className="my-4" />

      <div className="mb-4 flex items-center justify-between">
        <div>
          <label className="mr-2 text-gray-600">Show entries:</label>
          <select
            className="rounded border px-2 py-1 text-gray-700"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            {entriesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <input
            type="text"
            className="rounded border px-4 py-2 text-gray-700"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <table className="w-full table-auto border bg-white shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-sm">
            <th className="border px-4 py-2 text-left text-gray-700">
              DOCUMENT NAME
            </th>
            <th className="border px-4 py-2 text-left text-gray-700">
              DOCUMENT TYPE
            </th>
            <th className="border px-4 py-2 text-left text-gray-700">
              DOCUMENT FILE
            </th>
            <th className="border px-4 py-2 text-left text-gray-700">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {displayedDocuments.map((doc, index) => (
            <tr key={index} className="border-t">
              <td className="px-4 py-2 text-gray-600">{doc.doc_name}</td>
              <td className="px-4 py-2 text-gray-600">{doc.doc_type}</td>
              <td className="px-4 py-2 text-gray-600">
                <a
                  href={`${doc.doc_file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View File
                </a>
              </td>
              <td className="text-center">
                <div className="flex items-center justify-center space-x-2">
                  {" "}
                  {/* Added flex container */}
                  <button
                    className="flex items-center justify-center rounded-full bg-green-500 p-2 text-white hover:bg-green-600 focus:outline-none"
                    onClick={() => handleDownloadDocument(doc.id)}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                  <button
                    className="flex items-center justify-center rounded-full bg-red-500 p-2 text-white hover:bg-red-600 focus:outline-none"
                    onClick={() => handleDeleteDocument(doc.id)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 flex justify-end">
        <button
          className="rounded-l-md bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="bg-primary px-4 py-2 text-gray-600">
          {currentPage}
        </span>
        <button
          className="rounded-r-md bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Add New Document
        </h2>
        <hr className="my-4" />
        <form onSubmit={handleAddDocument}>
          <input
            type="text"
            placeholder="Enter document name"
            className="block w-full rounded border p-2"
            value={newDocument.doc_name}
            required
            onChange={(e) =>
              setNewDocument({ ...newDocument, doc_name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter document type"
            className="mt-2 block w-full rounded border p-2"
            value={newDocument.doc_type}
            required
            onChange={(e) =>
              setNewDocument({ ...newDocument, doc_type: e.target.value })
            }
          />
          <input
            type="file"
            // value={newDocument.doc_file}
            id="file-input"
            className="mt-2 block w-full rounded border p-2"
            required
            onChange={(e) =>
              setNewDocument({ ...newDocument, doc_file: e.target.files[0] })
            }
          />
          <button
            type="submit"
            className="mt-4 rounded bg-primary px-4 py-2 text-white hover:bg-indigo-600"
          >
            Add Document
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDocumentsSection;
