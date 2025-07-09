import styles from "./Blogs.module.scss";
import { useEffect, useState } from "react";

type BlogsConfig = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  tags: string[];
};

export function Blogs() {
  const defaultBlogs: BlogsConfig | [] = [];
  const [blogsConfig, setBlogsConfig] = useState(defaultBlogs);

  useEffect(() => {
    fetch("./src/assets/config/blogs.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blogs.json");
        return response.json();
      })
      .then((data) => {
        setBlogsConfig(data);
      })
      .catch((error) => console.error("Error fetching blogs config", error));
  }, []);

  const getBlog = (
    title: string,
    decsription: string,
    imgUrl: string,
    tags: string[],
    link: string
  ) => {
    return (
      <>
        <div
          className={styles.blogDiv}
          onClick={() => window.open(link, "_blank")}
        >
          <img className={styles.blogImg} src={`./${imgUrl}`} />
          <div className={styles.blogContent}>
            <h4 className={styles.blogTitle}>{title}</h4>
            <p className={styles.blogDesc}>{decsription}</p>
            <span className={styles.blogTags}>
              {tags.map((tag) => {
                return <span className={styles.tag}>{tag}</span>;
              })}
            </span>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.blogsContainer}>
        {blogsConfig.map((blog: BlogsConfig) => {
          return getBlog(
            blog.title,
            blog.description,
            blog.imgUrl,
            blog.tags,
            blog.link
          );
        })}
      </div>
    </>
  );
}
