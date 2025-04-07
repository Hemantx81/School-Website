import React, { useState } from "react";

const Curriculum = () => {
  const [activeTab, setActiveTab] = useState("primary");

  const courses = {
    primary: [
      {
        title: "Mathematics",
        description:
          "Builds foundational skills in arithmetic, geometry, and problem-solving.",
        grade: "Grades 1-5",
        outcomes: [
          "Basic operations",
          "Shapes & measurements",
          "Logical reasoning",
        ],
      },
      {
        title: "Science",
        description:
          "Introduction to biology, physics, and chemistry through experiments.",
        grade: "Grades 1-5",
        outcomes: [
          "Nature exploration",
          "Simple experiments",
          "Scientific curiosity",
        ],
      },
    ],
    secondary: [
      {
        title: "Advanced Mathematics",
        description:
          "Algebra, calculus, and statistics for higher-level thinking.",
        grade: "Grades 6-12",
        outcomes: ["Problem-solving", "Data analysis", "Advanced computations"],
      },
      {
        title: "Computer Science",
        description: "Coding, robotics, and AI fundamentals.",
        grade: "Grades 6-12",
        outcomes: ["Python/JavaScript", "Algorithm design", "Tech innovation"],
      },
    ],
    extracurricular: [
      {
        title: "Music & Arts",
        description: "Vocal, instruments, and creative expression.",
        grade: "All Grades",
        outcomes: [
          "Rhythm & melody",
          "Creative confidence",
          "Performance skills",
        ],
      },
      {
        title: "Sports Academy",
        description: "Football, basketball, and athletics training.",
        grade: "All Grades",
        outcomes: ["Teamwork", "Physical fitness", "Discipline"],
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Curriculum
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A well-structured, future-ready learning path for every student.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Primary", "Secondary", "Extracurricular"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.toLowerCase()
                    ? "bg-blue-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses[activeTab].map((course, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-600"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="bg-blue-50 inline-block px-3 py-1 rounded-full text-sm font-medium text-blue-700 mb-4">
                  {course.grade}
                </div>
                <h4 className="font-semibold text-gray-700 mb-2">
                  Learning Outcomes:
                </h4>
                <ul className="space-y-2 mb-6">
                  {course.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span className="text-gray-600">{outcome}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 rounded-lg transition">
                  View Detailed Syllabus
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Curriculum Download CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Download Complete Curriculum Guide
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a detailed PDF with all subjects, lesson plans, and academic
            policies.
          </p>
          <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
            Download Brochure (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;
