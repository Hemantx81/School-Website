import {
  Home,
  Users,
  Calendar,
  BarChart,
  Book,
  Settings,
  ChevronDown,
  LogOut,
  Bell,
  Search,
} from "react-feather";
import { useState } from "react";

export default function Sidebar({ isDarkMode, sidebarOpen, setSidebarOpen }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    { name: "Dashboard", icon: Home },
    {
      name: "Academics",
      icon: Book,
      subitems: ["Classes", "Subjects", "Exams"],
    },
    { name: "Students", icon: Users },
    { name: "Calendar", icon: Calendar },
    { name: "Analytics", icon: BarChart },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 z-30 h-screen pt-16 transition-all duration-300 ease-in-out ${
        sidebarOpen
          ? "translate-x-0 w-64"
          : "-translate-x-full md:translate-x-0 md:w-20"
      } ${
        isDarkMode
          ? "bg-gray-800 border-r border-gray-700"
          : "bg-white border-r border-gray-200"
      }`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        {/* School Logo */}
        <div className={`mb-6 px-2 ${!sidebarOpen ? "hidden" : "block"}`}>
          <div
            className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <span className="text-blue-500">Edu</span>Admin
          </div>
        </div>

        <ul className="space-y-2">
          {menuItems.map(({ name, icon: Icon, subitems }) => (
            <li key={name}>
              <div
                className={`group flex flex-col ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                } rounded-lg transition-colors`}
              >
                <button
                  onClick={() =>
                    subitems &&
                    setOpenSubmenu(openSubmenu === name ? null : name)
                  }
                  className={`flex items-center p-2 w-full ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } ${!sidebarOpen ? "justify-center" : ""}`}
                >
                  <Icon className="h-5 w-5" />
                  {sidebarOpen && (
                    <>
                      <span className="ml-3 text-sm font-medium flex-1 text-left">
                        {name}
                      </span>
                      {subitems && (
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${
                            openSubmenu === name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </>
                  )}
                </button>

                {sidebarOpen && subitems && openSubmenu === name && (
                  <div className="ml-8 pl-2 border-l-2 border-blue-200 dark:border-blue-800">
                    {subitems.map((subitem) => (
                      <a
                        key={subitem}
                        href="#"
                        className={`flex items-center p-2 text-sm ${
                          isDarkMode
                            ? "text-gray-300 hover:bg-gray-600"
                            : "text-gray-600 hover:bg-gray-50"
                        } rounded-lg`}
                      >
                        {subitem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Profile Section */}
        <div
          className={`mt-6 pt-4 border-t ${
            isDarkMode ? "border-gray-700" : "border-gray-200"
          } ${!sidebarOpen ? "hidden" : "block"}`}
        >
          <div className="flex items-center px-2">
            <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white">
              SA
            </div>
            <div className="ml-3">
              <p
                className={`text-sm font-medium ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                School Admin
              </p>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                admin@school.edu
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
