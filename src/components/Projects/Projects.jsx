import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const project = {
    title: "Airbnb Clone",
    description: "Developed a full-stack Airbnb clone ",
    imageSrc: "./src/assets/Projectt/airbnbb.jpg",
    skills: [],
     // You can update this to the real demo if available
    sourceLink: "https://github.com/rjha098"
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard project={project} />
      </div>
    </section>
  );
};
