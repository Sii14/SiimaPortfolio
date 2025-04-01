'use client';  // to indicate the file is client-side

import { useState } from 'react';  // Import useState hook
import styles from './ContactPage.module.css';
import 'font-awesome/css/font-awesome.min.css';

export default function ContactPage() {
  // State hooks for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // To show success/failure message

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form inputs
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),  // Send form data
      });

      if (response.ok) {
        setStatus('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Error sending message. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.neumorphicCard}>
        {/* Left form content */}
        <div className={styles.leftForm}>
          <h2>Contact Us</h2>
          <p>Feel free to contact me any time. I will get back to you as soon as I can.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}  // Update state as user types
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Update state as user types
            />
            <textarea
              placeholder="Your Message"
              className={styles.textareaField}
              value={message}
              onChange={(e) => setMessage(e.target.value)}  // Update state as user types
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
          </form>
          {status && <p>{status}</p>}  {/* Display success or error message */}
        </div>

        {/* Right content */}
        <div className={styles.rightContent}>
          <h2>Info</h2>
          <p><i className="fa fa-envelope"></i>Email: siimasamson79@gmail.com</p>
          <p><i className="fa fa-map-marker"></i> Location: Dar-es-salaam, Tanzania</p>
          <p><i className="fa fa-phone"></i> Phone: +255 692 466 359</p>
        </div>
        <div className={styles.rightStrip}></div> {/* Goldenrod strip on the right */}
      </div>
    </div>
  );
}
