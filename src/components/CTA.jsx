import React from "react";
import style from "../style";
import { Button } from "../components";
const CTA = () => {
  return (
    <section
      className={`${style.flexCenter} ${style.marginY} ${style.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex flex-1 flex-col">
        <h2 className={`${style.heading2} `}>Let's try our service now!</h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments and grow your business
          anywhere on the plant.
        </p>
      </div>
      <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
