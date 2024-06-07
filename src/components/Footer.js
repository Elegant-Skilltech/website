import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.contactUs}>
              <h4 className={styles.heading}>Contact Us</h4>
              <p>Elegant Skilltech</p>
              <p>Janatha Rd, Palarivattom, Kochi</p>
              <p>Phone: 8848943505</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.followUs}>
              <h4 className={styles.heading}>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.facebook.com/profile.php?id=61559930794424"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon className={styles.socialIcon} />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSp9raIcl321sMyrkiTCxMw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className={styles.socialIcon} />
                </a>
                <a
                  href="https://www.linkedin.com/company/elegant-skill-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className={styles.socialIcon} />
                </a>
                <a
                  target="_blank"
                  href={"https://www.instagram.com/elegant._.official//"}
                >
                  <InstagramIcon className="cursor-pointer hover:text-white text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.colFull}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} Elegant Skilltech. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
