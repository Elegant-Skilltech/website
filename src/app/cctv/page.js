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
        <title>CCTV Technician Course</title>
        <meta
          name="description"
          content="Enroll in our CCTV Technician course to learn how to install and maintain closed-circuit television systems for surveillance and security. Duration: 1 Month, Fee: 15000."
        />
        <meta
          name="keywords"
          content="CCTV Technician, CCTV Installation, Surveillance Systems, Security Systems, CCTV Course, CCTV Training, CCTV Maintenance, Career in CCTV"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="CCTV Technician Course" />
        <meta
          property="og:description"
          content="Enroll in our CCTV Technician course to learn how to install and maintain closed-circuit television systems for surveillance and security. Duration: 1 Month, Fee: 15000."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/cctv"
        />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CCTV Technician Course" />
        <meta
          name="twitter:description"
          content="Enroll in our CCTV Technician course to learn how to install and maintain closed-circuit television systems for surveillance and security. Duration: 1 Month, Fee: 15000."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>CCTV Technician</h1>
          <p className={styles.description}>
            CCTV technicians install and maintain closed-circuit television
            systems for surveillance and security. They configure cameras and
            equipment, conduct inspections, and troubleshoot issues to ensure
            system reliability, contributing to safety in various settings.
          </p>
          <br />
          <h2 className={styles.subheading}>Our Course Details</h2>
          <ul>
            <li>👉 Duration: 1 Month</li>
            <li>👉 Course Fee: 15000</li>
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
