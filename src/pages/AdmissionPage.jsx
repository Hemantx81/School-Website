import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaSchool,
  FaGraduationCap,
  FaFileUpload,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";

export default function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",

    // Step 2
    currentSchool: "",
    gradeLevel: "",
    interests: [],

    // Step 3
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "",

    // Step 4
    documents: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      documents: [...prev.documents, ...Array.from(e.target.files)],
    }));
  };

  const removeDocument = (index) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index),
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone) newErrors.phone = "Phone number is required";
      if (!formData.birthDate) newErrors.birthDate = "Birth date is required";
    }

    if (step === 2) {
      if (!formData.currentSchool)
        newErrors.currentSchool = "Current school is required";
      if (!formData.gradeLevel)
        newErrors.gradeLevel = "Grade level is required";
    }

    if (step === 3) {
      if (!formData.parentName)
        newErrors.parentName = "Parent/guardian name is required";
      if (!formData.parentEmail) {
        newErrors.parentEmail = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(formData.parentEmail)) {
        newErrors.parentEmail = "Email is invalid";
      }
      if (!formData.parentPhone)
        newErrors.parentPhone = "Phone number is required";
      if (!formData.relationship)
        newErrors.relationship = "Relationship is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const steps = [
    { id: 1, name: "Student Information" },
    { id: 2, name: "Academic Background" },
    { id: 3, name: "Parent Information" },
    { id: 4, name: "Documents Upload" },
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
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Begin your journey with us. Apply now for the upcoming academic
            year.
          </motion.p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-12 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-auto mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800">
                Application Process
              </h2>
              <p className="text-gray-600">Step {step} of 4</p>
            </div>

            <div className="w-full md:w-3/4">
              <div className="flex justify-between relative">
                {/* Progress line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10"></div>
                <div
                  className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 transition-all duration-500"
                  style={{
                    width: `${((step - 1) / (steps.length - 1)) * 100}%`,
                  }}
                ></div>

                {steps.map((stepItem) => (
                  <div key={stepItem.id} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                        step >= stepItem.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step > stepItem.id ? (
                        <FaCheckCircle className="text-white" />
                      ) : (
                        stepItem.id
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        step >= stepItem.id
                          ? "text-blue-600 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {stepItem.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-md p-12 text-center"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-green-600 text-4xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Application Submitted!
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Thank you for applying to our school. We've received your
                application and will contact you within 5-7 business days with
                next steps.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                  View Application Status
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium">
                  Return to Homepage
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: step > 1 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Student Information */}
                {step === 1 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaUser className="text-blue-600 mr-3" />
                      Student Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.firstName
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.lastName
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="birthDate"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Date of Birth *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            id="birthDate"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.birthDate
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                          />
                          <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {errors.birthDate && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.birthDate}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Academic Background */}
                {step === 2 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaSchool className="text-blue-600 mr-3" />
                      Academic Background
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label
                          htmlFor="currentSchool"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Current School *
                        </label>
                        <input
                          type="text"
                          id="currentSchool"
                          name="currentSchool"
                          value={formData.currentSchool}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.currentSchool
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.currentSchool && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.currentSchool}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="gradeLevel"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Grade Applying For *
                        </label>
                        <select
                          id="gradeLevel"
                          name="gradeLevel"
                          value={formData.gradeLevel}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.gradeLevel
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="">Select grade level</option>
                          <option value="Kindergarten">Kindergarten</option>
                          <option value="Grade 1">Grade 1</option>
                          <option value="Grade 2">Grade 2</option>
                          <option value="Grade 3">Grade 3</option>
                          <option value="Grade 4">Grade 4</option>
                          <option value="Grade 5">Grade 5</option>
                          <option value="Grade 6">Grade 6</option>
                          <option value="Grade 7">Grade 7</option>
                          <option value="Grade 8">Grade 8</option>
                          <option value="Grade 9">Grade 9</option>
                          <option value="Grade 10">Grade 10</option>
                          <option value="Grade 11">Grade 11</option>
                          <option value="Grade 12">Grade 12</option>
                        </select>
                        {errors.gradeLevel && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.gradeLevel}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Academic Interests
                        </label>
                        <div className="space-y-2">
                          {[
                            "STEM",
                            "Arts",
                            "Humanities",
                            "Sports",
                            "Music",
                            "Technology",
                          ].map((interest) => (
                            <label key={interest} className="flex items-center">
                              <input
                                type="checkbox"
                                checked={formData.interests.includes(interest)}
                                onChange={() => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    interests: prev.interests.includes(interest)
                                      ? prev.interests.filter(
                                          (i) => i !== interest
                                        )
                                      : [...prev.interests, interest],
                                  }));
                                }}
                                className="rounded text-blue-600 focus:ring-blue-500"
                              />
                              <span className="ml-2 text-gray-700">
                                {interest}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Parent Information */}
                {step === 3 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaUser className="text-blue-600 mr-3" />
                      Parent/Guardian Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="parentName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.parentName
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.parentName && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.parentName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="relationship"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Relationship to Student *
                        </label>
                        <select
                          id="relationship"
                          name="relationship"
                          value={formData.relationship}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.relationship
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        >
                          <option value="">Select relationship</option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Guardian">Guardian</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.relationship && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.relationship}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="parentEmail"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="parentEmail"
                          name="parentEmail"
                          value={formData.parentEmail}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.parentEmail
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.parentEmail && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.parentEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="parentPhone"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="parentPhone"
                          name="parentPhone"
                          value={formData.parentPhone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.parentPhone
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.parentPhone && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.parentPhone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Documents Upload */}
                {step === 4 && (
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                      <FaFileUpload className="text-blue-600 mr-3" />
                      Required Documents
                    </h3>

                    <div className="mb-8">
                      <p className="text-gray-600 mb-4">
                        Please upload the following documents to complete your
                        application:
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Birth Certificate</li>
                        <li>Previous School Transcripts</li>
                        <li>Immunization Records</li>
                        <li>Recommendation Letter (if applicable)</li>
                      </ul>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <FaFileUpload className="text-gray-400 text-4xl mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Drag and drop files here or click to browse
                      </p>
                      <input
                        type="file"
                        id="documents"
                        name="documents"
                        onChange={handleFileChange}
                        multiple
                        className="hidden"
                      />
                      <label
                        htmlFor="documents"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium cursor-pointer"
                      >
                        Select Files
                      </label>
                      <p className="text-gray-500 text-sm mt-2">
                        PDF, JPG, or PNG files (Max 10MB each)
                      </p>
                    </div>

                    {/* Uploaded files list */}
                    {formData.documents.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-700 mb-3">
                          Uploaded Documents:
                        </h4>
                        <ul className="space-y-2">
                          {formData.documents.map((file, index) => (
                            <li
                              key={index}
                              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg"
                            >
                              <span className="truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeDocument(index)}
                                className="text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Form Navigation */}
                <div className="bg-gray-50 px-8 py-6 flex justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      <FaArrowLeft className="mr-2" />
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < steps.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      Next Step
                      <FaArrowRight className="ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:bg-green-400"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Admissions Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSchool className="text-blue-600 text-4xl mb-4" />,
                title: "Application",
                description:
                  "Complete the online application form and submit required documents.",
              },
              {
                icon: (
                  <FaGraduationCap className="text-blue-600 text-4xl mb-4" />
                ),
                title: "Assessment",
                description:
                  "Students may be invited for an assessment or interview.",
              },
              {
                icon: <FaCheckCircle className="text-blue-600 text-4xl mb-4" />,
                title: "Decision",
                description:
                  "Receive admission decision within 2-3 weeks of completing all steps.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our admissions team for more information about the
            application process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100">
              Email Admissions
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600">
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
