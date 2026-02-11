import React, { useState } from "react";
import "./BookEventPlanner.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function BookEventPlanner() {
  // 1. Initialize State for all form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    province: "",
    comments: "",
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload/crash
    alert(`Booking submitted for: ${formData.name}`);
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Header />
      <div className="booking-body">
        <main className="booking-container">
          <h2>Make Your Booking</h2>
          <div className="booking-form">
            <form onSubmit={handleSubmit}>
              {/* Text Inputs */}
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
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
                <option value="anniversary">Anniversary Celebrations</option>
                <option value="baby_shower">Baby Showers</option>
                <option value="birthday">Birthday Parties</option>
                <option value="conference">Conferences</option>
                <option value="corporate">Corporate Events</option>
                <option value="event_organizer">Event Organizers</option>
                <option value="wedding">Wedding Decor & Planner</option>
                <option value="other">Other</option>
              </select>

              {/* Radio Group */}
              <div className="radio-section">
                <p>Select your province:</p>
                <div className="radio-group">
                  {["gauteng", "mpumalanga", "other"].map((prov) => (
                    <label key={prov} className="radio-item">
                      <input
                        type="radio"
                        name="province"
                        value={prov}
                        checked={formData.province === prov}
                        onChange={handleChange}
                      />
                      {prov.charAt(0).toUpperCase() + prov.slice(1)}
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

              <button type="submit">Submit</button>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default BookEventPlanner;
