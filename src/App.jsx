import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NewsEventsPage from "./pages/NewsEventsPage";
import AdmissionsPage from "./pages/AdmissionPage";
import HistoryPage from "./pages/HistoryPage";
import MissionPage from "./pages/MissionPage";
import FacilitiesPage from "./pages/FacilitiesPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsevents" element={<NewsEventsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/mission" element={<MissionPage />} />
          <Route path="/about/facilities" element={<FacilitiesPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
