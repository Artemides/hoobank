import React from "react";
import styles from "../style";
import { features } from "../constants";
import Button from "./Button";
const Business = () => {
  return (
    <section className={`${styles.flexCenter} flex-col gap-8 px-6 sm:flex-row my-8 sm:gap-[100px]`}>
      <div className={`${styles.flexStart} flex-col gap-6`}>
        <h2 className="text-[32px] sm:text-[48px] leading-8 text-white font-bold sm:leading-[48px]">
          You do the business,<br/> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} text-gray-400`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="self-center">
          <Button />
        </div>
      </div>
      <div className="">
        {features.map((feature) => (
          <div key={feature.id} className="flex gap-4 text-white pb-4 feature-card rounded-[16px] p-2 items-center ">
            <picture className={`${styles.flexCenter} shrink-0  bg-dimBlue rounded-full w-[64px] h-[64px] `}>
              <img src={feature.icon} alt="" className=" object-contain" />
            </picture>
            <div className={`${styles.flexStart} flex-wrap`}>
              <h3 className="font-bold text-[20px]">{feature.title}</h3>
              <p className={`${styles.paragraph}`}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Business;
