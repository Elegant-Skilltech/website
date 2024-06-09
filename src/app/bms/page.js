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
        <title>Building Management System (BMS) Course</title>
        <meta
          name="description"
          content="Enroll in our Building Management System (BMS) course to learn how to monitor and manage mechanical, electrical, and electromechanical systems in a facility. Duration: 3 months, Fee: 25000."
        />
        <meta
          name="keywords"
          content="Building Management System, BMS, BMS Engineer, BMS Technician, BMS Operator, Building Systems, HVAC, Fire Safety Systems, Career in BMS"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta
          property="og:title"
          content="Building Management System (BMS) Course"
        />
        <meta
          property="og:description"
          content="Enroll in our Building Management System (BMS) course to learn how to monitor and manage mechanical, electrical, and electromechanical systems in a facility. Duration: 3 months, Fee: 25000."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/bms"
        />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Building Management System (BMS) Course"
        />
        <meta
          name="twitter:description"
          content="Enroll in our Building Management System (BMS) course to learn how to monitor and manage mechanical, electrical, and electromechanical systems in a facility. Duration: 3 months, Fee: 25000."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Building Management System (BMS)</h1>
          <p className={styles.description}>
            Building management system (BMS) is a control system that can be
            used to monitor and manage the mechanical, electrical, and
            electromechanical systems and services in a facility. Such services
            include power; heating, ventilation and air conditioning; physical
            access control; fire safety systems; water pumps; elevators; and
            lights.
          </p>
          <br />
          <h2 className={styles.subheading}>Our Course Details</h2>
          <ul>
            <li>👉 Duration: 3 Months</li>
            <li>👉 Course Fee: 25000</li>
          </ul>
          <h2 className={styles.subheading}>Job Opportunities</h2>
          <p className={styles.description}>
            Various career opportunities are available in the field of BMS
          </p>
          <ul>
            <li>👉 BMS Engineer</li>
            <li>👉 BMS Technician</li>
            <li>👉 BMS Operator</li>
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
        <Footer />
      </div>
    </>
  );
};

export default Course;
