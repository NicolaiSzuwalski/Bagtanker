import React from 'react'
import styles from './ContactPage.module.scss'
import { HeaderBackground } from '../../components/HeaderBackground/HeaderBackground'
import { MainWrapper } from '../../components/MainWrapper/MainWrapper'
import { Contact } from '../../components/Contact/Contact'

export const ContactPage = () => {
  return (
    <section>
      <MainWrapper title='Kontakt os'>
        <Contact></Contact>
      </MainWrapper>
      
    </section>
  )
}
