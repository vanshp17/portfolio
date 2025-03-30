import React from 'react';
import '../styles/Contact.css'; // This will use the updated CSS

const Contact = () => {
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfNjm-I-egopcie5bgHl6wQTWsxHHKc8nCbMtMc6F2VSlBDOw/viewform?usp=sf_link';

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-description">
          Have any questions or want to collaborate? Click the button below to reach out through our form!
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Fill Out Form
        </a>
      </div>
    </section>
  );
};

export default Contact;