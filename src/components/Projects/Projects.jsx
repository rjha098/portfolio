import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

// Dynamically import project images
const projectImages = import.meta.glob(
  "../../assets/Projectt/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const Projects = () => {
  const project = {
    title: "Airbnb Clone",
    description: "Developed a full-stack Airbnb clone ",
    imageSrc: projectImages["../../assets/Projectt/airbnbb.jpg"],
    skills: [],
    sourceLink: "https://github.com/rjha098/airbnb", //update your own
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
