import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => {
  return (
    <section className={`relative ${styles.flexCenter} flex-col text-white p-6`}>
      <div className={`${styles.flexCenter} flex-col font-poppins gap-6 sm:flex-row sm:gap-[100px]`}>
        <h2 className="text-[28px] font-bold textce">
          What people are saying about us
        </h2>
        <p className={`${styles.paragraph} max-w-[80%] self-start`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-col gap-6 my-6 sm:flex-row">
        {feedback.map((ft) => (
          <FeedbackCard key={ft.id} name={ft.name} title={ft.title} content={ft.content} img={ft.img} />
        ))}
      </div>
      <div className="absolute top-1/3 -right-1/2 w-[50%] h-[50%] blue__gradient">

      </div>
    </section>
  );
};

export default Testimonials;
