'use client';
import { motion } from 'framer-motion'; // Import motion for animation
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPageWrapper}>
      {/* Left content with motion animation */}
      <motion.div 
        className={styles.leftContent}
        initial={{ x: -100, opacity: 0 }} // Start offscreen to the left
        animate={{ x: 0, opacity: 1 }} // Animate to normal position
        transition={{ duration: 2, ease: "easeOut" }} // Smooth animation
      >
        <h1>GET IN TOUCH</h1>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <p className={styles.bold}>Address</p>
          </div>
          <p>Tanzania, 321, Dar-es-salaam, Posta</p>

          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <p className={styles.bold}>Phone</p>
          </div>
          <p>+255 692 466 359</p>

          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <p className={styles.bold}>Email</p>
          </div>
          <p>siimasamson79@gmail.com</p>
        </div>
      </motion.div>

      <div className={styles.container}>
        {/* Adding <i> tags with inline CSS variables */}
        <i style={{ '--clr': '#00ff0a' } as React.CSSProperties}></i>
        <i style={{ '--clr': '#ff0057' } as React.CSSProperties}></i>
        <i style={{ '--clr': '#fffd44' } as React.CSSProperties}></i>

        <div className={styles.contacts}>
          <h2>SEND MESSAGE</h2>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Full Name" />
          </div>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Email" />
          </div>

          <div className={styles.inputBox}>
            <input type="text" placeholder="Type message" />
          </div>
        </div>
      </div>
    </div>
  );
}
