import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./Home.module.scss";

export function Home() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

  const layouts = {
    lg: [
      { i: "a", x: 0, y: 0, w: 5.5, h: 1.5 },
      { i: "b", x: 0, y: 1.5, w: 5.5, h: 1.7 },
      { i: "c", x: 0, y: 3.2, w: 2, h: 1 },
      { i: "d", x: 2, y: 3.2, w: 2, h: 1 },
      { i: "e", x: 0, y: 4.2, w: 4, h: 1.2 },
      { i: "f", x: 5.5, y: 0, w: 2.5, h: 3 },
    ],
    // md: [
    //   { i: "a", x: 0, y: 0, w: 2, h: 1 },
    //   { i: "b", x: 2, y: 1, w: 1, h: 1 },
    //   { i: "c", x: 3, y: 1.5, w: 1, h: 0.5 },
    // ],
    // sm: [
    //   { i: "a", x: 0, y: 0, w: 0.5, h: 0.25 },
    //   { i: "b", x: 0.5, y: 0.25, w: 0.5, h: 0.5 },
    //   { i: "c", x: 1, y: 1, w: 0.5, h: 0.25 },
    // ],
  };

  return (
    <>
      <div className={styles.gridContainer}>
        <ResponsiveGridLayout
          className={styles.gridLayout}
          layouts={layouts}
          breakpoints={breakpoints}
          cols={cols}
          isDraggable={true}
        >
          <div
            key={"a"}
            className={`${styles.introDiv} ${styles.cardDivCommon}`}
          >
            <img src={"./RVMemoji.png"} className={styles.memoji} />
            <p className={styles.intro}>
              Hi there <i className="fa-regular fa-face-smile-wink"></i>. Im
              <span> Ravi </span>a passionate immersive web developer building
              advanced VR experiences using React, Babylon JS, and Colyseus.
            </p>
          </div>
          <div
            key={"b"}
            className={`${styles.cardDivCommon} ${styles.blogDiv}`}
          >
            <h3 className={styles.blogTitle}>
              From UPSC to IDE: How I Found My Way Back to Code
            </h3>
            <p className={styles.blogGlimpse}>
              A personal journey of shifting from public service exam prep to
              pursuing my true passion in coding — and how a pandemic pause
              became my turning point into the tech world.
            </p>
            <button className={styles.readMore}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span className={styles.readMoreTxt}>Read More </span>
            </button>
          </div>
          <div key={"c"} className={`${styles.cardDivCommon}`}>
            <div className={styles.socialMediaDiv}>
              <i className="fa-brands fa-linkedin-in fa-3x"></i>
            </div>
            <button className={styles.redirection}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
          <div key={"d"} className={`${styles.cardDivCommon}`}>
            <div className={styles.socialMediaDiv}>
              <i className="fa-brands fa-github fa-3x"></i>
            </div>
            <button className={styles.redirection}>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          </div>
          <div
            key={"e"}
            className={`${styles.contactDiv} ${styles.cardDivCommon}`}
          >
            <h2>Let's Talk Ideas</h2>
            <div>
              <a href="https://discord.gg/g5U7t2BP">
                Join my Discord server{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
            <div>
              Mail:{" "}
              <a href="mailto:ravivasanth1996@gmail.com">
                ravivasanth1996@gmail.com
              </a>
            </div>
          </div>
          <div
            key={"f"}
            className={`${styles.cardDivCommon} ${styles.toolsContainer}`}
          >
            <div className={styles.toolsGrid}>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
              <div className={styles.toolsDiv}></div>
            </div>
          </div>
        </ResponsiveGridLayout>
      </div>
    </>
  );
}
