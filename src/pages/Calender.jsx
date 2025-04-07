import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Calendar as CalendarIcon,
} from "react-feather";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeView, setActiveView] = useState("month");
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample Events Data
  const events = [
    {
      id: 1,
      title: "Math Midterm Exam",
      date: new Date(2023, 10, 15),
      type: "academic",
      color: "bg-red-100 text-red-800",
    },
    {
      id: 2,
      title: "Science Fair",
      date: new Date(2023, 10, 20),
      type: "event",
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 3,
      title: "Thanksgiving Break",
      date: new Date(2023, 10, 23),
      type: "holiday",
      color: "bg-green-100 text-green-800",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting",
      date: new Date(2023, 10, 25),
      type: "event",
      color: "bg-purple-100 text-purple-800",
    },
  ];

  // Filter events based on type
  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) => event.type === activeFilter);

  // Navigate to previous/next month
  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + (direction === "prev" ? -1 : 1));
    setCurrentDate(newDate);
  };

  // Get days in month
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  // Generate days for the month view
  const renderMonthDays = () => {
    const totalDays = daysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const days = [];

    // Empty slots for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 p-1 border"></div>);
    }

    // Actual days of the month
    for (let day = 1; day <= totalDays; day++) {
      const dayEvents = filteredEvents.filter(
        (event) =>
          event.date.getDate() === day &&
          event.date.getMonth() === currentDate.getMonth() &&
          event.date.getFullYear() === currentDate.getFullYear()
      );

      days.push(
        <div key={`day-${day}`} className="h-24 p-1 border hover:bg-gray-50">
          <div className="font-medium">{day}</div>
          <div className="overflow-y-auto max-h-16">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`text-xs p-1 mb-1 rounded ${event.color}`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  // Render upcoming events list
  const renderUpcomingEvents = () => (
    <div className="space-y-3">
      {filteredEvents
        .filter((event) => event.date >= new Date())
        .sort((a, b) => a.date - b.date)
        .slice(0, 5)
        .map((event) => (
          <div
            key={event.id}
            className="p-3 border rounded-lg hover:shadow-md transition"
          >
            <div className="font-medium">{event.title}</div>
            <div className="text-sm text-gray-500">
              {event.date.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div
              className={`text-xs mt-1 inline-block px-2 py-1 rounded-full ${event.color}`}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            School Calendar
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Important dates, exams, and events at a glance
          </p>
        </div>
      </section>

      {/* Main Calendar Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          {/* Calendar Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateMonth("prev")}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-2xl font-bold">
                {currentDate.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <button
                onClick={() => navigateMonth("next")}
                className="p-2 rounded-full hover:bg-gray-200"
              >
                <ChevronRight size={20} />
              </button>
              <button
                onClick={() => setCurrentDate(new Date())}
                className="ml-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
              >
                Today
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveView("month")}
                className={`px-4 py-2 rounded-lg ${
                  activeView === "month"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setActiveView("list")}
                className={`px-4 py-2 rounded-lg ${
                  activeView === "list"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>

          {/* Filter Options */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["All", "Academic", "Event", "Holiday"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeFilter === filter.toLowerCase()
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Calendar View */}
          {activeView === "month" ? (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 bg-gray-100">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="p-3 text-center font-medium text-gray-500"
                    >
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7">{renderMonthDays()}</div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Upcoming Events</h3>
              {renderUpcomingEvents()}
            </div>
          )}

          {/* Download Options */}
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-4">Export Calendar</h3>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download size={16} />
                Download PDF
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <CalendarIcon size={16} />
                Subscribe (ICS)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendar;
