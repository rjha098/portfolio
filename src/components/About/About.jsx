import React from "react";
import styles from "./About.module.css";
import hero from "../../assets/Hero/p3.png";
import cursorIcon from "../../assets/About/cursorIcon.png";
import serverIcon from "../../assets/About/serverIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img
        src={hero}
        alt=" me sitting with a laptop" className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={cursorIcon} alt="cursor icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Devloper</h3>
            <p>
              I'm a frontend developer  building responsive websites and
              optimise sites
            </p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img src={serverIcon} alt="server icon" />
          <div className={styles.aboutItemText}>
            <h3>Backend Devloper</h3>
            <p>
              I'm a backend developer with devloping fast and optimised back-end
              system with the Apis
            </p>
          </div>
        </li>

       
      </ul>
      </div>
    </section>
  );
};

export default About;
