import React from 'react'
import { card } from '../assets'
import styles from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`${styles.flexCenter} flex-col gap-5 p-6 sm:flex-row lg:gap-[100px] `}>
      <div className={`${styles.flexStart} flex-col gap-4 font-poppins text-white sm:max-w-[460px]`}>
          <h3 className='text-[28px] font-bold'>
          Find a better card deal in few easy steps.
          </h3>
          <p className={`${styles.paragraph}`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <div className="self-center">
            <Button/>
          </div>
      </div>
      <picture className='relative'>
          <img src={card} alt="billing" />

      </picture>
    </section>
  )
}

export default CardDeal
