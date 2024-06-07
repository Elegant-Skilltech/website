import Head from "next/head";

const Main = () => {
  return (
    <>
      <Head>
        {/* Basic Metadata */}
        <title>Elegant Skilltech</title>
        <meta
          name="description"
          content="Join our professional training programs in AI and Data Science, Welding, BMS, Industrial Electrician, CCTV, and more. Start your career with our comprehensive courses."
        />
        <meta
          name="keywords"
          content="Training, AI, Data Science, Welding, BMS, Industrial Electrician, CCTV, Professional Courses, Career Training, Elegant Skilltech"
        />
        <meta name="author" content="Elegant Skilltech" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Elegant Skilltech" />
        <meta
          property="og:description"
          content="Join our professional training programs in AI and Data Science, Welding, BMS, Industrial Electrician, CCTV, and more. Start your career with our comprehensive courses."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.elegantskilltech.com" />
        {/* <meta
          property="og:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elegant Skilltech" />
        <meta
          name="twitter:description"
          content="Join our professional training programs in AI and Data Science, Welding, BMS, Industrial Electrician, CCTV, and more. Start your career with our comprehensive courses."
        />
        {/* <meta
          name="twitter:image"
          content="https://www.elegantskilltech.com/path-to-your-image.jpg"
        /> */}
      </Head>

      <section
        className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
        id="home"
      >
        <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
          <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
            <p>
              <span className="redShade">Stop </span>
              <span className="blueShade">Dreaming</span>
            </p>
            <p>
              <span className="blueShade">Start </span>
              <span className="redShade">Doing</span>
            </p>
          </h1>
          <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
            We are here to help you achieve your dreams
          </p>
          <blockquote className="text-lg italic">
            &quot;Choose a job you love, and you will never have to work a day
            in your life&quot; - Confucius
          </blockquote>
        </div>
      </section>
    </>
  );
};

export default Main;
