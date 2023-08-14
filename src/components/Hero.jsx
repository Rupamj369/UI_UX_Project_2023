import React from "react";
import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex flex-col md:flex-row`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-10 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rouned-[10px] mb-2">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">20%</span>
            Discount For
            <span className="text-white">1 Month</span>
            Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[62px] text-[42px] text-white ss:leading-[70px] leading-[55px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Genereation</span>
          </h1>
          <div className="ss:flex  hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-semibold ss:text[68px] text-[52px] text-white ss:leading-[90px] leading-[65px] w-full">
          {" "}
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[400px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage reates ,
          annual fees.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <img
          src={robot}
          alt="robot"
          className="w-full h-full object-contain relative z-10 "
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] rounded-full bottom-20 blue__gradient" />
      </div>
      <div className={`ss:hidden  ${styles.flexCenter}`}>
        <GetStarted />{" "}
      </div>
    </section>
  );
};

export default Hero;
