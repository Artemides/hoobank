import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 xl:px-0 sm:px-16 `}
      >
        <div className=" flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span>20%</span> Discount For <span>1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins flex-1 font-semibold text-white text-[52px] leading-[75px] ss:text-[72px] ss:leading-[100px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span> Payment Method
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} font-poppins text-white max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="relative">
            <img src={robot} alt="billing"  className="w-[100%] h-[100%] relative z-[5]"/>
            <div className=" absolute z-[0] w-[30%] h-[35%] top-0 left-1/3 pink__gradient">
            </div>
            <div className=" absolute z-[0] w-[60%] h-[75%] top-0 right-1/4 rounded-full white__gradient">
            </div>
            <div className=" absolute z-[0] w-[50%] h-[55%] bottom-0 left-1/3  blue__gradient">
            </div>
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
