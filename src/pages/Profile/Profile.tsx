import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./Profile.module.scss";
import { useEffect, useState } from "react";


type expConfigType = {
  id: string;
  title: string;
  org: string;
  duration: string;
  location: string;
  roleDesc: string;
  website: string;
};


export function Profile() {

  const [expConfig, setExpConfig] = useState<expConfigType[]>([]);
  const [projectsConfig, setProjectsConfig] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        await Promise.all([
          fetch("./experience.json")
            .then((response) => {
              if (!response.ok) throw new Error("Failed to fetch experience.json");
              return response.json();
            })
            .then((data) => {
              setExpConfig(data);
            }),

          fetch("./projects.json")
            .then((response) => {
              if (!response.ok) throw new Error("Failed to fetch projects.json");
              return response.json();
            })
            .then((data) => {
              setProjectsConfig(data);
            })
        ])
      }
      catch (e) {
        console.error("Error in fetching data", e);
      }
    }
    fetchProfileData();
  }, [])

  useEffect(() => {
    console.log("expConfig in state", expConfig);
  }, [expConfig])

  const ResponsiveGridLayout = WidthProvider(Responsive);

  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
  const layouts = {
    lg: [
      { i: "profile", x: 0, y: 0, w: 12, h: 1.1 },
      { i: "experience", x: 0, y: 1.1, w: 6, h: 5.5 },
      { i: "projects", x: 6, y: 1.1, w: 6, h: 5.5 },
    ],
    md: [
      { i: "profile", x: 0, y: 0, w: 10, h: 1 },
      { i: "experience", x: 0, y: 1, w: 5, h: 6 },
      { i: "projects", x: 5, y: 1, w: 5, h: 6 },
    ],
    xs: [
      { i: "profile", x: 0, y: 0, w: 6, h: 1.5 },
      { i: "experience", x: 0, y: 1.5, w: 6, h: 6.5 },
      { i: "projects", x: 0, y: 10, w: 6, h: 5 },
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
        {expConfig.map((experience: expConfigType) => {
          return (
            <div className={styles.experienceContainer}>
              <div className={styles.expTitle}>
                <h3>{experience.title}</h3>
                <h5>{experience.duration}</h5>
              </div>
              <h4>{experience.org}</h4>
              <p>{experience.location}</p>
              <div className={styles.roleContainer}>
                <p className={styles.roleDesc}>
                  {experience.roleDesc}
                </p>
                <button
                  className={styles.redirection}
                  onClick={() => {
                    window.open(`${experience.website}`, "_blank");
                  }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </button>
              </div>
            </div>
          )
        })}
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
      </>
    );
  };

  const getProjects = () => {
    return (
      <>
        <div className={styles.projectsContainer}>
          {
            projectsConfig?.map((project: any) => {
              return (
                <>
                  <div className={styles.projectDiv}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectLinks}>
                      <button
                        className={styles.redirection}
                        onClick={() => {
                          window.open(`${project.link}`, "_blank");
                        }}
                      ><i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                      <span className={styles.projectGithub} onClick={() => {
                        window.open(`${project.githubLink}`, "_blank");
                      }}><i className="fa-brands fa-github fa-2x"></i></span>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </>
    )
  }

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

          <h3 className={styles.educationHeader}>Education</h3>
          {getEducation()}
        </div>
        <div
          key="projects"
          className={`${styles.commonCardDiv} ${styles.projectsDiv}`}
        >
          <h3 className={styles.projectsHeader}>Projects</h3>
          {getProjects()}
        </div>
      </ResponsiveGridLayout>
    </>
  );
}
