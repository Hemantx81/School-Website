import { motion } from "framer-motion";
import {
  FaBullseye,
  FaHeart,
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

export default function MissionPage() {
  const coreValues = [
    {
      icon: <FaHeart className="text-red-500 text-4xl" />,
      title: "Compassion",
      description:
        "We nurture empathy and kindness in all our interactions, creating a supportive environment for every student.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-4xl" />,
      title: "Community",
      description:
        "We believe in the power of collaboration and foster strong relationships between students, staff, and families.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: "Innovation",
      description:
        "We embrace creative thinking and modern teaching methods to prepare students for a rapidly changing world.",
    },
    {
      icon: <FaHandsHelping className="text-green-500 text-4xl" />,
      title: "Service",
      description:
        "We develop responsible citizens committed to making positive contributions to society.",
    },
  ];

  const stats = [
    {
      value: "100%",
      label: "Graduation Rate",
      description: "Consistently maintained for 5 years",
    },
    {
      value: "95%",
      label: "College Acceptance",
      description: "Of our graduates pursue higher education",
    },
    {
      value: "50+",
      label: "Community Projects",
      description: "Organized by students annually",
    },
    {
      value: "1:12",
      label: "Teacher Ratio",
      description: "Ensuring personalized attention",
    },
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
            Our Mission & Values
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Guiding principles that shape our educational approach
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center"
          >
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBullseye className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              "To empower students with knowledge, skills, and character to
              become lifelong learners and responsible global citizens through
              innovative education in a nurturing environment."
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Vision
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-8 md:p-12"
          >
            <p className="text-xl text-gray-700 mb-6">
              We envision a learning community where:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaBullseye className="text-blue-600" />
                </div>
                <span>
                  Every student discovers their unique potential and develops a
                  passion for learning
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaBullseye className="text-blue-600" />
                </div>
                <span>
                  Educators inspire excellence through innovative and
                  personalized teaching
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaBullseye className="text-blue-600" />
                </div>
                <span>
                  Diversity is celebrated as a strength that enriches our
                  community
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaBullseye className="text-blue-600" />
                </div>
                <span>
                  Graduates are prepared to address global challenges with
                  integrity and creativity
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundational principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-all"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <p className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </p>
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-500">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Educational Philosophy
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-8 md:p-12"
          >
            <div className="prose max-w-none text-gray-700">
              <p className="text-lg mb-6">
                At our school, we believe education should be transformative,
                engaging, and relevant to the real world. Our approach combines:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <FaLightbulb className="text-blue-600" />
                    </div>
                    Academic Excellence
                  </h3>
                  <ul className="space-y-3">
                    <li>Rigorous, standards-based curriculum</li>
                    <li>Critical thinking and problem-solving focus</li>
                    <li>Personalized learning pathways</li>
                    <li>Research-based teaching methods</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <FaHeart className="text-blue-600" />
                    </div>
                    Whole Child Development
                  </h3>
                  <ul className="space-y-3">
                    <li>Social-emotional learning programs</li>
                    <li>Arts and athletics integration</li>
                    <li>Character education</li>
                    <li>Mental health support</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg">
                This balanced approach ensures our students develop both the
                intellectual capacity and emotional intelligence needed to
                thrive in college, careers, and life.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Mission in Action
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to see how we bring these principles to life every
            day
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
