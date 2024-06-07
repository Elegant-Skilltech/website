import React from "react";
import styles from "./Aim.module.css";

const Aim = () => {
  return (
    <section className="w-full bg-cover bg-no-repeat bg-center">
      <div className={styles.container}>
        <h1 className={styles.heading}>Our Aim</h1>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Mission</h2>
          <p>
            Our mission is to empower individuals with the skills and knowledge
            they require to thrive in today&rsquo;s dynamic world. We are
            committed to delivering high-quality, innovative solutions that
            foster personal and professional growth, unlocking the potential of
            every learner. Through our dedication to excellence and social
            responsibility, we aim to create a positive impact on society and
            inspire positive change.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Vision</h2>
          <p>
            Our vision is to be a global leader in education and training, known
            for our commitment to excellence, innovation, and social impact. We
            aspire to create a vibrant learning community that inspires and
            empowers individuals to reach their full potential and make a
            positive difference in the world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aim;
