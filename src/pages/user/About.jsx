import React from "react";

const About = () => {
  return (
    <div className="bg-white-50 dark:bg-gray-800 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our School
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empowering students with knowledge, creativity, and values for a
            brighter future.
          </p>
        </div>
      </section>

      {/* School History */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="School Building"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our History
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, our school has been a cornerstone of academic
                excellence and character development. We started with just 50
                students and have grown into a leading institution with over
                2,000 students today.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to innovation in education has earned us multiple
                awards, including "Best School in the Region" (2022).
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition duration-300">
                Learn More About Our Achievements
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Meet Our Dedicated Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((teacher) => (
              <div
                key={teacher}
                className="bg-gray-50 p-6 rounded-xl shadow-md text-center"
              >
                <img
                  src={`https://randomuser.me/api/portraits/${
                    teacher % 2 === 0 ? "women" : "men"
                  }/${teacher}.jpg`}
                  alt="Teacher"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  Mr. John Doe
                </h3>
                <p className="text-blue-600 mb-2">Math Teacher</p>
                <p className="text-gray-600">
                  Passionate about making complex concepts simple and engaging
                  for students.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Parents & Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={`https://randomuser.me/api/portraits/${
                      testimonial % 2 === 0 ? "women" : "men"
                    }/${testimonial + 5}.jpg`}
                    alt="Parent"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-500 text-sm">Parent</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "This school has transformed my child’s learning experience.
                  The teachers are incredibly supportive!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white text-center px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll your child today and give them the gift of quality education.
          </p>
          <button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
