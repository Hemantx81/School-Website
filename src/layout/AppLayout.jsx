import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AcademicCapIcon,
  UserGroupIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
  BellIcon,
  ClipboardListIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavBar";

const AppLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeNav, setActiveNav] = useState("dashboard");

  // Mock notification count
  const notificationCount = 3;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      {/* Static sidebar for desktop */}
      {/* <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-indigo-700">
          <div className="flex items-center justify-center h-16 px-4 bg-indigo-800">
            <div className="flex items-center">
              <AcademicCapIcon className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-semibold text-white">
                EduManage
              </span>
            </div>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  activeNav === item.name.toLowerCase()
                    ? "bg-indigo-800 text-white"
                    : "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75"
                }`}
                onClick={() => setActiveNav(item.name.toLowerCase())}
              >
                <item.icon className="flex-shrink-0 w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div> */}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        {/* <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 lg:px-6">
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 mr-2 text-gray-500 rounded-md lg:hidden focus:outline-none"
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-medium text-gray-800 capitalize">
              {activeNav}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none relative">
              <BellIcon className="w-6 h-6" />
              {notificationCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                  {notificationCount}
                </span>
              )}
            </button>

            <div className="relative">
              <button className="flex items-center space-x-2 focus:outline-none">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
                <span className="hidden text-sm font-medium text-gray-700 lg:block">
                  Admin User
                </span>
              </button>
            </div>
          </div>
        </header> */}
        <TopNavbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-50 focus:outline-none">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

// Navigation items
const navItems = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Students", href: "/students", icon: UserGroupIcon },
  { name: "Teachers", href: "/teachers", icon: AcademicCapIcon },
  { name: "Attendance", href: "/attendance", icon: ClipboardListIcon },
  { name: "Grades", href: "/grades", icon: BookOpenIcon },
  { name: "Schedule", href: "/schedule", icon: CalendarIcon },
  { name: "Reports", href: "/reports", icon: ChartBarIcon },
  { name: "Settings", href: "/settings", icon: CogIcon },
];

export default AppLayout;
