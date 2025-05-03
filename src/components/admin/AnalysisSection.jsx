import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Calendar, Users, BookOpen, Award } from "react-feather";

const enrollmentData = [
  { month: "Jan", students: 400 },
  { month: "Feb", students: 300 },
  { month: "Mar", students: 600 },
  { month: "Apr", students: 800 },
  { month: "May", students: 500 },
];

const performanceData = [
  { week: "Week 1", score: 65 },
  { week: "Week 2", score: 75 },
  { week: "Week 3", score: 85 },
  { week: "Week 4", score: 80 },
];

const pieData = [
  { name: "Boys", value: 60 },
  { name: "Girls", value: 40 },
];

const COLORS = ["#3B82F6", "#8B5CF6"];

export default function AnalysisSection({ isDarkMode }) {
  return (
    <div className="grid grid-cols-1 pt-8 mt-12 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {/* Stats Cards */}
      <div
        className={`p-6 rounded-xl shadow-sm flex items-center gap-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <Users className="h-6 w-6 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Students
          </p>
          <p className="text-2xl font-bold dark:text-white">2,456</p>
        </div>
      </div>

      <div
        className={`p-6 rounded-xl shadow-sm flex items-center gap-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-300" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Courses</p>
          <p className="text-2xl font-bold dark:text-white">24</p>
        </div>
      </div>

      <div
        className={`p-6 rounded-xl shadow-sm flex items-center gap-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
          <Award className="h-6 w-6 text-green-600 dark:text-green-300" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Average GPA
          </p>
          <p className="text-2xl font-bold dark:text-white">3.8</p>
        </div>
      </div>

      <div
        className={`p-6 rounded-xl shadow-sm flex items-center gap-4 ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-lg">
          <Calendar className="h-6 w-6 text-pink-600 dark:text-pink-300" />
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Events</p>
          <p className="text-2xl font-bold dark:text-white">12</p>
        </div>
      </div>

      {/* Charts */}
      <div
        className={`p-6 rounded-xl shadow-sm ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } md:col-span-2`}
      >
        <h3 className="text-lg font-semibold mb-4 dark:text-white">
          Student Enrollment
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={enrollmentData}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                stroke={isDarkMode ? "#94a3b8" : "#64748b"}
              />
              <YAxis stroke={isDarkMode ? "#94a3b8" : "#64748b"} />
              <Tooltip
                contentStyle={{
                  background: isDarkMode ? "#1e293b" : "#fff",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
              <Bar
                dataKey="students"
                fill="url(#colorStudents)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        className={`p-6 rounded-xl shadow-sm ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } md:col-span-2`}
      >
        <h3 className="text-lg font-semibold mb-4 dark:text-white">
          Gender Distribution
        </h3>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: isDarkMode ? "#1e293b" : "#fff",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Calendar Section */}
      <div
        className={`p-6 rounded-xl shadow-sm ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        } md:col-span-2 lg:col-span-4`}
      >
        <h3 className="text-lg font-semibold mb-4 dark:text-white">
          School Calendar
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className={`p-2 text-center rounded-lg ${
                index === 15
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                  : isDarkMode
                  ? "hover:bg-gray-700"
                  : "hover:bg-gray-50"
              } cursor-pointer transition-colors`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
