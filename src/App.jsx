import React from 'react'
import styles from './style'
import {Billing, Business, CardDeal, Clientes, CTA, Footer, Hero, Navbar, Stats, Testimonials} from './components';
export const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats></Stats>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <Business/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <CardDeal/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <Testimonials/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <Clientes/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingXd}`}>
      <div className={`${styles.boxWidth}`}>

        <Footer/>
      </div>
    </div>
    </div>
  )
}
