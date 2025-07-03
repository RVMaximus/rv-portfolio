import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./Home.module.scss";

export function Home() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

  const layouts = {
    lg: [
      { i: "intro", x: 0, y: 0, w: 5.5, h: 1.5 },
      { i: "blog", x: 0, y: 1.5, w: 5.5, h: 1.7 },
      { i: "linked", x: 8, y: 0, w: 2, h: 1 },
      { i: "git", x: 10, y: 0, w: 2, h: 1 },
      { i: "map", x: 10, y: 2, w: 2, h: 1 },
      { i: "yt", x: 8, y: 2, w: 2, h: 1 },
      { i: "tools", x: 5.5, y: 0, w: 2.5, h: 3.2 },
      { i: "contact", x: 8, y: 3, w: 4, h: 1.2 },
    ],
    md: [
      { i: "intro", x: 0, y: 0, w: 10, h: 2 },
      { i: "blog", x: 0, y: 2, w: 10, h: 1.5 },
      { i: "linked", x: 0, y: 3.5, w: 5, h: 1 },
      { i: "git", x: 5, y: 3.2, w: 5, h: 1 },
      { i: "map", x: 0, y: 4.2, w: 5, h: 1 },
      { i: "yt", x: 5, y: 4.2, w: 5, h: 1 },
      { i: "tools", x: 0, y: 5.2, w: 2.5, h: 3.2 },
      { i: "contact", x: 2.5, y: 8.4, w: 7.5, h: 1.2 },
    ],

    sm: [
      { i: "intro", x: 0, y: 0, w: 5, h: 1.5 },
      { i: "blog", x: 0, y: 1.5, w: 5, h: 1.7 },
      { i: "linked", x: 0, y: 3, w: 2, h: 1 },
      { i: "git", x: 2, y: 3, w: 2, h: 1 },
      { i: "map", x: 0, y: 4, w: 2, h: 1 },
      { i: "yt", x: 2, y: 4, w: 2, h: 1 },
      { i: "tools", x: 0, y: 5, w: 2, h: 3.2 },
      { i: "contact", x: 2, y: 8.2, w: 2, h: 1.2 },
    ],
  };

  const getIntro = () => {
    return (
      <>
        <img src={"./WelcomeAvatar.png"} className={styles.memoji} />
        <p className={styles.intro}>
          Hi there <i className="fa-regular fa-face-smile-wink"></i>. Im
          <span> Ravi </span>a passionate immersive web developer building
          advanced VR experiences using React, Babylon JS, and Colyseus.
        </p>
      </>
    );
  };

  const getBlog = () => {
    return (
      <>
        <h3 className={styles.blogTitle}>
          From UPSC to IDE: How I Found My Way Back to Code
        </h3>
        <p className={styles.blogGlimpse}>
          A personal journey of shifting from public service exam prep to
          pursuing my true passion in coding — and how a pandemic pause became
          my turning point into the tech world.
        </p>
        <button className={styles.readMore}>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
          <span className={styles.readMoreTxt}>Read More </span>
        </button>
      </>
    );
  };

  const getLinkedIn = () => {
    return (
      <>
        <div className={styles.socialMediaDiv}>
          <i
            className="fa-brands fa-linkedin fa-3x"
            style={{ color: "#0a66c2" }}
          ></i>
        </div>
        <button
          className={styles.redirection}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/raviraja-r-5ba12b228/",
              "_blank"
            );
          }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </>
    );
  };

  const getGitHub = () => {
    return (
      <>
        <div className={styles.socialMediaDiv}>
          <i className="fa-brands fa-github fa-3x"></i>
        </div>
        <button
          className={styles.redirection}
          onClick={() => {
            window.open("https://github.com/RVMaximus", "_blank");
          }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </>
    );
  };

  const getMap = () => {
    return (
      <>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125322.5134688553!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751524025436!5m2!1sen!2sin&zoom=10&disableDefaultUI=true"
          width="100%"
          height="100%"
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
          style={{ border: 0 }}
        ></iframe>
      </>
    );
  };

  const getYT = () => {
    return (
      <>
        <div
          className={styles.ytIcon}
          onClick={() => {
            window.open(
              "https://music.youtube.com/watch?v=ZrMuqOJP6Fc",
              "_blank"
            );
          }}
        >
          <i
            className="fa-brands fa-youtube fa-3x"
            style={{ color: "#FF0000" }}
          ></i>
        </div>
        <p className={styles.ytStatus}>
          <span className="styles.play-1">●</span>
          <span className="styles.play-2">●</span>
          <span className="styles.play-3">●</span>{" "}
          <span className={styles.offlineText}>Offline. Last played</span>
        </p>
        <p className={styles.ytSong}>Paravaiye Engu Irukkirai</p>
        <p className={styles.ytAuthor}>Ilaiyaraaja</p>
      </>
    );
  };

  const getContact = () => {
    return (
      <>
        <h2>Let's Talk Ideas</h2>
        <div>
          <a href="https://discord.gg/g5U7t2BP">
            Join my Discord server{" "}
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div>
          Mail:{" "}
          <a href="mailto:ravivasanth1996@gmail.com" className={styles.mail}>
            ravivasanth1996@gmail.com
          </a>
        </div>
      </>
    );
  };

  const getTools = () => {
    return (
      <>
        <div className={styles.toolsGrid}>
          <div className={styles.toolsDiv} title="My SQl">
            <img src="./MySQL.svg" />
          </div>
          <div className={styles.toolsDiv} title="Javascript">
            <img src="./JavaScript.svg" />
          </div>
          <div className={styles.toolsDiv} title="VS Code">
            <img src="./VSCode.svg" />
          </div>
          <div className={styles.toolsDiv} title="Typescript">
            <img src="./TypeScript.svg" />
          </div>
          <div className={styles.toolsDiv} title="Python">
            <img src="./Python.svg" />
          </div>
          <div className={styles.toolsDiv} title="Azure">
            <img src="./Azure.svg" />
          </div>
          <div className={styles.toolsDiv} title="React JS">
            <img src="./React.svg" />
          </div>
          <div className={styles.toolsDiv} title="Babylon JS">
            <img src="./Babylon.svg" />
          </div>
          <div className={styles.toolsDiv} title="Azure Devops">
            <img src="./AzureDevops.svg" />
          </div>
          <div className={styles.toolsDiv} title="CSS">
            <img src="./CSS3.svg" />
          </div>
          <div className={styles.toolsDiv} title="HTML 5">
            <img src="./HTML5.svg" />
          </div>
          <div className={styles.toolsDiv} title="Vite">
            <img src="./Vite.svg" />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <ResponsiveGridLayout
          className={styles.gridLayout}
          layouts={layouts}
          breakpoints={breakpoints}
          cols={cols}
          isDraggable={false}
        >
          <div
            key={"intro"}
            className={`${styles.introDiv} ${styles.cardDivCommon}`}
          >
            {getIntro()}
          </div>
          <div
            key={"blog"}
            className={`${styles.cardDivCommon} ${styles.blogDiv}`}
          >
            {getBlog()}
          </div>
          <div key={"linked"} className={`${styles.cardDivCommon}`}>
            {getLinkedIn()}
          </div>
          <div key={"git"} className={`${styles.cardDivCommon}`}>
            {getGitHub()}
          </div>
          <div key={"map"} className={`${styles.mapDiv}`}>
            {getMap()}
          </div>
          <div key={"yt"} className={`${styles.ytDiv}`}>
            {getYT()}
          </div>
          <div
            key={"tools"}
            className={`${styles.cardDivCommon} ${styles.toolsContainer}`}
          >
            {getTools()}
          </div>
          <div
            key={"contact"}
            className={`${styles.contactDiv} ${styles.cardDivCommon}`}
          >
            {getContact()}
          </div>
        </ResponsiveGridLayout>
      </div>
    </>
  );
}
