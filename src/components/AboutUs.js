import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.customclass}>
      <div className={styles.container} id="about Us">
        <h1 className={styles.heading}>About Us</h1>
        <p className={styles.intro}>
          Elegant SkillTech Pvt. Ltd. stands as a prominent education provider
          dedicated to delivering industry-relevant courses tailored to meet the
          evolving needs of today&rsquo;s job market. With a steadfast
          commitment to empowering individuals, our focus lies in equipping
          learners with practical skills and knowledge that translate seamlessly
          into professional success.
        </p>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Our Faculty</h2>
          <p>
            At Elegant SkillTech, we pride ourselves on our team of experienced
            faculty members who bring a wealth of expertise and real-world
            insights into the classroom. Their guidance, coupled with our
            state-of-the-art facilities, ensures that students receive a
            comprehensive educational experience that goes beyond traditional
            learning.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Industry Relevance</h2>
          <p>
            Elegant SkillTech is committed to bridging the gap between education
            and industry demands. By aligning our curriculum with the latest
            industry trends and technologies, we prepare our students to enter
            the workforce with confidence and competence. We believe in
            cultivating future leaders and fostering a culture of innovation,
            empowering our graduates to not only thrive in their chosen fields
            but also to drive positive change and make meaningful contributions
            to society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
