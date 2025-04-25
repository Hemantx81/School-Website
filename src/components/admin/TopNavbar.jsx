import {
  BellIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/solid"; // In v1.0.6, most icons are in solid/outline variants

const TopNavbar = ({
  sidebarOpen,
  setSidebarOpen,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Search and right side items */}
        <div className="flex items-center justify-end flex-1">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              className="relative p-2 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              <span className="absolute top-1 right-1 block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User profile dropdown */}
            <div className="relative ml-3">
              <div className="flex items-center space-x-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src="/assets/images/avatar-default.png"
                  alt="User avatar"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:inline">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
