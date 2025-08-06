import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nameSec}>
          <h2>
            <NavLink to="/" className={styles.name}>
              ravi
            </NavLink>
          </h2>
          <button
            className={styles.resumeBtn}
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </button>
        </div>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Profile
          </NavLink>
          {/* <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Projects
          </NavLink> */}
          <NavLink
            to="/tools"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Tools
          </NavLink>
          <NavLink
            to="blogs"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Blogs
          </NavLink>
        </nav>
        <button
          className={styles.resumeBtn}
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          Resume
        </button>
      </header>
    </>
  );
}

export default Navigation;
