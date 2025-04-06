import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaBook,
  FaRunning,
  FaMusic,
  FaLaptop,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function FacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  const facilities = [
    {
      id: 1,
      title: "STEM Innovation Center",
      category: "academic",
      description:
        "State-of-the-art laboratories for robotics, biotechnology, and engineering with 3D printers and VR equipment.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaFlask className="text-blue-600 text-2xl" />,
      features: [
        "Robotics lab",
        "3D printing studio",
        "Biotech equipment",
        "VR learning stations",
      ],
    },
    {
      id: 2,
      title: "Digital Library",
      category: "academic",
      description:
        "Modern learning hub with 25,000+ print and digital resources, collaborative workspaces, and media production studio.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaBook className="text-blue-600 text-2xl" />,
      features: [
        "25,000+ resources",
        "Media production",
        "Study pods",
        "Digital archives",
      ],
    },
    {
      id: 3,
      title: "Athletic Complex",
      category: "sports",
      description:
        "Olympic-standard facilities including indoor swimming pool, gymnasium, and outdoor track & field.",
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      icon: <FaRunning className="text-blue-600 text-2xl" />,
      features: [
        "Olympic pool",
        "Indoor gymnasium",
        "Track & field",
        "Fitness center",
      ],
    },
    {
      id: 4,
      title: "Performing Arts Center",
      category: "arts",
      description:
        "500-seat auditorium with professional lighting/sound systems, rehearsal studios, and instrument collection.",
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      icon: <FaMusic className="text-blue-600 text-2xl" />,
      features: [
        "500-seat theater",
        "Dance studios",
        "Music practice rooms",
        "Recording studio",
      ],
    },
    {
      id: 5,
      title: "Technology Hub",
      category: "academic",
      description:
        "Cutting-edge computer labs with the latest software for coding, design, and multimedia production.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      icon: <FaLaptop className="text-blue-600 text-2xl" />,
      features: [
        "VR workstations",
        "Programming labs",
        "Graphic design suite",
        "Video editing bays",
      ],
    },
    {
      id: 6,
      title: "Aquatic Center",
      category: "sports",
      description:
        "Olympic-size swimming pool with diving platforms and spectator seating for 200 people.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      icon: <FaRunning className="text-blue-600 text-2xl" />,
      features: [
        "Olympic-size pool",
        "Diving platforms",
        "Swim team locker rooms",
        "Spectator seating",
      ],
    },
  ];

  const featuredFacilities = facilities.slice(0, 3);
  const filteredFacilities =
    activeCategory === "all"
      ? facilities
      : facilities.filter((facility) => facility.category === activeCategory);

  const categories = [
    { id: "all", name: "All Facilities" },
    { id: "academic", name: "Academic" },
    { id: "sports", name: "Sports" },
    { id: "arts", name: "Arts" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Facilities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            World-class learning environments designed to inspire excellence
          </motion.p>
        </div>
      </section>

      {/* Featured Facilities Carousel */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Facilities
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) =>
                      (prev - 1 + featuredFacilities.length) %
                      featuredFacilities.length
                  )
                }
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev + 1) % featuredFacilities.length
                  )
                }
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
            {featuredFacilities.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 10 : 0,
                }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 ${
                  index === currentSlide ? "block" : "hidden"
                }`}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="relative z-10 h-full flex items-end p-12 text-white">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                      {facility.category === "academic"
                        ? "Academic"
                        : facility.category === "sports"
                        ? "Sports"
                        : "Arts"}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">
                      {facility.title}
                    </h3>
                    <p className="text-xl mb-6 max-w-2xl">
                      {facility.description}
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
                      Explore Facility
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
              {featuredFacilities.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Explore Our Facilities
              </h2>
              <p className="text-gray-600">
                State-of-the-art environments for learning and growth
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search facilities..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-1 rounded-md whitespace-nowrap ${
                      activeCategory === category.id ? "bg-white shadow-sm" : ""
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {facility.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{facility.description}</p>

                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 text-gray-600">
                      {facility.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="text-blue-600 mr-2 mt-1">•</div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="text-blue-600 font-medium flex items-center group">
                    View details{" "}
                    <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pr-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Take a Virtual Tour
              </h2>
              <p className="text-gray-600 mb-8">
                Explore our campus from anywhere in the world with our
                interactive 360° virtual tour. Visit classrooms, labs, athletic
                facilities, and more without leaving your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Full Campus Access
                    </h3>
                    <p className="text-gray-600">
                      View all facilities at your own pace
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Interactive Maps
                    </h3>
                    <p className="text-gray-600">
                      Navigate between buildings seamlessly
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">
                      Information Hotspots
                    </h3>
                    <p className="text-gray-600">
                      Click to learn more about each space
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold">
                Launch Virtual Tour
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-xl overflow-hidden shadow-lg aspect-video"
            >
              {/* Placeholder for virtual tour embed */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 text-white">
                <div className="text-center p-6">
                  <div className="text-4xl font-bold mb-4">
                    360° Virtual Tour
                  </div>
                  <p className="text-xl">Interactive campus experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Facilities in Person
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour to see our learning environments firsthand
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
              Book a Tour
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
