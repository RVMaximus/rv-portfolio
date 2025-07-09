import { Responsive, WidthProvider } from "react-grid-layout";
import styles from "./Tools.module.scss";
import { useEffect, useState } from "react";

type ToolsConfig = {
  id: string;
  name: string;
  description: string;
  link: string;
  imgUrl: string;
};

export function Tools() {
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
  const cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
  const layouts = {
    lg: [
      { i: "description", x: 0, y: 0, w: 6, h: 1.75 },
      { i: "azure", x: 6, y: 0, w: 3, h: 1.75 },
      { i: "azure-devops", x: 9, y: 0, w: 3, h: 1.75 },

      { i: "babylonjs", x: 0, y: 1.75, w: 3, h: 1.75 },
      { i: "html", x: 3, y: 1.75, w: 3, h: 1.75 },
      { i: "css", x: 6, y: 1.75, w: 3, h: 1.75 },
      { i: "sass", x: 9, y: 1.75, w: 3, h: 1.75 },

      { i: "react-bootstrap", x: 0, y: 3.5, w: 3, h: 1.75 },
      { i: "javascript", x: 3, y: 3.5, w: 3, h: 1.75 },
      { i: "typescript", x: 6, y: 3.5, w: 3, h: 1.75 },
      { i: "mysql", x: 9, y: 3.5, w: 3, h: 1.75 },

      { i: "mongodb", x: 0, y: 5.25, w: 3, h: 1.75 },
      { i: "python", x: 3, y: 5.25, w: 3, h: 1.75 },
      { i: "reactjs", x: 6, y: 5.25, w: 3, h: 1.75 },
      { i: "vite", x: 9, y: 5.25, w: 3, h: 1.75 },

      { i: "colyseus", x: 0, y: 7, w: 3, h: 1.75 },
      { i: "vscode", x: 3, y: 7, w: 3, h: 1.75 },
      { i: "react-redux", x: 6, y: 7, w: 3, h: 1.75 },
      { i: "react-router", x: 9, y: 7, w: 3, h: 1.75 },

      { i: "chatgpt", x: 0, y: 8.75, w: 3, h: 1.75 },
      { i: "gemini", x: 3, y: 8.75, w: 3, h: 1.75 },
    ],
    md: [
      { i: "description", x: 0, y: 0, w: 5, h: 1.75 },
      { i: "azure", x: 5, y: 0, w: 2.5, h: 1.75 },
      { i: "azure-devops", x: 7.5, y: 0, w: 2.5, h: 1.75 },

      { i: "babylonjs", x: 0, y: 1.75, w: 2.5, h: 1.75 },
      { i: "html", x: 2.5, y: 1.75, w: 2.5, h: 1.75 },
      { i: "css", x: 5, y: 1.75, w: 2.5, h: 1.75 },
      { i: "sass", x: 7.5, y: 1.75, w: 2.5, h: 1.75 },

      { i: "react-bootstrap", x: 0, y: 3.5, w: 2.5, h: 1.75 },
      { i: "javascript", x: 2.5, y: 3.5, w: 2.5, h: 1.75 },
      { i: "typescript", x: 5, y: 3.5, w: 2.5, h: 1.75 },
      { i: "mysql", x: 7.5, y: 3.5, w: 2.5, h: 1.75 },

      { i: "mongodb", x: 0, y: 5.25, w: 2.5, h: 1.75 },
      { i: "python", x: 2.5, y: 5.25, w: 2.5, h: 1.75 },
      { i: "reactjs", x: 5, y: 5.25, w: 2.5, h: 1.75 },
      { i: "vite", x: 7.5, y: 5.25, w: 2.5, h: 1.75 },

      { i: "colyseus", x: 0, y: 7, w: 2.5, h: 1.75 },
      { i: "vscode", x: 2.5, y: 7, w: 2.5, h: 1.75 },
      { i: "react-redux", x: 5, y: 7, w: 2.5, h: 1.75 },
      { i: "react-router", x: 7.5, y: 7, w: 2.5, h: 1.75 },

      { i: "chatgpt", x: 0, y: 8.75, w: 2.5, h: 1.75 },
      { i: "gemini", x: 2.5, y: 8.75, w: 2.5, h: 1.75 },
    ],
    xs: [
      { i: "description", x: 0, y: 0, w: 4, h: 1 },

      { i: "azure", x: 0, y: 1, w: 1, h: 1.5 },
      { i: "azure-devops", x: 1, y: 1, w: 1, h: 1.5 },

      { i: "babylonjs", x: 0, y: 2.5, w: 1, h: 1.5 },
      { i: "html", x: 1, y: 2.5, w: 1, h: 1.5 },

      { i: "css", x: 0, y: 4, w: 1, h: 1.5 },
      { i: "sass", x: 1, y: 4, w: 1, h: 1.5 },

      { i: "react-bootstrap", x: 0, y: 5.5, w: 1, h: 1.5 },
      { i: "javascript", x: 1, y: 5.5, w: 1, h: 1.5 },

      { i: "typescript", x: 0, y: 6, w: 1, h: 1.5 },
      { i: "mysql", x: 1, y: 6, w: 1, h: 1.5 },

      { i: "mongodb", x: 0, y: 7.5, w: 1, h: 1.5 },
      { i: "python", x: 1, y: 7.5, w: 1, h: 1.5 },

      { i: "reactjs", x: 0, y: 9, w: 1, h: 1.5 },
      { i: "vite", x: 1, y: 9, w: 1, h: 1.5 },

      { i: "colyseus", x: 0, y: 10.5, w: 1, h: 1.5 },
      { i: "vscode", x: 1, y: 10.5, w: 1, h: 1.5 },

      { i: "react-redux", x: 0, y: 12, w: 1, h: 1.5 },
      { i: "react-router", x: 1, y: 12, w: 1, h: 1.5 },

      { i: "chatgpt", x: 0, y: 13.5, w: 1, h: 1.5 },
      { i: "gemini", x: 1, y: 13.5, w: 1, h: 1.5 },
    ],
  };

  const getDescription = () => {
    return (
      <>
        <img src={"./WelcomeAvatar.png"} className={styles.descImage} />
        <p className={styles.descText}>
          I work with a diverse set of tools and technologies that support my
          development workflow—from frontend to backend, and immersive
          experiences. These tools help me build performant, scalable, and
          visually engaging applications across web and XR platforms.
        </p>
      </>
    );
  };

  const getTools = (
    imgUrl: string,
    title: string,
    desc: string,
    _redirectionLink?: string
  ) => {
    return (
      <>
        <img src={`./${imgUrl}.svg`} className={styles.toolsImg} />
        <h3 className={styles.toolsTitle}>{title}</h3>
        <p className={styles.toolsDesc}>{desc}</p>
        <button
          className={styles.redirection}
          onClick={() => {
            window.open(_redirectionLink, "_blank");
          }}
        >
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </button>
      </>
    );
  };

  const defaultTools: ToolsConfig | [] = [];
  const [toolsConfig, setToolsConfig] = useState(defaultTools);

  useEffect(() => {
    fetch("./tools.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch tools.json");
        return response.json();
      })
      .then((data) => {
        setToolsConfig(data);
      })
      .catch((error) => console.error("Error fetching tools config", error));
  }, []);

  return (
    <>
      <ResponsiveGridLayout
        className={styles.gridContainer}
        breakpoints={breakpoints}
        cols={cols}
        layouts={layouts}
        isDraggable={false}
      >
        <div key="description" className={styles.descriptionDiv}>
          {getDescription()}
        </div>
        {toolsConfig.map((tool: ToolsConfig) => {
          return (
            <div key={tool.id} className={styles.toolsDiv}>
              {getTools(tool.imgUrl, tool.name, tool.description, tool.link)}
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </>
  );
}
