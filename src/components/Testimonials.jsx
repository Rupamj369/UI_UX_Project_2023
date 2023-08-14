import { feedback } from "../constants";
import styles, { layout } from "../style";
import Feedback from "./Feedback";
const Testimonials = () => {
  return (
    <section
      id="client"
      className={`${styles.flexCenter}  ${styles.paddingY} flex-col  relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%}rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center sm:mb-6 z-[1] mb-6 relative">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className=" w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the plant.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feekback-container relative z-[1]">
        {feedback.map((feed) => (
          <Feedback key={feed.id} {...feed} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
