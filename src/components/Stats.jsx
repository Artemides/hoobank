import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => {
  return (
    <section className={`${styles.flexCenter}   flex-col ss:flex-row gap-6 my-8`}>
      {stats.map((stat) => (
        <div key={stat.id} className="font-poppins  text-white uppercase">
          <p className="font-bold text-[24px] leading-8 xs:text-[40]">
            {stat.value +" "}
            <span className="font-semibold text-[16px]  text-gradient xs:text-[24px]">{stat.title}</span>
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
