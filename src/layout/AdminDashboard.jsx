import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", students: 4000 },
  { name: "Feb", students: 3000 },
  { name: "Mar", students: 2000 },
  { name: "Apr", students: 2780 },
  { name: "May", students: 1890 },
  { name: "Jun", students: 2390 },
];

export default function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100">
        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full transition-all duration-300 ease-in-out ${
            sidebarOpen ? "w-64" : "w-20"
          } bg-gray-800 dark:bg-gray-900`}
        >
          <div className="p-4">
            <h2
              className={`text-xl font-bold mb-4 ${!sidebarOpen && "hidden"}`}
            >
              School Admin
            </h2>
            <nav>
              <ul className="space-y-2">
                {[
                  "Dashboard",
                  "Students",
                  "Teachers",
                  "Courses",
                  "Attendance",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center p-2 hover:bg-gray-700 rounded"
                    >
                      <span className="mr-2">📊</span>
                      <span className={!sidebarOpen && "hidden"}>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className={`transition-all duration-300 ease-in-out ${
            sidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          {/* Navbar */}
          <header className="bg-white dark:bg-gray-800 shadow-sm p-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                ☰
              </button>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {darkMode ? "🌞" : "🌙"}
                </button>
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                  A
                </div>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {[
                {
                  title: "Total Students",
                  value: "2,845",
                  color: "bg-blue-500",
                },
                { title: "Total Teachers", value: "45", color: "bg-green-500" },
                { title: "Classes", value: "18", color: "bg-yellow-500" },
                { title: "Attendance", value: "94%", color: "bg-red-500" },
              ].map((stat) => (
                <div
                  key={stat.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-bold mb-4">
                Student Enrollment Analytics
              </h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Recent Students</h2>
                <ul className="space-y-3">
                  {[
                    "John Doe",
                    "Jane Smith",
                    "Mike Johnson",
                    "Sarah Williams",
                  ].map((student) => (
                    <li
                      key={student}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                    >
                      <span>{student}</span>
                      <span className="text-sm text-gray-500">
                        New Admission
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
                <ul className="space-y-3">
                  {[
                    "Sports Day - March 15",
                    "Parent Meeting - March 20",
                    "Exam Starts - April 1",
                  ].map((event) => (
                    <li
                      key={event}
                      className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded"
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
