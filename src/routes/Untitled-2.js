import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  ClipboardListIcon,
  BookOpenIcon,
  LibraryIcon,
  CashIcon,
  OfficeBuildingIcon,
  UsersIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  LogoutIcon,
  SunIcon,
  MoonIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const Sidebar = ({ mobile = false, collapsed, setCollapsed }) => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleSubmenu = (name) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const getActiveNav = (path) => {
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  const sidebarClasses = `
    flex flex-col transition-all duration-300 ease-in-out
    ${mobile ? "w-64 fixed inset-y-0 z-40" : ""}
    ${collapsed ? "lg:w-20" : "lg:w-64"}
    ${darkMode ? "dark bg-gray-900" : "bg-indigo-700"}
  `;

  return (
    <div className={sidebarClasses}>
      {/* Sidebar Header - Fixed width to match sidebar */}
      <div
        className={`flex items-center justify-between h-16 px-4 ${
          darkMode ? "bg-gray-800" : "bg-indigo-800"
        } ${collapsed ? "w-20" : "w-full"}`}
      >
        {!collapsed ? (
          <div className="flex items-center w-full">
            <AcademicCapIcon className="w-8 h-8 text-white" />
            <span className="ml-2 text-xl font-semibold text-white">
              EduManage
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-full">
            <AcademicCapIcon className="w-8 h-8 text-white" />
          </div>
        )}
        {!mobile && (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden p-1 rounded-md lg:block text-indigo-200 hover:text-white focus:outline-none"
          >
            {collapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <ChevronDownIcon className="w-5 h-5" />
            )}
          </button>
        )}
      </div>

      {/* User Profile Section - Fixed width */}
      {!collapsed && (
        <div
          className={`flex items-center p-4 border-b ${
            darkMode
              ? "border-gray-700 bg-gray-800"
              : "border-indigo-600 bg-indigo-600"
          } w-full`}
        >
          <div className="flex-shrink-0">
            <UserCircleIcon className="w-10 h-10 text-indigo-300" />
          </div>
          <div className="ml-3">
            <p
              className={`text-sm font-medium ${
                darkMode ? "text-gray-200" : "text-white"
              }`}
            >
              Admin User
            </p>
            <p
              className={`text-xs ${
                darkMode ? "text-gray-400" : "text-indigo-200"
              }`}
            >
              admin@edumanage.com
            </p>
          </div>
        </div>
      )}

      {/* Navigation - Full width of sidebar */}
      <nav className="flex-1 w-full px-2 py-4 space-y-1 overflow-y-auto">
        <NavSection
          title="Main"
          items={mainNavItems}
          collapsed={collapsed}
          darkMode={darkMode}
          getActiveNav={getActiveNav}
          openSubmenus={openSubmenus}
          toggleSubmenu={toggleSubmenu}
        />

        <NavSection
          title="Academic"
          items={academicNavItems}
          collapsed={collapsed}
          darkMode={darkMode}
          getActiveNav={getActiveNav}
          openSubmenus={openSubmenus}
          toggleSubmenu={toggleSubmenu}
        />

        <NavSection
          title="Administration"
          items={adminNavItems}
          collapsed={collapsed}
          darkMode={darkMode}
          getActiveNav={getActiveNav}
          openSubmenus={openSubmenus}
          toggleSubmenu={toggleSubmenu}
        />
      </nav>

      {/* Bottom Controls - Fixed width */}
      <div
        className={`p-4 border-t w-full ${
          darkMode ? "border-gray-700" : "border-indigo-600"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className={`flex items-center w-full p-2 rounded-md ${
            darkMode
              ? "text-gray-300 hover:bg-gray-700"
              : "text-indigo-200 hover:bg-indigo-600"
          } ${collapsed ? "justify-center" : ""}`}
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
          {!collapsed && (
            <span className="ml-3 text-sm">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          )}
        </button>

        <Link
          to="/logout"
          className={`flex items-center w-full p-2 mt-2 rounded-md ${
            darkMode
              ? "text-gray-300 hover:bg-gray-700"
              : "text-indigo-200 hover:bg-indigo-600"
          } ${collapsed ? "justify-center" : ""}`}
        >
          <LogoutIcon className="w-5 h-5" />
          {!collapsed && <span className="ml-3 text-sm">Logout</span>}
        </Link>
      </div>
    </div>
  );
};

// NavSection Component
const NavSection = ({
  title,
  items,
  collapsed,
  darkMode,
  getActiveNav,
  openSubmenus,
  toggleSubmenu,
}) => (
  <div className="mb-6">
    {!collapsed && (
      <h3
        className={`px-4 mb-2 text-xs font-semibold tracking-wider ${
          darkMode ? "text-gray-400" : "text-indigo-300"
        } uppercase`}
      >
        {title}
      </h3>
    )}
    <div className="space-y-1">
      {items.map((item) => (
        <div key={item.name}>
          {item.submenu ? (
            <>
              <button
                onClick={() => toggleSubmenu(item.name)}
                className={`flex items-center w-full p-3 text-sm font-medium rounded-md group ${
                  getActiveNav(item.href)
                    ? darkMode
                      ? "bg-gray-800 text-white"
                      : "bg-indigo-800 text-white"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75"
                }`}
              >
                <item.icon
                  className={`flex-shrink-0 w-5 h-5 ${
                    collapsed ? "" : "mr-3"
                  } ${
                    getActiveNav(item.href)
                      ? "text-white"
                      : darkMode
                      ? "text-gray-400 group-hover:text-white"
                      : "text-indigo-300 group-hover:text-white"
                  }`}
                />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.name}</span>
                    {openSubmenus[item.name] ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )}
                  </>
                )}
              </button>
              {!collapsed && openSubmenus[item.name] && (
                <div
                  className={`ml-8 mt-1 space-y-1 ${
                    darkMode ? "text-gray-300" : "text-indigo-100"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={`flex items-center px-3 py-2 text-sm rounded-md ${
                        getActiveNav(subItem.href)
                          ? darkMode
                            ? "bg-gray-700 text-white"
                            : "bg-indigo-600 text-white"
                          : darkMode
                          ? "hover:bg-gray-700"
                          : "hover:bg-indigo-600 hover:bg-opacity-50"
                      }`}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </>
          ) : (
            <NavItem
              item={item}
              active={getActiveNav(item.href)}
              collapsed={collapsed}
              darkMode={darkMode}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);

// NavItem Component
const NavItem = ({ item, active, collapsed, darkMode }) => (
  <Link
    to={item.href}
    className={`flex items-center p-3 text-sm font-medium rounded-md group ${
      active
        ? darkMode
          ? "bg-gray-800 text-white"
          : "bg-indigo-800 text-white"
        : darkMode
        ? "text-gray-300 hover:bg-gray-700"
        : "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75"
    }`}
  >
    <item.icon
      className={`flex-shrink-0 w-5 h-5 ${collapsed ? "" : "mr-3"} ${
        active
          ? "text-white"
          : darkMode
          ? "text-gray-400 group-hover:text-white"
          : "text-indigo-300 group-hover:text-white"
      }`}
    />
    {!collapsed && (
      <>
        <span className="flex-1">{item.name}</span>
        {item.count && (
          <span
            className={`ml-2 inline-block py-0.5 px-2 text-xs rounded-full ${
              active
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-white text-indigo-800"
                : darkMode
                ? "bg-gray-800 text-gray-300"
                : "bg-indigo-800 text-white"
            }`}
          >
            {item.count}
          </span>
        )}
      </>
    )}
  </Link>
);

// Navigation items data with submenus
const mainNavItems = [{ name: "Dashboard", href: "/", icon: HomeIcon }];

const academicNavItems = [
  {
    name: "Students",
    href: "/students",
    icon: UserGroupIcon,
    count: 124,
    submenu: [
      { name: "All Students", href: "/students" },
      { name: "Add New", href: "/students/new" },
      { name: "Classes", href: "/students/classes" },
    ],
  },
  {
    name: "Teachers",
    href: "/teachers",
    icon: UsersIcon,
    count: 24,
    submenu: [
      { name: "All Teachers", href: "/teachers" },
      { name: "Add New", href: "/teachers/new" },
      { name: "Attendance", href: "/teachers/attendance" },
    ],
  },
  { name: "Classes", href: "/classes", icon: LibraryIcon },
  { name: "Attendance", href: "/attendance", icon: ClipboardListIcon },
  { name: "Grades", href: "/grades", icon: BookOpenIcon },
  { name: "Schedule", href: "/schedule", icon: CalendarIcon },
];

const adminNavItems = [
  { name: "Finance", href: "/finance", icon: CashIcon },
  { name: "Reports", href: "/reports", icon: ChartBarIcon },
  { name: "School Info", href: "/school", icon: OfficeBuildingIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
];

export default Sidebar;
