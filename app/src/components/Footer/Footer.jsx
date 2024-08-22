import React from 'react'
import styles from './Footer.module.scss'
import FooterLogo from '../../assets/Images/FooterHeader.png'

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
        <div className={styles.SignUp}>

            <h1>Tilmeld dig Bagtankers nyhedsbrev</h1>

            <p> Få vores nyheder direkte i din indbakke </p>

            <form className={styles.NewsletterForm}>
              <input 
                type="email" 
                placeholder="Indtast din email" 
                className={styles.EmailInput}
                required 
              />
          </form>
          <button type="submit" className={styles.SignUpButton}>
              Tilmeld
            </button>
            
        </div>
      </section>

    </footer>
  )
}
