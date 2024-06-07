import styles from "./Features.module.css";

const FeatureCard1 = () => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        01
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">Training</h2>
      <p className="leading-loose">
        Our courses are handpicked to meet the global demand of workforce.
      </p>
    </div>
  );
};

const FeatureCard2 = () => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        02
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">
        Placement Assistance
      </h2>
      <p className="leading-loose">
        We provide placement assistance for our students in India and Middle
        East
      </p>
    </div>
  );
};

const FeatureCard3 = () => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        03
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">Certification</h2>
      <p className="leading-loose">
        We offer internationally recognized, government-approved CTDS
        certification for our students.
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section className={styles.customclass} id="features">
      <div className="flex flex-col gap-5 lg:gap-16 container mx-auto md:px-16 px-5 py-8 sm:py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
            Our Features
          </h2>
          <p className="mt-4">
            We are a one-stop solution for training and recruitment. We
            understand the importance of connecting our students with rewarding
            career opportunities upon completion of their courses.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          <div className="relative">
            <FeatureCard1 />
          </div>
          <div className="relative">
            <FeatureCard2 />
          </div>
          <div className="relative">
            <FeatureCard3 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
