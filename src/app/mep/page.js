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
        <title>MEP Engineering Course</title>
        <meta
          name="description"
          content="Join our MEP Engineering course to learn about mechanical, electrical, and plumbing systems integration in buildings. Duration: 6 Months, Fee: 40000."
        />
        <meta
          name="keywords"
          content="MEP Engineering, Mechanical Engineering, Electrical Engineering, Plumbing Engineering, HVAC, Sustainability Consultant, MEP Course, Building Systems"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="MEP Engineering Course" />
        <meta
          property="og:description"
          content="Join our MEP Engineering course to learn about mechanical, electrical, and plumbing systems integration in buildings. Duration: 6 Months, Fee: 40000."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/mep"
        />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MEP Engineering Course" />
        <meta
          name="twitter:description"
          content="Join our MEP Engineering course to learn about mechanical, electrical, and plumbing systems integration in buildings. Duration: 6 Months, Fee: 40000."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>MEP</h1>
          <p className={styles.description}>
            MEP engineering integrates mechanical, electrical, and plumbing
            systems in buildings for safety, comfort, and functionality.
            Mechanical engineers design HVAC for temperature and air quality,
            electrical engineers handle power distribution and lighting, and
            plumbing engineers manage water supply and waste removal.
            Collaboration with architects ensures code compliance, energy
            efficiency, and occupant satisfaction.
          </p>
          <h2 className={styles.subheading}>Our Course Details</h2>
          <ul>
            <li>👉 Duration: 6 Months</li>
            <li>👉 Course Fee: 40000</li>
          </ul>
          <br />
          <h2 className={styles.subheading}>Job Opportunities</h2>
          <p className={styles.description}>
            Here are some of the key career paths available in MEP engineering:
          </p>
          <ul>
            <li>👉 MEP Engineer/Consultant</li>
            <li>👉 HVAC Engineer</li>
            <li>👉 Electrical Engineer</li>
            <li>👉 Sustainability Consultant</li>
            <li>👉 Plumbing Engineer</li>
          </ul>
          <br />
          <div className={styles.buttonContainer}>
            <center>Chat with us for more details</center>
            <Grid container justifyContent="center">
              <Grid item>
                <button className={styles.enrollButton}>
                  <Link
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
