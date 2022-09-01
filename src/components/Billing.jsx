import React from 'react'
import styles from '../style';
import {bill,apple,google} from '../assets';
const Billing = () => {
  return (
    <section className={`${styles.flexCenter} flex-col gap-5 px-6  sm:gap-[100px] sm:flex-row-reverse`}>
      <div className={`${styles.flexStart} flex-col gap-4 font-poppins text-white `}>
          <h3 className='text-[28px] font-bold'>
           Easily control your billing & invoicing.
          </h3>
          <p className={`${styles.paragraph}`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
          </p>
          <picture className={`${styles.flexCenter} flex-wrap w-full`}>
            <img src={apple} alt="apple store"  className='w-[128px] h-auto'/>
            <img src={google} alt="GooglePlay" className='w-[128px] h-auto'/>
          </picture>
      </div>
      <picture className='relative'>
          <img src={bill} alt="billing" />
          <div className=' absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient sm:blue__gradient'>
          </div>
      </picture>
    </section>
  )
}

export default Billing
