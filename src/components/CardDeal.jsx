import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";
const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Arcu totro , purrus in mattris at sed integer facibus, Aliquet quis
          aliquet eget mauris totor, Aliquet ultrices ac, ametau,
        </p>
        <Button styles={"mt-5"} />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="h-full w-full object-contain" />
      </div>
    </section>
  );
};

export default CardDeal;
