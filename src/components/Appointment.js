import React, { useState } from "react";
import "./Appointment.css"; // Ensure the CSS file path is correct

const Appointment = () => {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [errors, setErrors] = useState({ name: "", email: "", date: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // To track if the form is submitted

  const validateDate = (date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    return selectedDate > today;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation
    if (name === "name" && value.trim().length < 3) {
      setErrors((prev) => ({
        ...prev,
        name: "Name must be at least 3 characters.",
      }));
    } else if (name === "name") {
      setErrors((prev) => ({ ...prev, name: "" }));
    }

    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email address." }));
    } else if (name === "email") {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (name === "date" && !validateDate(value)) {
      setErrors((prev) => ({ ...prev, date: "Please select a future date." }));
    } else if (name === "date") {
      setErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors
    if (!errors.name && !errors.email && !errors.date) {
      // Simulate a successful booking (e.g., API call)
      // Here, you can replace this with an actual API call to save the data
      alert(`Appointment booked for ${formData.name} on ${formData.date}!`);

      // Simulate a backend call (here just setting state for demo)
      setIsSubmitted(true);

      // Reset form data after booking
      setFormData({ name: "", email: "", date: "" });
    }
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.date &&
    !errors.name &&
    !errors.email &&
    !errors.date;

  return (
    <section className="appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <small className="error">{errors.date}</small>}
        </div>
        <button type="submit" disabled={!isFormValid}>
          Book Now
        </button>
      </form>

      {isSubmitted && (
        <div className="success-message">
          <p>Your appointment has been successfully booked!</p>
        </div>
      )}
    </section>
  );
};

export default Appointment;
