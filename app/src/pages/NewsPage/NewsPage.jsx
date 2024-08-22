import React from 'react'
import styles from './NewsPage.module.scss'
import { HeaderBackground } from '../../components/HeaderBackground/HeaderBackground'
import { MainWrapper } from '../../components/MainWrapper/MainWrapper'
import { GetNews } from '../../components/GetNews/GetNews'

export const NewsPage = () => {
  return (
    <section>
        <MainWrapper title='Nyheder'>
          <GetNews></GetNews>
        </MainWrapper>
      
    </section>
  )
}
