import { Menu, X, Moon, Sun, Bell, Search } from "react-feather";
import { useState } from "react";

export default function TopNavbar({
  isDarkMode,
  toggleTheme,
  sidebarOpen,
  setSidebarOpen,
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-40 ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b transition-all duration-300 ease-in-out ${
        sidebarOpen
          ? "md:left-64 md:w-[calc(100%-16rem)]"
          : "md:left-20 md:w-[calc(100%-5rem)]"
      } left-0`}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {sidebarOpen ? (
              <X className="text-gray-600 dark:text-gray-300 h-6 w-6" />
            ) : (
              <Menu className="text-gray-600 dark:text-gray-300 h-6 w-6" />
            )}
          </button>

          <div
            className={`relative transition-width duration-300 ${
              searchOpen ? "w-64" : "w-48"
            }`}
          >
            <div className="flex items-center">
              <Search
                className={`absolute left-3 h-5 w-5 ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <input
                type="text"
                placeholder="Search..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg text-sm ${
                  isDarkMode
                    ? "bg-gray-700 text-white placeholder-gray-400"
                    : "bg-gray-50 text-gray-900 placeholder-gray-500"
                } transition-colors`}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDarkMode ? (
              <Sun className="text-yellow-400 h-6 w-6" />
            ) : (
              <Moon className="text-gray-600 h-6 w-6" />
            )}
          </button>

          <div className="flex items-center gap-2 relative group">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              SA
            </div>
            <div
              className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 ${
                isDarkMode ? "border border-gray-700" : "border border-gray-200"
              } invisible group-hover:visible transition-all`}
            >
              <div className="px-4 py-3 border-b dark:border-gray-700">
                <p className="text-sm font-medium dark:text-white">
                  School Admin
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  admin@school.edu
                </p>
              </div>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
