
import styles from './ContactPage.module.css';
import 'font-awesome/css/font-awesome.min.css';


export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.neumorphicCard}>
        {/* Inner content za kwenye contact page */}
        {/* Left form content */}
        <div className={styles.leftForm}>
          <h2>Contact Us</h2>
          <p>Feel free to contact me any time. I will get back to you as soon as i can.</p>
          <form>
            <input type="text" placeholder="Your Name" className={styles.inputField} />
            <input type="email" placeholder="Your Email" className={styles.inputField} />
            <textarea placeholder="Your Message" className={styles.textareaField}></textarea>
            <button type="submit" className={styles.submitButton}>Send</button>
          </form>
        </div>

        {/* Right content */}
        <div className={styles.rightContent}>
          <h2>Info</h2>
          <p><i className="fa fa-envelope"></i>Email: siimasamson79@gmail.com</p>
          <p><i className="fa fa-map-marker"></i> Location: Dar-es-salaam, Tanzania</p>
          <p><i className="fa fa-phone"></i> Phone: +255 692 466 359</p>
        </div>
        <div className={styles.rightStrip}></div> {/* goldenrod strip upande wa kulia */}
      </div>
    </div>
  );
}

