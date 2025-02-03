import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ title, icon, link, children }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle children visibility

  return (
    <li>
      {/* Parent Menu Item */}
      <div
        className="group flex cursor-pointer items-center justify-between px-6 py-4 hover:bg-gray-200"
        onClick={() => setIsOpen(!isOpen)} // Toggle open state for submenu
      >
        {/* Link for the parent menu item */}
        {link ? (
          <Link
            to={link}
            className="flex w-full items-center gap-4 group-hover:text-primary"
          >
            <span className="inline-block text-xl">{icon}</span>
            <span className="group-hover:text-primary">{title}</span>
          </Link>
        ) : (
          <div className="flex w-full items-center gap-4 group-hover:text-primary">
            <span className="inline-block text-xl">{icon}</span>
            <span className="group-hover:text-primary">{title}</span>
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
        <ul className="ml-4 mt-2 border-l border-border">
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
                  className="hover:bg-dark-primary block rounded p-2 hover:text-primary"
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
