import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaInfoCircle,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef();
  const isInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend-only submission simulation
    setTimeout(() => {
      console.log("Form would submit:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after "submission"
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      // Hide success after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 z-0"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        </motion.div>

        <div className="relative z-10 py-28 px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            We're here to answer your questions and welcome your feedback
          </motion.p>
        </div>
      </section>

      {/* Floating Contact Cards */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-20 -mt-16 px-4"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-blue-500"
          >
            <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FaPhone className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Call Us</h3>
            <div className="space-y-2 text-center">
              <a
                href="tel:+15551234567"
                className="block text-blue-600 hover:text-blue-800 font-medium"
              >
                (555) 123-4567
              </a>
              <p className="text-sm text-gray-500">Main Office</p>
              <a
                href="tel:+15551234568"
                className="block text-blue-600 hover:text-blue-800 font-medium"
              >
                (555) 123-4568
              </a>
              <p className="text-sm text-gray-500">Admissions</p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-purple-500"
          >
            <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FaEnvelope className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Email Us</h3>
            <div className="space-y-2 text-center">
              <a
                href="mailto:info@school.edu"
                className="block text-purple-600 hover:text-purple-800 font-medium"
              >
                info@school.edu
              </a>
              <p className="text-sm text-gray-500">General Inquiries</p>
              <a
                href="mailto:admissions@school.edu"
                className="block text-purple-600 hover:text-purple-800 font-medium"
              >
                admissions@school.edu
              </a>
              <p className="text-sm text-gray-500">Admissions</p>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-green-500"
          >
            <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <FaMapMarkerAlt className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3">Visit Us</h3>
            <div className="space-y-2 text-center">
              <p className="text-gray-700">
                123 Education Street
                <br />
                Learning City, LC 12345
              </p>
              <div className="flex items-center justify-center text-gray-500 text-sm mt-3">
                <FaClock className="mr-2" />
                <span>Mon-Fri: 8AM - 4PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? Fill out the form below and we'll get back to you
              within 24 hours.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Form Status Indicators */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
                >
                  <div className="flex items-center">
                    <FaInfoCircle className="mr-2 text-xl" />
                    <p>Thank you! Your message has been sent successfully.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className=" text-gray-700 font-medium mb-2 flex items-center"
                    >
                      <FaUser className="mr-2 text-blue-500" /> Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className=" text-gray-700 font-medium mb-2 flex items-center"
                    >
                      <FaEnvelope className="mr-2 text-blue-500" /> Email
                      Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </motion.div>
                </div>

                {/* Subject Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6"
                >
                  <label
                    htmlFor="subject"
                    className=" text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <RiCustomerService2Fill className="mr-2 text-blue-500" />{" "}
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admissions">Admissions</option>
                    <option value="Academic Programs">Academic Programs</option>
                    <option value="Facilities Tour">Facilities Tour</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6"
                >
                  <label
                    htmlFor="message"
                    className=" text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <FaPaperPlane className="mr-2 text-blue-500" /> Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8"
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <IoMdSend className="ml-2 text-xl" />
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="h-96 lg:h-full">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152091795357!2d-73.98827968459382!3d40.74844047932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTMuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="min-h-[400px]"
                ></iframe>
              </div>

              {/* Location Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 lg:p-12"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Campus
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Education Street
                        <br />
                        Learning City, LC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaClock className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Visiting Hours
                      </h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 4:00 PM
                        <br />
                        Saturday: 9:00 AM - 12:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <FaPhone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        Parking Information
                      </h4>
                      <p className="text-gray-600">
                        Visitor parking available in Lot B<br />
                        Free for all school visitors
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105">
                    Get Directions <FiArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
