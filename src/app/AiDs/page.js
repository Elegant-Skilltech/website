import React from "react";
import styles from "../CourseDetails.module.css";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Grid from "@mui/material/Grid";
import Footer from "@/components/Footer";
import Head from "next/head";

const Course = () => {
  return (
    <>
      <Head>
        {/* Basic Metadata */}
        <title>Artificial Intelligence and Data Science Programs</title>
        <meta
          name="description"
          content="Explore our Artificial Intelligence and Data Science programs and unlock diverse career opportunities in AI and Data Science. Join us for a diploma or advanced diploma and take the first step towards an exciting career."
        />
        <meta
          name="keywords"
          content="AI, Data Science, Artificial Intelligence, Diploma, Advanced Diploma, Machine Learning, Data Analyst, AI Engineer, Career Opportunities, Elegant Skilltech AI and Data Science Programs, Elegant Skilltech AI courses, Elegant Skilltech Data Science courses, Elegant Skilltech AI and Data Science diploma, Elegant Skilltech AI and Data Science advanced diploma, , Elegant Skilltech AI and Data Science course details, Elegant Skilltech AI and Data Science course fee"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Artificial Intelligence and Data Science Programs"
        />
        <meta
          property="og:description"
          content="Explore our Artificial Intelligence and Data Science programs and unlock diverse career opportunities in AI and Data Science. Join us for a diploma or advanced diploma and take the first step towards an exciting career."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/AiDs"
        />
        {/* <meta
          property="og:image"
          content=""
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Artificial Intelligence and Data Science Programs"
        />
        <meta
          name="twitter:description"
          content="Explore our Artificial Intelligence and Data Science programs and unlock diverse career opportunities in AI and Data Science. Join us for a diploma or advanced diploma and take the first step towards an exciting career."
        />
        {/* <meta
          name="twitter:image"
          content=""
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Artifical Intelligence and Data Science
          </h1>
          <p className={styles.description}>
            AI and Data Science drive innovation and efficiency across sectors.
            In healthcare, they enable predictive analytics, personalized
            treatments, and advanced diagnostics. Finance benefits from enhanced
            fraud detection and algorithmic trading. Retail sees improved
            personalized shopping and supply chains, while manufacturing gains
            from predictive maintenance and quality control. Transportation uses
            AI for autonomous vehicles and route optimization, and marketing for
            targeted campaigns. These technologies also enhance recruitment and
            personalized learning in human resources and education, fostering
            advancements and diverse career opportunities.
          </p>
          <h2 className={styles.subheading}>
            Our AI and Data Science Programs
          </h2>
          <ul>
            <li>
              👉A 6-month course where you will learn everything from the basics
              of Python to Machine Learning and Deep Learning techniques.
              Additionally, you will gain proficiency in Power BI for creating
              interactive dashboards.
            </li>
            <li>
              👉 Advanced Diploma in AI and Data Science: A 1-year course
              covering everything from Python fundamentals to advanced Machine
              Learning and Deep Learning techniques. The curriculum also
              includes training in Power BI for creating interactive dashboards
              and web scraping for data extraction.
            </li>
          </ul>
          <br />
          <h2 className={styles.subheading}>
            Job Opportunities in AI and Data Science
          </h2>
          <p className={styles.description}>
            Graduates of our AI and Data Science programs can pursue a wide
            range of career opportunities. Some potential job roles include:
          </p>
          <ul>
            <li>👉 Data Analyst</li>
            <li>👉 Machine Learning Engineer</li>
            <li>👉 Data Engineer</li>
            <li>👉 Business Intelligence Developer</li>
            <li>👉 AI Engineer</li>
          </ul>
          <br />

          {/* Enroll Now button -> For new updation */}
          {/* <div className={styles.cta}>
            <h2 className={styles.ctaHeading}>Ready to Start Your Journey?</h2>
            <p>
              Join our AI and Data Science programs and take the first step
              towards an exciting career.
            </p>
            <button className={styles.ctaButton}>Enroll Now</button>
          </div> */}

          {/* Frequently asked questions */}
          <div className={styles.faq}>
            <h2 className={styles.sectionHeading}>
              Frequently Asked Questions
            </h2>
            <div className={styles.faqItem}>
              <h3>What is Data Science and AI?</h3>
              <p>
                Data Science involves using methods and systems to extract
                insights from data. This includes collecting, cleaning, and
                analyzing data, finding patterns with statistical methods, and
                visualizing results through charts and graphs. Data scientists
                also build predictive models using algorithms.
              </p>
              <p>
                Artificial Intelligence creates machines that perform tasks
                requiring human intelligence. This includes machine learning,
                natural language processing (NLP), and computer vision. AI and
                data science often collaborate, with data science providing the
                data and insights that AI systems use to learn and make
                decisions.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>What is the duration of the AI and Data Science program?</h3>
              <p>
                The program duration is 6 months for the diploma and 1 year for
                the advanced diploma.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do I need prior knowledge in programming?</h3>
              <p>
                Basic knowledge in programming is recommended but not required.
                We provide foundational courses to get you up to speed.
              </p>
            </div>
          </div>

          {/* Whatsapp */}
          <div className={styles.buttonContainer}>
            <center> Chat with us for more details</center>
            <Grid container justifyContent="center">
              <Grid item>
                <button className={styles.enrollButton}>
                  <Link
                    aria-label="WhatsApp Chat Link"
                    href={"https://api.whatsapp.com/send/?phone=918848943507"}
                  >
                    <WhatsAppIcon />
                  </Link>
                </button>
              </Grid>
            </Grid>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Course;
