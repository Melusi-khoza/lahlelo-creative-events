import React, { useState } from "react";
import "./BookEventPlanner.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function BookEventPlanner() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Initialize State for all form fields
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    eventType: "",
    province: "",
    comments: "",
    eventDate: "",
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, ""); // keep only numbers
    }
    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload/crash

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      // Here you would typically send formData to your backend API
      const response = await fetch(
        "https://lahlelo-events-backend.onrender.com/bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      //Check if the response is successful
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response from server:", errorText);
        throw new Error("Failed to submit booking");
      }
      const result = await response.json();

      console.log("Booking submitted successfully:", result);
      alert("Booking submitted successfully!");
      // Optionally, reset the form after successful submission
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        eventType: "",
        province: "",
        comments: "",
        eventDate: "",
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking. Please try again.");
    } finally {
      //Re-enable button
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="booking-body">
        <Header />
        <main className="booking-container">
          <h2>
            Make <span>Your</span> Booking
          </h2>
          <div className="booking-form">
            <form onSubmit={handleSubmit}>
              {/* Text Inputs */}
              <input
                type="text"
                name="fullname"
                placeholder="Enter your name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              {/* Dropdown */}
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Select event type
                </option>
                <option value="Anniversary">Anniversary Celebrations</option>
                <option value="Baby shower">Baby Showers</option>
                <option value="Birthday">Birthday Parties</option>
                <option value="Conference">Conferences</option>
                <option value="Corporate">Corporate Events</option>
                <option value="Event organizer">Event Organizers</option>
                <option value="Wedding">Wedding Decor & Planner</option>
                <option value="Other">Other</option>
              </select>

              {/*Event Date*/}
              <label>Event Date:</label>

              <input
                placeholder="Event Date"
                type="date"
                name="eventDate"
                min={new Date().toISOString().split("T")[0]}
                value={formData.eventDate}
                onChange={handleChange}
                required
              />

              {/* Radio Group */}
              <div className="radio-section">
                <p>Select your province:</p>
                <div className="radio-group">
                  {["Gauteng", "Mpumalanga", "Limpopo", "Other"].map((prov) => (
                    <label key={prov} className="radio-item">
                      <input
                        type="radio"
                        name="province"
                        value={prov}
                        checked={formData.province === prov}
                        onChange={handleChange}
                      />
                      {prov
                        .split("_")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() + word.slice(1),
                        )
                        .join(" ")}
                    </label>
                  ))}
                </div>
              </div>

              {/* Textarea */}
              <textarea
                name="comments"
                id="info"
                placeholder="Enter any additional comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default BookEventPlanner;
