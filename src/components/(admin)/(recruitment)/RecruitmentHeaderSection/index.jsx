import {
  faCheckCircle,
  faListAlt,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function RecruitmentHeaderSection() {
  return (
    <section className="my-8 ml-4 mr-10">
      <div className="flex h-12 items-center justify-between rounded-md bg-background p-4">
        {/* Applicants */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faUsers}
            className="mb-2 text-lg text-blue-500"
          />

          <div className="flex flex-col p-1">
            <Link
              to="/applicants-list"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">Applicants</span>
            </Link>
            <span className="text-xs text-gray-500">View Applicants</span>
          </div>
        </div>

        {/*  Create Career Post */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faPlus}
            className="mb-2 text-lg text-primary"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/create-career-post"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">
                Create Career Post
              </span>
            </Link>
            <span className="text-xs text-gray-500">Set up Career Post</span>
          </div>
        </div>

        {/* Career Posts List */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faListAlt}
            className="mb-2 text-lg text-yellow-500"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/career-posts-list"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">
                Career Posts List
              </span>
            </Link>
            <span className="text-xs text-gray-500">View Career Posts</span>
          </div>
        </div>
        {/* Career Completed List */}
        <div className="flex flex-row items-center text-center">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="mb-2 text-lg text-blue-500"
          />
          <div className="flex flex-col p-1">
            <Link
              to="/career-completed-list"
              className="text-gray-700 hover:text-blue-500"
            >
              <span className="font-medium text-gray-700">
                Career Completed List
              </span>
            </Link>
            <span className="text-xs text-gray-500">
              View Career Completed List
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruitmentHeaderSection;
