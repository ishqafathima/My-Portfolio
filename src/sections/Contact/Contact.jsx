import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact Me</h1>

        <p className="contact-description">
          Have a project or opportunity? Feel free to get in
          touch with me.
        </p>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;