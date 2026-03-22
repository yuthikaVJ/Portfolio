import styles from './ContactStyles.module.css';
import { LuMail, LuMapPin, LuSend } from 'react-icons/lu';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Connect</h1>
      <p className={styles.subtitle}>
        Ready to bring your next project to life? Let&apos;s discuss how my expertise in full-stack
        development and AI agent development can help achieve your goals.
      </p>

      <div className={styles.layout}>
        <div className={styles.infoColumn}>
          <article className={styles.infoCard}>
            <LuMail className={styles.infoIcon} aria-hidden="true" />
            <div>
              <h2>Email</h2>
              <p>yuthikaviduranga@gmail.com</p>
            </div>
          </article>

          <article className={styles.infoCard}>
            <LuMapPin className={styles.infoIcon} aria-hidden="true" />
            <div>
              <h2>Location</h2>
              <p>Colombo, Sri Lanka</p>
            </div>
          </article>
        </div>

        <form className={styles.formCard} action="https://formspree.io/f/xzzblele" method="post">
          <h2 className={styles.formTitle}>Send a Message</h2>

          <label htmlFor="email" hidden>
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email" hidden>
            Your Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />

          <label htmlFor="subject" hidden>
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />

          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button className={styles.submitBtn} type="submit">
            <LuSend aria-hidden="true" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
