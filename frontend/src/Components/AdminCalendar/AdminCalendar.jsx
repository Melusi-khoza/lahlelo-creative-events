import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const AdminCalendar = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date()); // control current month
  const [view, setView] = useState("month");

  useEffect(() => {
    const credentials = localStorage.getItem("auth");

    const fetchBookings = async () => {
      try {
        const res = await fetch("https://lahlelo-events-backend.onrender.com/bookings", {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        });

        if (res.ok) {
          const data = await res.json();

          const formattedEvents = data.map((booking) => ({
            title: `${booking.fullname} - ${booking.eventType}`,
            start: new Date(booking.eventDate + "T00:00:00"),
            end: new Date(booking.eventDate + "T00:00:00"),
            allDay: true,
            bookingData: booking,
          }));

          setEvents(formattedEvents);
        }
      } catch (err) {
        console.error("Error loading calendar bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div style={{ width: "90%", maxWidth: "900px", height: "500px", margin: "20px auto" }}>
      <Calendar
        localizer={localizer}
        events={events}
        date={date}
        onNavigate={(newDate) => setDate(newDate)} // THIS FIXES NAVIGATION
        defaultView="month"
        view={view}
        onView={(newView) => setView(newView)}
        views={["month", "week", "day"]}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent = {(event) => {
          const b = event.bookingData;
          alert(
            `Name: ${b.fullname}
            Email: ${b.email}
            Phone: ${b.phone}
            Event Type: ${b.eventType}
            Province: ${b.province}
            Date: ${b.eventDate}`
          );
        }}
        style={{ height: 450 }}
      />
    </div>
  );
};

export default AdminCalendar;