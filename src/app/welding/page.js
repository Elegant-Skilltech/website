import React from "react";
import styles from "../CourseDetails.module.css";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Grid from "@mui/material/Grid";
import Footer from "@/components/Footer";
import Head from "next/head";

const WeldingCourse = () => {
  return (
    <>
      <Head>
        {/* Basic Metadata */}
        <title>Welding Courses</title>
        <meta
          name="description"
          content="Explore our comprehensive welding courses at Elegant Skilltech, including ARC, MIG, TIG, X-ray welding, and more. Enhance your skills and boost your career with our practical training programs."
        />
        <meta
          name="keywords"
          content="Welding, ARC Welding, MIG Welding, TIG Welding, X-ray Welding, Aluminium Welding, Welding Training, Welding Courses, Professional Welding"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Welding Courses" />
        <meta
          property="og:description"
          content="Explore our comprehensive welding courses at Elegant Skilltech, including ARC, MIG, TIG, X-ray welding, and more. Enhance your skills and boost your career with our practical training programs."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.elegantskilltech.com/welding"
        />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Welding Courses | Elegant Skilltech"
        />
        <meta
          name="twitter:description"
          content="Explore our comprehensive welding courses at Elegant Skilltech, including ARC, MIG, TIG, X-ray welding, and more. Enhance your skills and boost your career with our practical training programs."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <div className={styles.body}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Welding Courses</h1>
          <p className={styles.description}>
            വെൽഡിങ്ങിലെ വിജയകരമായ കരിയറിന് ആവശ്യമായ വൈദഗ്ധ്യവും അറിവും
            നിങ്ങൾക്ക് പ്രധാനം ചെയ്യുന്നതിനാണ് ഞങ്ങളുടെ വെൽഡിംഗ് കോഴ്സുകൾ
            രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്. ARC, MIG, TIG, X-ray വെൽഡിംഗ്,
            അലുമിനിയം വെൽഡിംഗ് എന്നിവയുൾപ്പെടെയുള്ള നിരവധി കോഴ്സുകൾ ഞങ്ങൾ
            വാഗ്ദാനം ചെയ്യുന്നു.
          </p>

          <h2 className={styles.subheading}>Courses Offered</h2>
          <ul>
            <li>👉 ARC / MIG / TIG (SMAW, GMAW, GTAW)</li>
            <li>👉 X-ray Welding</li>
            <li>👉 Aluminium Welding</li>
          </ul>

          <h2 className={styles.subheading}>Job Oriented Course</h2>
          <p className={styles.description}>
            ഞങ്ങളുടെ വെൽഡിംഗ് കോഴ്‌സുകൾ വിദ്യാർത്ഥികൾക്ക് വൈവിധ്യമാർന്ന വെൽഡിംഗ്
            പ്രക്രിയകളെക്കുറിച്ചും പ്രായോഗിക പരിശീലനത്തെക്കുറിച്ചും സമഗ്രമായ
            ധാരണ നൽകുന്നു. പ്രായോഗിക വൈദഗ്ധ്യത്തിനും തൊഴിൽ തയ്യാറെടുപ്പിനും
            ഊന്നൽ നൽകിക്കൊണ്ട് വ്യവസായ ആവശ്യങ്ങൾ നിറവേറ്റുന്നതിനും അവരുടെ
            വെൽഡിംഗ് കരിയറിൽ വിജയിക്കുന്നതിനും വിദ്യാർത്ഥികൾ തയ്യാറാണെന്ന്
            ഞങ്ങളുടെ പ്രോഗ്രാമുകൾ ഉറപ്പാക്കുന്നു.
          </p>
          <ul>
            <li>👉 ARC: Rs. 25,000/- (Duration: 20 days)</li>
            <li>👉 TIG: Rs. 20,000/- (Duration: 15 days)</li>
            <li>👉 MIG: Rs. 20,000/- (Duration: 15 days)</li>
            <li>👉 ARC/TIG/MIG: Rs. 50,000/- (Duration: 2 months)</li>
            <li>👉 Aluminium TIG Welding: Rs. 35,000/- (Duration: 20 days)</li>
          </ul>

          <h2 className={styles.subheading}>Practice Session Available</h2>
          <p className={styles.description}>
            നിങ്ങളുടെ വെൽഡിംഗ് കഴിവുകൾ മെച്ചപ്പെടുത്താൻ സഹായിക്കുന്നതിന് ഞങ്ങൾ
            മികച്ച പരിശീലന സെഷനുകളും നൽകുന്നു. ഈ സെഷനുകൾ പ്ലേറ്റുകൾക്കും
            പൈപ്പുകൾക്കും ലഭ്യമാണ്.
          </p>
          <ul>
            <li>👉 Per Plate: Rs. 1,500/-</li>
            <li>👉 Per Pipe: Rs. 2,000/-</li>
          </ul>

          <h2 className={styles.subheading}>Additional Facilities Available</h2>
          <ul>
            <li>👉 100% പ്ലേസ്മെൻ്റ് സഹായം</li>
            <li>👉 ഹോസ്റ്റൽ സൗകര്യം ലഭ്യമാണ്</li>
            <li>👉 ഒരു മാസത്തെ ഭക്ഷണവും താമസവും: രൂപ. 4,000/-</li>
            <li>👉 അംഗീകൃത സർട്ടിഫിക്കറ്റ്</li>
          </ul>
          <br />
          <div className={styles.buttonContainer}>
            <center>Chat with us for more details</center>
            <Grid container justifyContent="center">
              <Grid item>
                <button className={styles.enrollButton}>
                  <Link
                    href={"https://api.whatsapp.com/send/?phone=918089560442"}
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

export default WeldingCourse;
