import React from "react";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Head from "next/head";
import styles from "./Courses.module.css";

const Course = ({ description }) => {
  return (
    <div className="flex items-start gap-2">
      <CheckCircleIcon className="text-blue-600 text-xl mt-1" />
      <p className="text-sm">{description}</p>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const { title, description, image, link } = course;

  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{title}</h2>
        <span className={styles.description}>{description}</span>
      </div>
      <div className="mx-auto">
        <Link href={`/${link}`}>
          <button
            aria-label="Know More button"
            className="w-fit capitalize text-base hover:bg-green py-3 px-6 border-2 border-transparent rounded-full"
          >
            Know More
          </button>
        </Link>
      </div>
    </div>
  );
};

const Courses = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 10,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: true,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1,
  };

  return (
    <>
      <Head>
        <title>Our Courses</title>
        <meta
          name="description"
          content="Explore our diverse range of courses including AI and Data Science, Oil and Gas, CCTV Technician, Welding, MEP, BMS, and Industrial Electrician. Enhance your skills and secure your career with our comprehensive training programs."
        />
        <meta
          name="keywords"
          content="AI, Data Science, Oil and Gas, CCTV Technician, Welding, MEP, BMS, Industrial Electrician, Training Programs"
        />
        <meta name="author" content="Your Name" />

        <meta property="og:title" content="Our Courses" />
        <meta
          property="og:description"
          content="Explore our diverse range of courses including AI and Data Science, Oil and Gas, CCTV Technician, Welding, MEP, BMS, and Industrial Electrician. Enhance your skills and secure your career with our comprehensive training programs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/courses" />
        {/* <meta
          property="og:image"
          content="https://www.yourwebsite.com/images/courses-banner.jpg"
        /> */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Courses" />
        <meta
          name="twitter:description"
          content="Explore our diverse range of courses including AI and Data Science, Oil and Gas, CCTV Technician, Welding, MEP, BMS, and Industrial Electrician. Enhance your skills and secure your career with our comprehensive training programs."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.yourwebsite.com/images/courses-banner.jpg"
        /> */}
      </Head>
      <section
        className={`${styles.coursePage} relative container mx-auto px-5 md:px-16 flex flex-col gap-5`}
      >
        <div id="courses">
          <span className="service-name text-center">COURSES</span>
          <h2 className="title text-center">We offer trainings in</h2>
        </div>

        <Carousel {...carouselParams}>
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Courses;

const courses = [
  {
    title: "AI and Data Science",
    description:
      "Learn and Explore the trending new field of AI and Data Science.",
    image: "/images/aids.jpg",
    link: "AiDs",
  },
  {
    title: "Oil and Gas",
    description:
      "Learn and get your life secured by getting a job in the Oil and Gas Industry.",
    image: "/images/oil&gas.jpg",
    link: "oil-gas",
  },
  {
    title: "CCTV Technician",
    description: "Learn various aspects of CCTV installation and maintenance.",
    image: "/images/CCTV.jpg",
    link: "cctv",
  },
  {
    title: "Welding",
    description: "Learn the art of welding and fabrication.",
    image: "/images/welding.jpg",
    link: "welding",
  },
  {
    title: "MEP",
    description:
      "Learn about Mechanical, Electrical, and Plumbing and secure a job in the construction industry.",
    image: "/images/mep.jpg",
    link: "mep",
  },
  {
    title: "BMS",
    description:
      "Learn about Building Management Systems and secure a job in the construction industry.",
    image: "/images/bms.jpg",
    link: "bms",
  },
  {
    title: "Industrial Electrician",
    description: "Learn and secure a job as an Industrial Electrician",
    image: "/images/industrial-electrician.jpg",
    link: "IE",
  },
];
