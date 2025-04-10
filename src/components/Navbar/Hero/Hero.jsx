import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi,I'm Ramlal</h1>
        <p className={styles.description}>
        I’m a MERN stack developer passionate about building full-stack web
          applications using MongoDB, Express, React, and Node.js. I enjoy
          creating responsive, user-friendly interfaces and robust backends.
        </p>
        <a href="mailto:ramlaljha4@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img src="./src/assets/Hero/p3.png" alt="hero image" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

     
    </section>
  );
};

export default Hero;
