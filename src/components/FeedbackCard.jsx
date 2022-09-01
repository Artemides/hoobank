import React from "react";
import { quotes } from "../assets";
import styles from "../style";
const FeedbackCard = ({ name, title, content, img }) => {
  return (
    <section className={`${styles.flexCenter} feedback-card rounded-[10px] max-w-[300px] font-poppins p-4`}>
      <div className="space-y-4">
        <img src={quotes} alt={name} className="w-[24px] h-[24px]" />
        <p className={`${styles.paragraph}`}>{content}</p>
        <div className={`${styles.flexStart} gap-6`}>
          <img src={img} alt="" className="w-[48px]" />
          <div >
            <h3 className="font-semibold">{name}</h3>
            <small className="text-gray-400 ">{title}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCard;
