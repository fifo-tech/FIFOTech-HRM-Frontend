import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CreateCareerPost = () => {
  const [responsibilities, setResponsibilities] = useState([""]);
  const [requirements, setRequirements] = useState([""]);
  const [offers, setOffers] = useState([""]);

  const handleAddField = (setState, state) => {
    setState([...state, ""]);
  };

  const handleRemoveField = (setState, state, index) => {
    const updatedFields = state.filter((_, i) => i !== index);
    setState(updatedFields);
  };

  const handleInputChange = (setState, state, index, value) => {
    const updatedFields = state.map((item, i) => (i === index ? value : item));
    setState(updatedFields);
  };

  return (
    <div className="min-w-4xl mx-4 my-6 rounded-md bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Create a New Job</h2>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">Job Title</label>
        <input
          type="text"
          placeholder="Enter Job Title"
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium">
          Overview/Description
        </label>
        <textarea
          placeholder="Enter Job Overview"
          className="min-h-40 w-full rounded border px-3 py-2"
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Salary</label>
          <input
            type="text"
            placeholder="Enter Salary"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Experience</label>
          <input
            type="text"
            placeholder="Enter Experience"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Education</label>
          <input
            type="text"
            placeholder="Enter Education Qualification"
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Deadline</label>
          <input type="date" className="w-full rounded border px-3 py-2" />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-medium">Responsibilities</h3>
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder="Enter Responsibility"
              value={responsibility}
              onChange={(e) =>
                handleInputChange(
                  setResponsibilities,
                  responsibilities,
                  index,
                  e.target.value,
                )
              }
              className="mr-2 w-full rounded border px-3 py-2"
            />
            <button
              onClick={() =>
                handleRemoveField(setResponsibilities, responsibilities, index)
              }
              className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddField(setResponsibilities, responsibilities)}
          className="rounded bg-primary px-3 py-1 text-white hover:bg-indigo-600"
        >
          + Add
        </button>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-medium">Requirements</h3>
        {requirements.map((requirement, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder="Enter Requirement"
              value={requirement}
              onChange={(e) =>
                handleInputChange(
                  setRequirements,
                  requirements,
                  index,
                  e.target.value,
                )
              }
              className="mr-2 w-full rounded border px-3 py-2"
            />
            <button
              onClick={() =>
                handleRemoveField(setRequirements, requirements, index)
              }
              className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddField(setRequirements, requirements)}
          className="rounded bg-primary px-3 py-1 text-white hover:bg-indigo-600"
        >
          + Add
        </button>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-medium">What We Offer</h3>
        {offers.map((offer, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              placeholder="Enter Offer"
              value={offer}
              onChange={(e) =>
                handleInputChange(setOffers, offers, index, e.target.value)
              }
              className="mr-2 w-full rounded border px-3 py-2"
            />
            <button
              onClick={() => handleRemoveField(setOffers, offers, index)}
              className="rounded bg-red-400 p-2 text-sm text-white hover:bg-red-600"
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
        <button
          onClick={() => handleAddField(setOffers, offers)}
          className="rounded bg-primary px-3 py-1 text-white hover:bg-indigo-600"
        >
          + Add
        </button>
      </div>

      <div className="flex justify-end">
        <button className="mt-4 w-36 rounded bg-indigo-500 py-2 text-white hover:bg-indigo-600">
          Submit Job Post
        </button>
      </div>
    </div>
  );
};

export default CreateCareerPost;
