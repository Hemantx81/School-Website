import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaSearch,
  FaNewspaper,
  FaMicrophone,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";

export default function NewsEventsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'calendar'
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data
  const allItems = [
    // Featured items (will appear in slider)
    {
      id: 1,
      type: "news",
      title: "School Ranked Top 10 in National STEM Competition",
      date: "2023-05-15",
      eventDate: new Date(2023, 4, 15),
      excerpt:
        "Our students secured 3rd place in the national robotics championship.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Achievements",
      featured: true,
    },
    {
      id: 2,
      type: "event",
      title: "Annual Science Fair Exhibition",
      date: "2023-06-05",
      eventDate: new Date(2023, 5, 5),
      time: "9:00 AM - 3:00 PM",
      location: "School Main Auditorium",
      excerpt: "Showcasing innovative student projects in science fields.",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      category: "Academics",
      featured: true,
    },
    // Regular items
    {
      id: 3,
      type: "news",
      title: "New Arts Wing Construction Complete",
      date: "2023-04-28",
      eventDate: new Date(2023, 3, 28),
      excerpt: "State-of-the-art facilities now available for arts students.",
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      category: "Facilities",
    },
    // ... (keep other items from previous example)
  ];

  // Get featured items for slider
  const featuredItems = allItems.filter((item) => item.featured);

  // Filter items based on active tab and search query
  const filteredItems = allItems.filter((item) => {
    const matchesTab = activeTab === "all" || item.type === activeTab;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Calendar logic
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // Get events for a specific day
  const getEventsForDay = (day) => {
    return allItems.filter(
      (item) => item.type === "event" && isSameDay(new Date(item.date), day)
    );
  };

  // Featured slider autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredItems.length]);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            News & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Stay updated with the latest happenings in our school community
          </motion.p>
        </div>
      </section>

      {/* Featured News Slider */}
      {featuredItems.length > 0 && (
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Featured Highlights
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + featuredItems.length) % featuredItems.length
                    )
                  }
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % featuredItems.length)
                  }
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div className="relative h-96 overflow-hidden rounded-xl shadow-lg">
              {featuredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    zIndex: index === currentSlide ? 10 : 0,
                  }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 bg-gray-900 ${
                    index === currentSlide ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                  <div className="relative z-10 h-full flex items-center p-12 text-white">
                    <div className="max-w-2xl">
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
                        {item.category}
                      </span>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-xl mb-6">{item.excerpt}</p>
                      <a
                        href="#"
                        className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {item.type === "news" ? "Read Story" : "Event Details"}
                        <FiArrowRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Slider Indicators */}
              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
                {featuredItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index
                        ? "bg-white w-6"
                        : "bg-white bg-opacity-50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {/* View Mode Toggle */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              {[
                {
                  id: "all",
                  label: "All",
                  icon: <FaNewspaper className="mr-2" />,
                },
                {
                  id: "news",
                  label: "News",
                  icon: <FaMicrophone className="mr-2" />,
                },
                {
                  id: "event",
                  label: "Events",
                  icon: <FaCalendarAlt className="mr-2" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex space-x-4">
              {/* Search Bar */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-1 rounded-full ${
                    viewMode === "grid" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("calendar")}
                  className={`px-4 py-1 rounded-full ${
                    viewMode === "calendar" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  Calendar
                </button>
              </div>
            </div>
          </div>

          {/* Calendar View */}
          {viewMode === "calendar" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              {/* Calendar Header */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevMonth}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaChevronLeft />
                </button>
                <h3 className="text-xl font-bold">
                  {format(currentMonth, "MMMM yyyy")}
                </h3>
                <button
                  onClick={nextMonth}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center font-medium text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day) => {
                  const dayEvents = getEventsForDay(day);
                  return (
                    <div
                      key={day.toString()}
                      className={`min-h-24 p-2 border rounded-lg ${
                        !isSameMonth(day, currentMonth)
                          ? "bg-gray-50 text-gray-400"
                          : "bg-white"
                      }`}
                    >
                      <div className="text-right mb-1 font-medium">
                        {format(day, "d")}
                      </div>
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate"
                          >
                            {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-gray-500">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* Grid View */
            <AnimatePresence>
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={cardVariants}
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
                    >
                      {/* ... (keep existing card content from previous example) */}
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Empty State */
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl shadow-md p-12 text-center"
                >
                  <FaGraduationCap className="text-gray-300 text-5xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    No items found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filter criteria
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest news and event
            announcements
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-6 py-3 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
