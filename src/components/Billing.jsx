import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-10 -left-1/2   top-0 h-[50%] w-[50%] rounded-full white__gradint " />
        <div className="absolute z-0 -left-1/2   bottom-0 h-[50%] w-[50%] rounded-full pink__gradint " />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily Control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph}`}>
          Elite en imm sed assa etiam, Maris eu adipiscing ultrices ametodio
          aeneasn neque, Fucse ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple__store"
            className="w-[128px] object-contain cursor-pointer  mr-5"
          />{" "}
          <img
            src={google}
            alt="google__store"
            className="w-[128px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
