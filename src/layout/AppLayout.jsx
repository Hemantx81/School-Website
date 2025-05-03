import { useState } from "react";
import TopNavbar from "../components/admin/TopNavbar";
import Sidebar from "../components/admin/Sidebar";
import AnalysisSection from "../components/admin/AnalysisSection";

export default function AppLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div
        className={` relative flex ${
          isDarkMode ? "dark:bg-gray-900" : "bg-gray-50"
        }`}
      >
        <Sidebar
          isDarkMode={isDarkMode}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div
          className={`flex-1 flex flex-col transition-all duration-300 ${
            sidebarOpen ? "md:ml-64" : "md:ml-20"
          }`}
        >
          <div className="flex-1 flex flex-col">
            <TopNavbar
              isDarkMode={isDarkMode}
              toggleTheme={() => setIsDarkMode(!isDarkMode)}
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />

            <main
              className={`p-6 mt-16 transition-all duration-300 ${
                sidebarOpen ? "md:ml-64" : "md:ml-20"
              }`}
            >
              <AnalysisSection isDarkMode={isDarkMode} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
