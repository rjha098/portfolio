import React from "react";
import email from "../../assets/contact/emailIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"
import RESUME from "../../assets/contact/RESUME.jpg"
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="ramlaljha4@gmail.com">ramlaljha4@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ramlal-kumar-5555262a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">linkedin.com Ramlal Kumar</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/rjha098">github.com rjha098</a>
           
        </li>
        <li className={styles.link}>
          <img className={styles.rol} src={RESUME} alt="resume" />
          <a href="https://drive.google.com/file/d/13M_YipNJaBhr6GSDIyuzJOvH1fIYeDBJ/view?usp=sharing">Download my resume</a>
           
        </li>
      </ul>
    </footer>
  );
};