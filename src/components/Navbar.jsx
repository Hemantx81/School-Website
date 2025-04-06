import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSchool, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "Our History", path: "/about/history" },
        { name: "Mission & Vision", path: "/about/mission" },
        { name: "Facilities", path: "/about/facilities" },
      ],
    },
    {
      name: "Academics",
      path: "/academics",
      dropdown: [
        { name: "Curriculum", path: "/academics/curriculum" },
        { name: "Departments", path: "/academics/departments" },
        { name: "Calendar", path: "/academics/calendar" },
      ],
    },
    { name: "Admissions", path: "/admissions" },
    { name: "News & Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FaSchool className="text-blue-600 text-3xl" />
              <span className="text-xl font-bold text-gray-800">
                Bright Future Academy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium flex items-center"
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                  {item.dropdown && (
                    <FaChevronDown className="ml-1 text-xs transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                      activeDropdown === item.name ? "block" : "hidden"
                    } group-hover:block`}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-md">
          {navItems.map((item) => (
            <div key={item.name}>
              <div className="flex flex-col">
                <Link
                  to={item.path}
                  className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md font-medium"
                  onClick={() => {
                    if (!item.dropdown) setIsOpen(false);
                    toggleDropdown(item.name);
                  }}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    {item.dropdown && (
                      <FaChevronDown
                        className={`text-xs transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>
                </Link>

                {/* Mobile Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-4 py-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <Link
            to="/apply"
            className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
