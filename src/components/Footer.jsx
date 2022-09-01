import React from "react";
import styles from "../style";
import { footerLinks,socialMedia} from "../constants";
import { logo } from "../assets";
const Footer = () => {
  return (
    <footer className="flex flex-col  p-4 gap-6 ">
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div>
          <img src={logo} alt="hoobank" className="w-[150px] h-auto" />
          <p className={`${styles.paragraph} px-4 max-w-[500px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex flex-1  flex-row justify-center font-poppins gap-2 md:justify-around ">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="flex flex-col ">
              <h3 className="text-[18px] text-white text-center font-semibold">{footerLink.title}</h3>
              <ul className="list-none text-[14px]  text-dimWhite ">
                {footerLink.links.map((link, j) => (
                  <li key={j} className="hover:text-secondary ">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 text-white font-poppins text-dimWhite border-t-2 border-dimWhite py-2 md:flex-row md:justify-between md:items-center">
        <small> Copyright &copy; 2021 HooBank. All Rights Reserved.</small>
        <ul className="flex gap-6">
            {socialMedia.map((media)=>
            (
              <img key={media.id} src={media.icon} className="w-[24px] h-[24px] cursor-pointer" alt={media.id} />
            ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
