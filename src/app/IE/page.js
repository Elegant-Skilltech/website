import React from "react";
import styles from "../CourseDetails.module.css";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Footer from "@/components/Footer";
import Head from "next/head";

const Course = () => {
  return (
    <>
      <Head>
        {/* Basic Metadata */}
        <title>Industrial Electrician Course</title>
        <meta
          name="description"
          content="Enroll in our Industrial Electrician course to learn how to install, maintain, and repair electrical systems in industrial environments. Duration: 3 Months, Fee: 25000."
        />
        <meta
          name="keywords"
          content="Industrial Electrician, Electrical Systems, Industrial Training, Electrician Course, High-Voltage Equipment, Electrical Maintenance, Electrical Repair, Career in Electrical Engineering"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Industrial Electrician Course" />
        <meta
          property="og:description"
          content="Enroll in our Industrial Electrician course to learn how to install, maintain, and repair electrical systems in industrial environments. Duration: 3 Months, Fee: 25000."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/industrial-electrician"
        />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Electrician Course" />
        <meta
          name="twitter:description"
          content="Enroll in our Industrial Electrician course to learn how to install, maintain, and repair electrical systems in industrial environments. Duration: 3 Months, Fee: 25000."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Industrial Electrician</h1>
          <p className={styles.description}>
            An industrial electrician is responsible for installing,
            maintaining, and repairing electrical systems in industrial
            environments such as factories and plants. They work with
            high-voltage equipment and machinery, troubleshoot electrical
            problems, and ensure compliance with safety standards. Their
            expertise is crucial for minimizing downtime and ensuring the
            efficient and safe operation of industrial facilities.
          </p>
          <br />
          <h2 className={styles.subheading}>Our Course Details</h2>
          <ul>
            <li>👉 Duration: 3 Months</li>
            <li>👉 Course Fee: 25000</li>
          </ul>
          <br />
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
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Course;
