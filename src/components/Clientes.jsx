import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clientes = () => {
  return (
    <section className={`${styles.flexCenter} flex-col gap-[48px] my-10 sm:flex-row `}>
    {clients.map((client) => (
      <img
        className="w-[150px] h-[48px] object-contain cursor-pointer md:w-[200px] md:h-auto"
        key={client.id}
        src={client.logo}
        alt={client.logo}
      />
    ))}
  </section>
  )
}

export default Clientes
