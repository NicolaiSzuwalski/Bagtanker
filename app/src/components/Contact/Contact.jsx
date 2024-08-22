import React from 'react'
import styles from './Contact.module.scss'

export const Contact = () => {
  return (
    <div className={styles.ContactContainer}>
        <div className={styles.ContactForm}>
            <p>Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål.</p>
            
        <form>
          <div className={styles.FormGroup}>
            <input type="text" id="name" name="name" placeholder="Navn" required />
          </div>
          
          <div className={styles.FormGroup}>
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          
          <div className={styles.FormGroup}>
            <textarea id="message" name="message" rows="5" placeholder="Besked" required></textarea>
          </div>
          
          <button type="submit" className={styles.SendButton}>Send</button>
        </form>


        </div>
    </div>
  )
}
