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
        <title>Oil and Gas Course</title>
        <meta
          name="description"
          content="Join our Oil and Gas course to learn about the critical global energy sources and explore various career opportunities in the industry. Duration: Varies, Fee: Varies."
        />
        <meta
          name="keywords"
          content="Oil and Gas, Petroleum Engineer, Refinery Engineer, Safety Inspectors, Energy Industry, Oil and Gas Course"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Oil and Gas Course" />
        <meta
          property="og:description"
          content="Join our Oil and Gas course to learn about the critical global energy sources and explore various career opportunities in the industry. Duration: Varies, Fee: Varies."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/oilandgas"
        />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oil and Gas Course" />
        <meta
          name="twitter:description"
          content="Join our Oil and Gas course to learn about the critical global energy sources and explore various career opportunities in the industry. Duration: Varies, Fee: Varies."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Oil and Gas</h1>
          <p className={styles.description}>
            Oil and gas are crucial global energy sources, fueling industries,
            transportation, and households. Extracted from underground
            reservoirs, they power vehicles, generate electricity, and heat
            homes. However, environmental concerns prompt a shift toward cleaner
            alternatives, urging the industry to innovate for sustainability
            while meeting ongoing energy needs.
          </p>
          <br />
          <h2 className={styles.subheading}>Job Opportunities</h2>
          <p className={styles.description}>
            Here are some of the key career paths available in the Oil and Gas
            industry:
          </p>
          <ul>
            <li>👉 Petroleum Engineer</li>
            <li>👉 Refinery Engineer</li>
            <li>👉 Safety Inspectors</li>
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
