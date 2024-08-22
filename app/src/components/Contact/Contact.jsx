import React from 'react'
import styles from './Contact.module.scss'
import map from '../../assets/Images/Map.png'

export const Contact = () => {
  return (
    <div className={styles.ContactContainer}>

        <div className={styles.ContactForm}>
            <p>Udfyld og send formularen og vi vil hurtigst muligt besvare dine spørgsmål.</p>
        <form>
            <input type="text" id="name" name="name" placeholder="Indtast dit navn" required />
         
            <input type="email" id="email" name="email" placeholder="Indtast din email" required />
         
            <textarea id="message" name="message" rows="5" placeholder="Skriv en besked" required></textarea>
    
            <button type="submit" className={styles.SendButton}>Send</button>
        </form>
        </div>
        <div className={styles.Map}>
            <img src={map} alt="map" />
        </div>

    </div>
  )
}
