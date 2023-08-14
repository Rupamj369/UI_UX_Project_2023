import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[130px] h-[130px] bg-blue-gradient rounded-full p-[4px]`}
    >
      <div
        className={`${styles.flexCenter}  flex-col w-full h-full rounded-full bg-primary`}
      >
        <div className={`${styles.flexStart} flex-row gap-2`}>
          <p className="font-medium text-[24px] leading-[23px]">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowup"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-medium text-[24px]  leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
