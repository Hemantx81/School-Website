import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BellIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";

const TopNavbar = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      title: "New student registration",
      message: "John Doe has registered for the new semester",
      time: "10 mins ago",
      read: false,
    },
    {
      id: 2,
      title: "Attendance alert",
      message: "Class 10A has low attendance today",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Payment received",
      message: "Payment of $250 received from Sarah Smith",
      time: "1 day ago",
      read: true,
    },
  ];

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const markAsRead = (id) => {
    setUnreadNotifications((prev) => prev - 1);
    // In a real app, you would update the notification status in your backend
  };

  const markAllAsRead = () => {
    setUnreadNotifications(0);
  };

  return (
    <header
      className={`sticky top-0 z-30 flex items-center justify-between h-16 px-4 shadow-sm ${
        darkMode
          ? "bg-gray-800 border-b border-gray-700"
          : "bg-white border-b border-gray-200"
      }`}
    >
      {/* Left section - Hamburger menu and search */}
      <div className="flex items-center space-x-4">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 rounded-md lg:hidden text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
        >
          {sidebarOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Search bar - expands on click */}
        <div
          className={`relative ${
            searchOpen ? "w-64" : "w-48"
          } transition-all duration-200`}
        >
          {searchOpen ? (
            <div className="relative">
              <input
                type="text"
                placeholder="Search students, teachers, classes..."
                className={`w-full pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-700 text-white focus:ring-indigo-500"
                    : "bg-gray-100 text-gray-800 focus:ring-indigo-300"
                }`}
                autoFocus
              />
              <SearchIcon
                className={`absolute left-3 top-2.5 w-5 h-5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className={`flex items-center w-full pl-3 pr-2 py-2 rounded-md ${
                darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              <SearchIcon className="w-5 h-5 mr-2" />
              <span className="text-sm">Search...</span>
              <span className="ml-auto px-2 py-0.5 text-xs rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                Ctrl+K
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Right section - Icons and profile */}
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full focus:outline-none ${
            darkMode
              ? "text-yellow-400 hover:bg-gray-700"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>

        {/* Notifications dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              setProfileMenuOpen(false);
            }}
            className={`p-2 rounded-full relative focus:outline-none ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <BellIcon
              className={`w-5 h-5 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            />
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                {unreadNotifications}
              </span>
            )}
          </button>

          {notificationsOpen && (
            <div
              className={`absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className={`flex items-center justify-between px-4 py-2 border-b ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <h3
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  Notifications
                </h3>
                <button
                  onClick={markAllAsRead}
                  className="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Mark all as read
                </button>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-indigo-50 dark:hover:bg-gray-700 cursor-pointer ${
                      !notification.read
                        ? darkMode
                          ? "bg-gray-700"
                          : "bg-indigo-50"
                        : ""
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            !notification.read
                              ? "bg-indigo-500"
                              : "bg-transparent"
                          }`}
                        ></div>
                      </div>
                      <div className="ml-3 flex-1">
                        <p
                          className={`text-sm font-medium ${
                            darkMode ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {notification.title}
                        </p>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {notification.message}
                        </p>
                        <p
                          className={`mt-1 text-xs ${
                            darkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`px-4 py-2 text-center border-t ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <Link
                  to="/notifications"
                  className={`text-sm font-medium ${
                    darkMode
                      ? "text-indigo-400 hover:text-indigo-300"
                      : "text-indigo-600 hover:text-indigo-500"
                  }`}
                >
                  View all notifications
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setProfileMenuOpen(!profileMenuOpen);
              setNotificationsOpen(false);
            }}
            className={`flex items-center space-x-2 focus:outline-none ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            } p-1 rounded-full`}
          >
            <UserCircleIcon
              className={`w-8 h-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            />
            <span
              className={`hidden lg:inline-flex items-center ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Admin
              <ChevronDownIcon
                className={`ml-1 w-4 h-4 transition-transform ${
                  profileMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </span>
          </button>

          {profileMenuOpen && (
            <div
              className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${
                darkMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-200"
              }`}
            >
              <div
                className={`px-4 py-3 border-b ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Admin User
                </p>
                <p
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  admin@edumanage.com
                </p>
              </div>
              <Link
                to="/profile"
                className={`block px-4 py-2 text-sm ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Your Profile
              </Link>
              <Link
                to="/settings"
                className={`block px-4 py-2 text-sm ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Settings
              </Link>
              <div
                className={`border-t ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              ></div>
              <Link
                to="/logout"
                className={`block px-4 py-2 text-sm ${
                  darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Sign out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
