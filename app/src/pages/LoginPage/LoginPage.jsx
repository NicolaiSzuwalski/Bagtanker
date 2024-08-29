import React from 'react'
import styles from './LoginPage.module.scss'
import { HeaderBackground } from '../../components/HeaderBackground/HeaderBackground'
import { MainWrapper } from '../../components/MainWrapper/MainWrapper'
import { Login } from '../../components/Login/Login'

export const LoginPage = () => {
  return (
    <section>
      <MainWrapper title='Login'>
        <Login/>
      </MainWrapper>
      
    </section>
  )
}
