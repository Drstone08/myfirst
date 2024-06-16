import React from "react";
import styles from './About.module.css'
import bg from './background.jpg'

const About = () => {
  return (
    <div className='relative min-h-screen bg-fixed bg-cover bg-center p-4' style={{ backgroundImage: `url(${bg})`,}}>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            src='#'
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src='#' alt="Cursor icon" />
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src='#' alt="Server icon" />
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimized back-end systems
                  and APIs.
                </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src='#' alt="UI icon" />
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About