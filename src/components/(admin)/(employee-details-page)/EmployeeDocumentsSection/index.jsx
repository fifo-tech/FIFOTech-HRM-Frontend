import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EmployeeDocumentsSection = () => {
  const [entries, setEntries] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const entriesOptions = [5, 10, 15, 20];

  const handleAddDocument = (e) => {
    e.preventDefault();
    // Logic to handle adding a new document (not implemented here)
    alert("Document added successfully!");
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredDocuments.length / entries);
  const displayedDocuments = filteredDocuments.slice(
    (currentPage - 1) * entries,
    currentPage * entries,
  );

  return (
    <div className="mx-4 my-6 max-w-4xl rounded-lg bg-white p-6 shadow">
      {/* Documents Section */}
      <div className="mb-6">
        <h2 className="flex items-center text-xl font-semibold text-gray-800">
          <FontAwesomeIcon icon={faFolder} className="mr-2 text-primary" />
          Documents
        </h2>
        <hr className="my-4" />

        {/* Controls */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <label htmlFor="entries" className="mr-2 text-gray-600">
              Show entries:
            </label>
            <select
              id="entries"
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

        {/* Document Table */}
        <table className="w-full table-auto border bg-white shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left text-gray-700">
                DOCUMENT NAME
              </th>
              <th className="border px-4 py-2 text-left text-gray-700">
                DOCUMENT TYPE
              </th>
              <th className="border px-4 py-2 text-left text-gray-700">
                DOCUMENT FILE
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedDocuments.map((doc, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 text-gray-600">{doc.name}</td>
                <td className="px-4 py-2 text-gray-600">{doc.type}</td>
                <td className="px-4 py-2 text-gray-600">{doc.file}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 flex justify-end">
          <button
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-gray-600">{currentPage}</span>
          <button
            className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {/* Add New Document Section */}
      <div className="mt-8 rounded-lg bg-white p-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Add New Document
        </h2>
        <hr className="my-4" />

        <form onSubmit={handleAddDocument}>
          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Document Name</label>
            <input
              type="text"
              className="w-full rounded border px-4 py-2 text-gray-700"
              placeholder="Enter document name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Document Type</label>
            <input
              type="text"
              className="w-full rounded border px-4 py-2 text-gray-700"
              placeholder="Enter document type"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Document File</label>
            <input
              type="file"
              className="w-full rounded border px-4 py-2 text-gray-700"
              accept=".png,.jpg,.jpeg,.gif,.txt,.pdf,.xls,.xlsx,.doc,.docx"
              required
            />
            <small className="text-gray-500">
              Upload files only: png, jpg, jpeg, gif, txt, pdf, xls, xlsx, doc,
              docx
            </small>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded bg-primary px-4 py-2 text-white hover:bg-blue-600"
            >
              Add Document
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeDocumentsSection;
