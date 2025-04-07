import React from "react";
import {
  BookOpen,
  Award,
  Download,
  GitCommit as GraduationCap,
  Clock,
  ChevronRight,
} from "react-feather";

const Academics = () => {
  // Sample data - replace with your actual academic information
  const programs = [
    {
      level: "Elementary School",
      grades: "Grades 1-5",
      description:
        "Foundational learning with focus on literacy, numeracy, and social skills",
      subjects: [
        "Mathematics",
        "Language Arts",
        "Science",
        "Social Studies",
        "Arts",
      ],
    },
    {
      level: "Middle School",
      grades: "Grades 6-8",
      description: "Specialized subject learning with exploratory electives",
      subjects: [
        "Advanced Math",
        "Literature",
        "Biology",
        "World History",
        "Computer Science",
      ],
    },
    {
      level: "High School",
      grades: "Grades 9-12",
      description: "College-preparatory curriculum with AP and honors courses",
      subjects: [
        "Calculus",
        "Chemistry",
        "Economics",
        "Foreign Languages",
        "Advanced Programming",
      ],
    },
  ];

  const upcomingDates = [
    { date: "Nov 15, 2023", event: "Midterm Examinations" },
    { date: "Dec 1, 2023", event: "Science Fair Submissions Due" },
    { date: "Dec 15, 2023", event: "End of Semester" },
  ];

  const achievements = [
    { metric: "98%", description: "College Acceptance Rate" },
    { metric: "3.8", description: "Average GPA" },
    { metric: "Top 5%", description: "National Ranking" },
    { metric: "25+", description: "AP Courses Offered" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap size={48} className="text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academic Programs
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Excellence in education through innovative teaching and
            comprehensive curriculum
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Academic Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <BookOpen size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">{program.level}</h3>
                </div>
                <div className="bg-blue-50 inline-block px-3 py-1 rounded-full text-sm font-medium text-blue-700 mb-4">
                  {program.grades}
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>

                <h4 className="font-semibold text-gray-700 mb-2">
                  Core Subjects:
                </h4>
                <ul className="space-y-2 mb-6">
                  {program.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-gray-600">{subject}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium py-2 rounded-lg transition">
                  View Detailed Curriculum
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Upcoming Dates */}
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="mr-3 text-blue-600" size={24} />
                Important Academic Dates
              </h2>
              <div className="space-y-4">
                {upcomingDates.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start pb-4 border-b border-gray-200 last:border-0"
                  >
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg mr-4 font-medium">
                      {item.date}
                    </div>
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                ))}
              </div>
              <button className="mt-6 flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Full Calendar <ChevronRight className="ml-1" size={18} />
              </button>
            </div>

            {/* Achievements */}
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-3 text-yellow-500" size={24} />
                Our Achievements
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg text-center"
                  >
                    <div className="text-3xl font-bold text-blue-800 mb-2">
                      {item.metric}
                    </div>
                    <div className="text-gray-600">{item.description}</div>
                  </div>
                ))}
              </div>
              <button className="mt-6 flex items-center text-blue-600 hover:text-blue-800 font-medium">
                See More Achievements{" "}
                <ChevronRight className="ml-1" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Learning Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen size={20} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Digital Library</h3>
              <p className="text-gray-600 mb-4">
                Access thousands of e-books, research papers, and academic
                journals.
              </p>
              <button className="text-green-600 hover:text-green-800 font-medium flex items-center">
                Access Library <ChevronRight className="ml-1" size={16} />
              </button>
            </div>

            {/* Resource 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Download size={20} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Study Materials</h3>
              <p className="text-gray-600 mb-4">
                Download syllabus, past exam papers, and study guides for all
                subjects.
              </p>
              <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center">
                Download Resources <ChevronRight className="ml-1" size={16} />
              </button>
            </div>

            {/* Resource 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-orange-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap size={20} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">College Prep</h3>
              <p className="text-gray-600 mb-4">
                Resources for SAT/ACT preparation and college application
                guidance.
              </p>
              <button className="text-orange-600 hover:text-orange-800 font-medium flex items-center">
                Explore Resources <ChevronRight className="ml-1" size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have Questions About Our Academics?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our academic advisors are ready to help you choose the right
            program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
              Contact Academic Office
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300">
              Schedule Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
