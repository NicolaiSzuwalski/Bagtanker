import React, { useEffect } from 'react'
import styles from './Footer.module.scss'
import FooterLogo from '../../assets/Images/FooterHeader.png'
import { SubmitNewsLetter } from '../SubmitNewsLetter/SubmitNewsLetter'

export const Footer = () => {


  return (
    <footer className={styles.FooterMain}>

      <section className={styles.FooterWrapper}>
        <div className={styles.Info}>

            <img src={FooterLogo} alt="FooterLogo" />

            <div>
              <p>Øster Uttrupvej 1</p>
              <p>9000 Aalborg</p>
            </div>

            <div>
              <p>Tlf : 12345678</p>
              <p>Email : info@bagtanker.dk</p>
            </div>

        </div>
        <div className={styles.newsLetter}>
        <SubmitNewsLetter></SubmitNewsLetter>
        </div>
      </section>

    </footer>
  )
}
