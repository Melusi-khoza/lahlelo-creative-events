import AdminFooter from "../../Components/AdminFooter/AdminFooter";
import AdminHeader from "../../Components/AdminHeader/AdminHeader";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminStats from "../../Components/AdminStats/AdminStats";
import "./AdminDashboard.css";
import AdminCalendar from "../../Components/AdminCalendar/AdminCalendar";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const credentials = localStorage.getItem("auth");

    const fetchBookings = () => {
      fetch("https://lahlelo-events-backend.onrender.com/bookings", {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setBookings(data))
        .catch((error) => console.error("Error fetching bookings:", error));
    };

    fetchBookings();
    const interval = setInterval(fetchBookings, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bookings.length === 0) return;

    const params = new URLSearchParams(location.search);
    const bookingId = params.get("booking");

    if (bookingId) {
      const element = document.getElementById(`booking-${bookingId}`);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });

        element.style.backgroundColor = "#fff3cd";

        setTimeout(() => {
          element.style.backgroundColor = "transparent";
        }, 2000);

        navigate("/AdminDashboard", { replace: true });
      }
    }
  }, [bookings, location.search, navigate]);

  const handleDelete = async (id) => {
    const credentials = localStorage.getItem("auth");

    if (!window.confirm("Are you sure you want to delete this booking?"))
      return;

    try {
      const response = await fetch(
        `https://lahlelo-events-backend.onrender.com/admin/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        },
      );

      if (response.ok) {
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
      } else {
        alert("Failed to delete booking");
      }
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const handleSendEmail = async (email, name, eventType, eventDate) => {
    const credentials = localStorage.getItem("auth");

    if (!window.confirm("Send email to this client?")) return;

    try {
      // Create form data instead of JSON
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("eventType", eventType);
      formData.append("eventDate", eventDate);

      const res = await fetch(
        `https://lahlelo-events-backend.onrender.com/bookings/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${credentials}`,
          },
          body: formData.toString(), // Send as form data
        },
      );

      if (res.ok) {
        alert("Email sent successfully!");
      } else {
        const errorText = await res.text();
        console.error("Server response:", errorText);
        alert("Failed to send email");
      }
    } catch (error) {
      console.error("Email error:", error);
      alert("Network error - check console");
    }
  };

  const openWhatsApp = (phone, name, eventType, eventDate) => {
    const cleanNumber = phone.replace(/^0/, "27");

    const message = `Hello ${name},

Thank you for choosing Lahlelo Creative Events.
We have received your booking with the following details:
Event Type: ${eventType}
Event Date: ${eventDate}
To ensure that we plan everything according to your expectations, please kindly provide us with the following additional details:
o Event venue/location
o Event start and end time
o Estimated number of guests
o Theme or color scheme (if applicable)
o Any special requests or preferences
This information will help our team prepare and tailor our services specifically to your needs.
Thank you once again for trusting Lahlelo Creative Events. We look forward to working with you.

Regards,
Lahlelo Creative Events`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${cleanNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.eventType.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="admin-dashboard-wrapper">
      <AdminHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main className="admin-main-content">
        <h1 className="dashboard-title">
          Admin <span>Dashboard</span>
        </h1>

        <div className="welcome-text">
          <p>
            Welcome to the Admin Dashboard! Manage events, view notifications,
            and stay organized.
          </p>
        </div>
        <h2>
          Bookings <span>Calendar</span>
        </h2>
        <AdminCalendar bookings={bookings} searchTerm={searchTerm} />
        <section className="bookings-section">
          <h2 className="section-title">
            Bookings <span>Records</span>
          </h2>

          <div className="table-responsive-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>FULL NAME</th>
                  <th>EMAIL</th>
                  <th>PHONE</th>
                  <th>EVENT TYPE</th>
                  <th>EVENT DATE</th>
                  <th>PROVINCE</th>
                  <th>COMMENTS</th>
                  <th>BOOKED TIME</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    id={`booking-${booking.id}`}
                    className="booking-row"
                  >
                    <td data-label="FULL NAME">{booking.fullname}</td>

                    <td data-label="EMAIL">
                      <span
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() =>
                          handleSendEmail(
                            booking.email,
                            booking.fullname,
                            booking.eventType,
                            booking.eventDate,
                          )
                        }
                      >
                        {booking.email}
                      </span>
                    </td>

                    <td data-label="PHONE">
                      <div className="phone-links">
                        <a href={`tel:${booking.phone}`}>📞</a>
                        <span
                          style={{
                            color: "green",
                            cursor: "pointer",
                            marginLeft: "8px",
                          }}
                          onClick={() =>
                            openWhatsApp(
                              booking.phone,
                              booking.fullname,
                              booking.eventType,
                              booking.eventDate,
                            )
                          }
                        >
                          💬
                        </span>
                        <span style={{ marginLeft: "8px" }}>
                          {booking.phone}
                        </span>
                      </div>
                    </td>

                    <td data-label="EVENT TYPE">{booking.eventType}</td>

                    <td data-label="EVENT DATE">
                      {booking.eventDate?.split("T")[0]}
                    </td>

                    <td data-label="PROVINCE">{booking.province}</td>

                    <td data-label="COMMENTS" className="comments-cell">
                      {booking.comments}
                    </td>

                    <td data-label="BOOKED TIME">{booking.bookedAt}</td>

                    <td data-label="DELETE" className="delete-cell">
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(booking.id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="stats-section">
          <AdminStats />
        </section>
      </main>

      <AdminFooter />
    </div>
  );
}

export default AdminDashboard;
