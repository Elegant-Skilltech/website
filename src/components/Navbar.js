"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  return (
    <div ref={navbar} className={styles.navbar}>
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <Image src="/logo.png" width={200} height={200} alt="company logo" />
        </Link>

        <div>
          <ul
            className={`${
              toggleMenu === true ? "left-0" : "-left-full"
            } bg-green text-white z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className="text-white md:hidden absolute top-6 right-5"
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "about Us", "features", "courses", "testimonial"].map(
              (link) => (
                <li
                  key={link}
                  className={`${
                    selectedItem === link ? "text-white" : ""
                  } capitalize border-b py-4 md:border-none md:py-0 hover:text-white`}
                  onClick={() => setSelectedItem(link)}
                >
                  <Link href={`#${link}`}>{link}</Link>
                </li>
              )
            )}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link
                href="https://www.facebook.com/profile.php?id=61559930794424"
                target="_blank"
              >
                <FacebookOutlinedIcon className="cursor-pointer hover:text-white text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/elegant-skill-tech/"}
              >
                <LinkedInIcon className="cursor-pointer hover:text-white text-xl" />
              </Link>
              <Link
                target="_blank"
                href={"https://www.instagram.com/elegant._.official//"}
              >
                <InstagramIcon className="cursor-pointer hover:text-white text-xl" />
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.youtube.com/channel/UCSp9raIcl321sMyrkiTCxMw"
                }
              >
                <YouTubeIcon className="cursor-pointer hover:text-white text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-4">
          <button className="capitalize text-sm sm:text-base border-2 hover:border-2 font-semibold sm:py-3 py-2 px-3 sm:px-6 text-white border-white hover:border-white hover:bg-white hover:text-blue-700 rounded-full">
            <Link href={"#courses"}>Explore Courses</Link>
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white" : "text-white"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
