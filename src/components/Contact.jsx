import React from 'react';
import './Contacts.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-box">
        <h2 className="contact-title">Contact Information</h2>
        <p><strong>Email:</strong> shouryadeep05@outlook.com</p>
        <p><strong>Phone:</strong> +91-6351517214</p>
        <p><strong>Location:</strong> Vadodara, India</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/Agent9777">https://github.com/Agent9777</a></p>
        <p><strong>LinkedIn:</strong><a href="https://www.linkedin.com/in/shourya-deep/">https://www.linkedin.com/in/shourya-deep/</a></p>
      </div>
    </section>
  );
};

export default Contact;
