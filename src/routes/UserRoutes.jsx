import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";
import Home from "../pages/user/Home";
import NewsEventsPage from "../pages/user/NewsEventsPage";
import AdmissionsPage from "../pages/user/AdmissionPage";
import Contact from "../pages/user/Contact";
import About from "../pages/user/About";
import Academics from "../pages/user/Academics";
import Curriculum from "../pages/user/Curriculum";
import Departments from "../pages/user/Departments";
import Calendar from "../pages/user/Calender";
import HistoryPage from "../pages/user/HistoryPage";
import MissionPage from "../pages/user/MissionPage";
import FacilitiesPage from "../pages/user/FacilitiesPage";

const UserRoutes = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsevents" element={<NewsEventsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/academics/curriculum" element={<Curriculum />} />
        <Route path="/academics/departments" element={<Departments />} />
        <Route path="/academics/calendar" element={<Calendar />} />
        <Route path="/about/history" element={<HistoryPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/facilities" element={<FacilitiesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UserRoutes;
