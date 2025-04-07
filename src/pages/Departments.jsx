import React, { useState } from "react";

const Departments = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const departments = [
    {
      id: 1,
      name: "Mathematics",
      category: "academic",
      description:
        "Building logical reasoning and problem-solving skills through advanced curriculum.",
      icon: "🧮",
      faculty: ["Dr. Alan Turing", "Prof. Maryam Mirzakhani"],
    },
    {
      id: 2,
      name: "Science",
      category: "academic",
      description:
        "Exploring biology, chemistry, and physics with hands-on experiments.",
      icon: "🔬",
      faculty: ["Dr. Marie Curie", "Prof. Neil deGrasse Tyson"],
    },
    {
      id: 3,
      name: "Literature & Languages",
      category: "academic",
      description:
        "Mastering communication, critical analysis, and creative writing.",
      icon: "📚",
      faculty: ["Prof. Maya Angelou", "Dr. Haruki Murakami"],
    },
    {
      id: 4,
      name: "Music & Arts",
      category: "arts",
      description:
        "Nurturing creativity through vocal, instrumental, and visual arts.",
      icon: "🎨",
      faculty: ["Maestro Ludwig van Beethoven", "Prof. Frida Kahlo"],
    },
    {
      id: 5,
      name: "Sports Academy",
      category: "sports",
      description: "Training in football, basketball, athletics, and more.",
      icon: "⚽",
      faculty: ["Coach Serena Williams", "Dr. Michael Phelps"],
    },
    {
      id: 6,
      name: "Computer Science",
      category: "academic",
      description: "Coding, AI, and robotics for the digital age.",
      icon: "💻",
      faculty: ["Prof. Ada Lovelace", "Dr. Tim Berners-Lee"],
    },
  ];

  const filteredDepartments =
    activeFilter === "all"
      ? departments
      : departments.filter((dept) => dept.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Departments
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Specialized learning areas led by expert educators.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Academic", "Arts", "Sports"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Departments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-t-4 border-blue-600"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Key Faculty:
                  </h4>
                  <ul className="space-y-1">
                    {dept.faculty.map((teacher, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        <span className="text-gray-600">{teacher}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium py-2 rounded-lg transition">
                  Contact Department
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Interested in a Specific Department?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a meeting with our department heads for detailed guidance.
          </p>
          <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg">
            Book a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Departments;
