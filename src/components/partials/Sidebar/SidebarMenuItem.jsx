import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ title, icon, link, children }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle children visibility

  return (
    <li className="mb-2">
      {/* Parent Menu Item */}
      <div
        className="flex cursor-pointer items-center justify-between rounded p-2 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)} // Toggle open state for submenu
      >
        {/* Link for the parent menu item */}
        {link ? (
          <Link
            to={link}
            className="flex w-full items-center hover:text-gray-300"
          >
            {icon} {/* Render the passed icon */}
            <span className="ml-2">{title}</span>
          </Link>
        ) : (
          <div className="flex w-full items-center">
            {icon}
            <span className="ml-2">{title}</span>
          </div>
        )}

        {/* Arrow Icon */}
        {children && (
          <FontAwesomeIcon
            icon={isOpen ? faAngleUp : faAngleDown}
            className="text-sm"
          />
        )}
      </div>

      {/* Render Submenu Items */}
      {children && isOpen && (
        <ul className="ml-4 mt-2 border-l border-gray-600">
          {children.map((child, index) => (
            <li key={index} className="mb-1">
              {/* Recursive Rendering for Nested Children */}
              {child.children ? (
                <SidebarMenuItem
                  title={child.title}
                  icon={null}
                  children={child.children}
                  link={child.link}
                />
              ) : (
                <Link
                  to={child.link}
                  className="block rounded p-2 hover:bg-gray-700 hover:text-gray-300"
                >
                  {child.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;
