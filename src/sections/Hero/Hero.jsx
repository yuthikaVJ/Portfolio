import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profile-pic-removebg-preview.png';
import CV from '../../assets/404-NotFound.png';
import { FaGithub, FaLinkedin, FaMedium, FaYoutube } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.info}>
        <p className={styles.locationBadge}>Working from Gampha, Sri Lanka</p>

        <h1 className={styles.name}>Yuthika Viduranga</h1>
        <h2 className={styles.role}>DevOps Engineer</h2>

        {/* <p className={styles.summary}>
          Senior software engineer with 5+ years of experience delivering scalable
          full-stack, cloud-native, and AI-enabled solutions.
        </p>

        <p className={styles.description}>
          Specializing in backend and platform engineering, AI-driven systems, and secure
          production-grade APIs, with a strong focus on reliability, performance, and clean architecture.
        </p> */}

        <a href={CV} download className={styles.resumeLink}>
          <button className="hover">Download Resume</button>
        </a>

        <div className={styles.socialRow}>
          <a href="https://www.linkedin.com/in/yuthika-viduranga-aa6b57306/" target="_blank" rel="noreferrer">
            <FaLinkedin  color="#0077B5"/> LinkedIn
          </a>
          <a href="https://github.com/Realsteelxx" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          {/* <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube color="#FF0000"/> YouTube
          </a>
          <a href="https://medium.com" target="_blank" rel="noreferrer">
            <FaMedium  /> Medium
          </a> */}
        </div>
      </div>

      <div className={styles.heroVisualWrap}>
        <div className={styles.heroVisual}>
          <img className={styles.hero} src={heroImg} alt="Profile picture of Yuthika Viduranga" />
        </div>
        <p className={styles.statusBadge}>
          <span aria-hidden="true" /><a href='#contact'>Available to connect</a>
          {/* Available to connect */}
        </p>
      </div>
    </section>
  );
}

export default Hero;
