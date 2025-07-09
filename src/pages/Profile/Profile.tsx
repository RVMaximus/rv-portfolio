import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./Profile.module.scss";

export function Profile() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
  const layouts = {
    lg: [
      { i: "profile", x: 0, y: 0, w: 12, h: 1.1 },
      { i: "experience", x: 0, y: 1.1, w: 6, h: 7.7 },
      { i: "education", x: 6, y: 1.1, w: 6, h: 7.7 },
    ],
    md: [
      { i: "profile", x: 0, y: 0, w: 10, h: 1 },
      { i: "experience", x: 0, y: 1, w: 5, h: 8.5 },
      { i: "education", x: 5, y: 1, w: 5, h: 8.5 },
    ],
    xs: [
      { i: "profile", x: 0, y: 0, w: 6, h: 1.5 },
      { i: "experience", x: 0, y: 1.5, w: 6, h: 8.5 },
      { i: "education", x: 0, y: 10, w: 6, h: 3.5 },
    ],
  };

  const getProfile = () => {
    return (
      <>
        <div className={styles.profileContainer}>
          <img src="./RVMemoji.png" className={styles.profileImg} />
          <p>
            <span className={styles.webXR}>WebXR Developer</span> |{" "}
            <span className={styles.health}>Healthcare XR Specialist</span> |{" "}
            <span className={styles.multi}>Multiuser Experience Builder</span>
          </p>
        </div>
        <p className={styles.profileDesc}>
          I'm a passionate Full Stack Developer specializing in building modern
          web and immersive applications using React, Babylon.js, and Python. I
          also develop multi-user experiences powered by Colyseus for real-time
          interactivity.
        </p>
      </>
    );
  };

  const getExperience = () => {
    return (
      <>
        <div className={styles.experienceContainer}>
          <div className={styles.expTitle}>
            <h3>Senior Software Engineer - I</h3>
            <h5>April 2023 - Present</h5>
          </div>
          <h4>Brahmarsive INC</h4>
          <p>Coimbatore</p>
          <div className={styles.projectContainer}>
            <h3>Projects:</h3>
            <img src="./Brahmarsive.png" className={styles.projectImg} />
            <p className={styles.projectDesc}>
              I'm a software engineer specializing in full-stack and immersive
              application development. I’ve worked on building modern web
              interfaces, implemented interactive VR features using Babylon.js
              such as lighting, sound, and hotspots, and developed dashboards
              for data visualization. I’ve also contributed to advanced
              healthcare simulations by enabling virtual dissection, skin
              reflection, and step-by-step guided interactions using GUI and
              audio. Additionally, I designed a flexible menu navigation system
              to enhance user experience in immersive training modules.
            </p>
            <button
              className={styles.redirection}
              onClick={() => {
                window.open("https://brahmarsive.com/", "_blank");
              }}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <div className={styles.expTitle}>
            <h3>Associate Software Engineer</h3>
            <h5>Oct 2021 - March 2023</h5>
          </div>
          <h4>Nallas software solutions</h4>
          <p>Coimbatore</p>
          <div className={styles.projectContainer}>
            <h3>Projects:</h3>
            <img src="./Nallas.png" className={styles.projectImg} />
            <p className={styles.projectDesc}>
              Before becoming a full-time developer, I began my journey as an
              intern where I focused on learning .NET Core. Later, I was
              introduced to Sitecore, a powerful enterprise-level CMS, and
              worked on a client project to build a complete website for a
              company along with my team. This experience helped me understand
              content-driven development, backend integration, and collaborative
              delivery in a real-world project environment.
            </p>
            <button
              className={styles.redirection}
              onClick={() => {
                window.open("https://nallas.com/", "_blank");
              }}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
        </div>
      </>
    );
  };

  const getEducation = () => {
    return (
      <>
        <div className={styles.educationContainer}>
          <div className={styles.eduDiv}>
            <h3>Ramco Institute of Technology</h3>
            <h4>2014-2018</h4>
          </div>
          <h5>B.E EEE - 7.99 CGPA</h5>
          <h5>Rajapalayam</h5>
        </div>
        <div className={styles.educationContainer}>
          <div className={styles.eduDiv}>
            <h3>Hindu Higher Secondary School</h3>
            <h4>2012-2014</h4>
          </div>
          <h5>HSS - 92.6%</h5>
          <h5>Watrap</h5>
        </div>
        <div className={styles.educationContainer}>
          <div className={styles.eduDiv}>
            <h3>Hindu Higher Secondary School</h3>
            <h4>2010-2012</h4>
          </div>
          <h5>SSLC - 93.8%</h5>
          <h5>Watrap</h5>
        </div>
      </>
    );
  };

  return (
    <>
      <ResponsiveGridLayout
        className={styles.gridContainer}
        breakpoints={breakpoints}
        cols={cols}
        layouts={layouts}
        isDraggable={false}
      >
        <div
          key="profile"
          className={`${styles.commonCardDiv} ${styles.profileDiv}`}
        >
          {getProfile()}
        </div>
        <div
          key="experience"
          className={`${styles.commonCardDiv} ${styles.experienceDiv}`}
        >
          <h3 className={styles.experienceHeader}>Work Experience</h3>
          {getExperience()}
        </div>
        <div
          key="education"
          className={`${styles.commonCardDiv} ${styles.educationDiv}`}
        >
          <h3 className={styles.educationHeader}>Education</h3>
          {getEducation()}
        </div>
      </ResponsiveGridLayout>
    </>
  );
}
