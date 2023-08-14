import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`font-medium px-6 py-4 bg-blue-gradient text-primary text-[18px] outline-none border-none ${styles} rounded-md`}
    >
      Get Started
    </button>
  );
};

export default Button;
