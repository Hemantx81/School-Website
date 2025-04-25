import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUsers,
  FiBook,
  FiCalendar,
  FiSettings,
  FiPieChart,
  FiAward,
} from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FiPieChart className="w-5 h-5" />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      name: "Teachers",
      path: "/teachers",
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FiBook className="w-5 h-5" />,
    },
    {
      name: "Grades",
      path: "/grades",
      icon: <FiAward className="w-5 h-5" />,
    },
    {
      name: "Schedule",
      path: "/schedule",
      icon: <FiCalendar className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FiSettings className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* School Logo/Name */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <img
            src="/assets/images/school-logo.png"
            alt="School Logo"
            className="h-8 w-auto mr-2"
          />
          <span className="text-xl font-semibold text-gray-800 dark:text-white">
            School Admin
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200
              ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-100"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <span className="mr-3 text-gray-500 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300">
              {item.icon}
            </span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* User Profile (optional) */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full"
            src="/assets/images/avatar-default.png"
            alt="User avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Admin User
            </p>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
