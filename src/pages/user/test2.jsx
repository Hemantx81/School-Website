import React, { useState, useEffect } from "react";

const Departments = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const departments = [
    {
      id: 1,
      name: "Mathematics",
      category: "academic",
      description:
        "Building logical reasoning and problem-solving skills through advanced curriculum.",
      icon: "🧮",
      faculty: [
        {
          name: "Dr. Alan Turing",
          bio: "Fields Medal winner specializing in computational mathematics",
          email: "turing@school.edu",
        },
        {
          name: "Prof. Maryam Mirzakhani",
          bio: "Expert in geometry and dynamical systems",
          email: "mirzakhani@school.edu",
        },
      ],
      stats: {
        students: 320,
        courses: 15,
        achievements: [
          "National Math Olympiad Champions 2023",
          "5 Published Research Papers",
        ],
      },
    },
    // ... (other departments with similar enhanced structure)
  ];

  const filteredDepartments = departments.filter((dept) => {
    const matchesFilter =
      activeFilter === "all" || dept.category === activeFilter;
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const departmentStats = {
    totalDepartments: departments.length,
    totalFaculty: departments.reduce(
      (sum, dept) => sum + dept.faculty.length,
      0
    ),
    totalStudents: departments.reduce(
      (sum, dept) => sum + (dept.stats?.students || 0),
      0
    ),
  };

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${
          isDarkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full ${
          isDarkMode
            ? "bg-gray-700 text-yellow-300"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>

      {/* Hero Section */}
      <section
        className={`relative py-24 ${
          isDarkMode
            ? "bg-gray-800"
            : "bg-gradient-to-r from-blue-800 to-indigo-900"
        } text-white`}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Departments
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in delay-100">
            Specialized learning areas led by expert educators.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section
        className={`py-8 ${
          isDarkMode ? "bg-gray-800" : "bg-blue-50"
        } transition-colors duration-300`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              value={departmentStats.totalDepartments}
              label="Departments"
              icon="🏛️"
              darkMode={isDarkMode}
            />
            <StatCard
              value={departmentStats.totalFaculty}
              label="Faculty Members"
              icon="👨‍🏫"
              darkMode={isDarkMode}
            />
            <StatCard
              value={departmentStats.totalStudents}
              label="Students Enrolled"
              icon="🎓"
              darkMode={isDarkMode}
            />
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search departments..."
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white"
                    : "bg-white border-gray-300"
                } transition-colors duration-300`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-3 top-3 text-gray-400">🔍</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["All", "Academic", "Arts", "Sports"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter.toLowerCase())}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } ${
                    activeFilter === filter.toLowerCase()
                      ? "bg-blue-700 text-white shadow-md"
                      : isDarkMode
                      ? "bg-gray-800 text-gray-300 border-gray-600"
                      : "bg-white text-gray-700 border border-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Departments Grid */}
          {filteredDepartments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDepartments.map((dept) => (
                <DepartmentCard
                  key={dept.id}
                  department={dept}
                  darkMode={isDarkMode}
                  onFacultyClick={setSelectedFaculty}
                />
              ))}
            </div>
          ) : (
            <div
              className={`text-center py-16 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } shadow-sm`}
            >
              <p className="text-xl">
                No departments found matching your criteria
              </p>
              <button
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Faculty Modal */}
      {selectedFaculty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div
            className={`relative max-w-md w-full rounded-xl p-6 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-2xl`}
          >
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-2">{selectedFaculty.name}</h3>
            <p className="text-gray-500 mb-4">{selectedFaculty.bio}</p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selectedFaculty.email}
              </p>
              <p>
                <span className="font-semibold">Department:</span>{" "}
                {selectedFaculty.department}
              </p>
            </div>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Schedule Meeting
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section
        className={`py-16 ${
          isDarkMode ? "bg-gray-800" : "bg-blue-800"
        } text-white transition-colors duration-300`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Want More Department Details?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our complete department guide with curriculum details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
              Download Brochure
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
              Book Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Component for Department Cards
const DepartmentCard = ({ department, darkMode, onFacultyClick }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-blue-600 ${
        darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="text-4xl mb-4">{department.icon}</div>
        <div
          className={`text-xs px-2 py-1 rounded-full ${
            darkMode ? "bg-gray-700 text-blue-300" : "bg-blue-50 text-blue-700"
          }`}
        >
          {department.category.toUpperCase()}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-2">{department.name}</h3>
      <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {department.description}
      </p>

      <div className="mb-6">
        <h4
          className={`font-semibold mb-2 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Key Faculty:
        </h4>
        <ul className="space-y-2">
          {department.faculty.map((teacher, i) => (
            <li
              key={i}
              className={`flex items-center cursor-pointer hover:underline ${
                darkMode ? "text-blue-300" : "text-blue-600"
              }`}
              onClick={() =>
                onFacultyClick({ ...teacher, department: department.name })
              }
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 ${
                  darkMode ? "bg-blue-400" : "bg-blue-500"
                }`}
              ></span>
              {teacher.name}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`mb-6 p-4 rounded-lg ${
          darkMode ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <h4
          className={`font-semibold mb-2 ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Achievements:
        </h4>
        <ul className="space-y-1 text-sm">
          {department.stats.achievements.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2">🏆</span>
              <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-2 rounded-lg font-medium transition ${
          darkMode
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-100 hover:bg-blue-200 text-blue-700"
        }`}
      >
        View Full Details
      </button>
    </div>
  );
};

// Component for Statistics Cards
const StatCard = ({ value, label, icon, darkMode }) => {
  return (
    <div
      className={`p-6 rounded-xl text-center shadow-sm ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}+</div>
      <div
        className={`text-sm font-medium ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default Departments;
