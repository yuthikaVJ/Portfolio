import styles from './Navbar.module.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from './ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? moon : sun;
  const themeLabel = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a href="#hero" className={styles.brand}>
          yuthika.
        </a>

        <div className={styles.actions}>
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <img src={themeIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;