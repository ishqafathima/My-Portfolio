import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>

          <h1>Contact Me</h1>

          <p>
            Have a question, project idea, or opportunity?
            Feel free to send me a message.
          </p>

          <div className="heading-line"></div>
        </div>

        {/* Contact Layout */}
        <div className="contact-layout">

          {/* Left Information */}
          <div className="contact-info">

            

            <h2>Let's work together.</h2>

            <p>
              I am currently looking for internship opportunities where
              I can apply my technical skills, gain professional
              experience, and contribute to meaningful projects.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <span className="detail-label">EMAIL</span>
                <span className="detail-value">
                  ishqafathima34@gmail.com
                </span>
              </div>

              <div className="contact-detail">
                <span className="detail-label">LOCATION</span>
                <span className="detail-value">
                  Sri Lanka
                </span>
              </div>

              <div className="contact-detail">
                <span className="detail-label">AVAILABILITY</span>
                <span className="detail-value">
                  Open to Internship Opportunities
                </span>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="contact-form-card">

            <div className="form-header">
              
              <p>SEND A MESSAGE</p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
              >
                <span>
                  {loading ? "Sending..." : "Send Message"}
                </span>

                {!loading && (
                  <span className="send-arrow">↗</span>
                )}
              </button>

            </form>

            {status && (
              <p className="contact-status">
                {status}
              </p>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;