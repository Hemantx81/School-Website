import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaBookOpen,
  FaQuoteLeft,
  FaStar,
  FaCalendarAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoMdSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const slides = [
    {
      title: "Excellence in Education",
      subtitle: "Nurturing young minds for a brighter future",
      bg: "bg-gradient-to-r from-blue-600 to-blue-800",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Innovative Learning",
      subtitle: "Cutting-edge facilities and teaching methods",
      bg: "bg-gradient-to-r from-purple-600 to-purple-800",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "Holistic Development",
      subtitle: "Academic, sports, and arts programs",
      bg: "bg-gradient-to-r from-green-600 to-green-800",
      image:
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      value: "95%",
      label: "Graduation Rate",
      icon: <FaGraduationCap className="text-3xl" />,
    },
    {
      value: "50+",
      label: "Qualified Staff",
      icon: <FaChalkboardTeacher className="text-3xl" />,
    },
    {
      value: "2000+",
      label: "Students",
      icon: <FaUsers className="text-3xl" />,
    },
    {
      value: "30+",
      label: "Programs",
      icon: <FaBookOpen className="text-3xl" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "This school has transformed my child's learning experience. The teachers are exceptional and truly care about each student's success.",
      author: "Sarah Johnson",
      role: "Parent of Grade 5 Student",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/43.jpg",
    },
    {
      quote:
        "The STEM program prepared my daughter perfectly for university. The hands-on projects gave her real-world experience that set her apart.",
      author: "Michael Chen",
      role: "Parent of Alumni",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "The balance of academics and extracurriculars is perfect. My son loves going to school every day and has developed so many new interests!",
      author: "Priya Patel",
      role: "Parent of Grade 8 Student",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        "As an educator myself, I'm impressed by the innovative teaching methods. My child is challenged and supported in equal measure.",
      author: "David Wilson",
      role: "Parent & Educator",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  const events = [
    {
      title: "Open House Day",
      date: "June 15, 2023",
      description: "Come visit our campus and meet our faculty",
      icon: <IoMdSchool className="text-3xl" />,
    },
    {
      title: "Science Fair",
      date: "July 22, 2023",
      description: "Student projects showcasing scientific innovation",
      icon: <GiTeacher className="text-3xl" />,
    },
    {
      title: "Graduation Ceremony",
      date: "August 10, 2023",
      description: "Celebrating our graduating class",
      icon: <FaUserGraduate className="text-3xl" />,
    },
  ];

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <FaStar key={i} className="text-yellow-400 inline mx-0.5" />
      ));
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Slideshow */}
      <section className="relative h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 0,
            }}
            transition={{ duration: 1 }}
            className={`absolute inset-0 ${slide.bg} flex items-center justify-center text-white`}
          >
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="container mx-auto px-6 text-center relative z-10">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
              >
                {slide.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 mr-4 shadow-lg">
                  Apply Now
                </button>
                <button className="border-2 border-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Virtual Tour
                </button>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
          {slides.map((_, index) => (
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
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Programs
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a diverse range of academic and extracurricular programs
              to meet every student's needs and interests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Elementary School",
                description:
                  "Foundational learning for young students with play-based and inquiry-based approaches",
                icon: "🏫",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "High School",
                description:
                  "Comprehensive secondary education with college preparatory curriculum",
                icon: "🎓",
                color: "bg-purple-100 text-purple-600",
              },
              {
                title: "STEM Programs",
                description:
                  "Focus on science, technology, engineering and mathematics with robotics and coding labs",
                icon: "🔬",
                color: "bg-green-100 text-green-600",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className={`${program.color} p-6 text-4xl text-center`}>
                  {program.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <a
                    href="#"
                    className="text-blue-600 font-medium flex items-center group"
                  >
                    Learn more
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for these exciting upcoming events and activities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">{event.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <FaCalendarAlt className="mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="text-blue-600 font-medium flex items-center group">
                    View details
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Community Says
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Hear from parents, students, and alumni about their experiences.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="bg-blue-700 p-8 rounded-xl relative">
                      <FaQuoteLeft className="text-blue-500 text-4xl absolute top-4 left-4 opacity-20" />
                      <div className="flex items-start mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white mr-4"
                        />
                        <div>
                          <p className="font-bold text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-blue-200">{testimonial.role}</p>
                          <div className="mt-1">
                            {renderStars(testimonial.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-lg mb-6 pl-4">{testimonial.quote}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index
                      ? "bg-white w-6"
                      : "bg-white bg-opacity-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Campus Life
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into our vibrant school community.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-md cursor-pointer"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-600 font-medium flex items-center justify-center mx-auto group">
              View full gallery
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover how our school can help your child reach their full
            potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule a Tour
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Admissions
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
