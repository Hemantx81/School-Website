import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

// import Footer from "./Footer";
import TopNavbar from "../components/admin/TopNavbar";
import Sidebar from "../components/admin/Sidebar";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode !== null) {
        return savedMode === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        sidebarOpen ? "overflow-hidden" : ""
      }`}
    >
      {/* Sidebar - Mobile */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={() => setSidebarOpen(false)}
        ></div>
        <div className="relative flex flex-col w-64 h-full bg-white dark:bg-gray-800">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top navigation */}
        <TopNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto focus:outline-none">
          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AppLayout;
