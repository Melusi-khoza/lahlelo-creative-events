import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NotoficationBell.css";

const NotificationBell = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [newBookings, setNewBookings] = useState([]);
  const [reminders, setReminders] = useState([]);

  // Load notifications on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("newBookings");
      const seen = localStorage.getItem("seenBookings");

      const savedBookings = saved ? JSON.parse(saved) : [];
      const seenBookings = seen ? JSON.parse(seen) : [];

      // Only load bookings that have NOT been seen
      const unseen = savedBookings.filter(
        (b) => !seenBookings.find((s) => s.id === b.id)
      );

      setNewBookings(unseen);
    } catch (err) {
      console.error("Error parsing saved bookings:", err);
    }
  }, []);

  // Save newBookings whenever they change
  useEffect(() => {
    localStorage.setItem("newBookings", JSON.stringify(newBookings));
  }, [newBookings]);

  const handleClick = () => setOpen(!open);

  // Fetch bookings and calculate reminders every 5 seconds
  useEffect(() => {
    const credentials = localStorage.getItem("auth");
    if (!credentials) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch("https://lahlelo-events-backend.onrender.com/bookings", {
          headers: { Authorization: `Basic ${credentials}` },
        });
        if (!res.ok) return;

        const data = await res.json();
        if (!Array.isArray(data)) return;

        const seenBookings =
          JSON.parse(localStorage.getItem("seenBookings") || "[]") || [];

        // Merge new bookings
        setNewBookings((prev) => {
          const merged = [...prev];
          data.forEach((b) => {
            const alreadySeen = seenBookings.find((s) => s.id === b.id);
            const alreadyInList = merged.find((x) => x.id === b.id);
            if (!alreadySeen && !alreadyInList) merged.push(b);
          });
          return merged;
        });

        // Calculate reminders for events in 5 days
        const today = new Date();
        const fiveDaysLater = new Date();
        fiveDaysLater.setDate(today.getDate() + 5);

        const upcomingReminders = data.filter((b) => {
          if (!b.eventDate) return false;
          const eventDate = new Date(b.eventDate);
          return (
            eventDate.getFullYear() === fiveDaysLater.getFullYear() &&
            eventDate.getMonth() === fiveDaysLater.getMonth() &&
            eventDate.getDate() === fiveDaysLater.getDate()
          );
        });

        setReminders(upcomingReminders);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
    const interval = setInterval(fetchBookings, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBookingClick = (booking) => {
    navigate(`/AdminDashboard?booking=${booking.id}`);

    // Mark this booking as seen
    const seenBookings =
      JSON.parse(localStorage.getItem("seenBookings") || "[]") || [];
    localStorage.setItem(
      "seenBookings",
      JSON.stringify([...seenBookings, booking])
    );

    // Remove from newBookings
    setNewBookings((prev) => prev.filter((b) => b.id !== booking.id));
    setOpen(false);
  };

  // Total count: new bookings + reminders
  const count = newBookings.length + reminders.length;

  return (
    <div className="notification-container">
      <div className="bell-wrapper" onClick={handleClick}>
        <FaBell className="bell-icon" />
        {count > 0 && (
          <span className="notification-badge">{count > 9 ? "9+" : count}</span>
        )}
      </div>

      {open && (
        <div className="dropdown">
          {/* REMINDERS */}
          {reminders.length > 0 && (
            <div className="reminder-section">
              <strong>Upcoming in 5 days:</strong>
              {reminders.map((b) => (
                <p key={`reminder-${b.id}`}>
                  {b.fullname} - {b.eventType} on{" "}
                  {new Date(b.eventDate).toLocaleDateString()}
                </p>
              ))}
            </div>
          )}

          {/* NEW BOOKINGS */}
          {newBookings.length > 0 ? (
            newBookings.map((booking) => (
              <p key={booking.id} onClick={() => handleBookingClick(booking)}>
                <strong>{booking.fullname}</strong>
                <br />
                booked at {new Date(booking.bookedAt).toLocaleString()}
              </p>
            ))
          ) : reminders.length === 0 ? (
            <p className="no-bookings">No new bookings or reminders</p>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;