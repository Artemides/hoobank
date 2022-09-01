import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section className={`${styles.flexCenter} flex-col justify-between gap-8 font-poppins p-6 m-4 bg-black-gradient rounded-[10px] sm:flex-row sm:p-24`}>
      <div className={`${styles.flexStart} flex-col space-y-6 `}>
        <h3 className="text-[32px] text-white font-bold ">Let’s try our service now!</h3>
        <p className={`${styles.paragraph} sm:max-w-[500px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default CTA;
