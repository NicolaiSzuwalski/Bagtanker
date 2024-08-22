import React from 'react'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import { Slideshow } from '../../components/Slideshow/Slideshow'
import { HomeNews } from '../../components/HomeNews/HomeNews'
import { Header } from '../../components/Header/Header' 

import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <section className={styles.MainWrapper}>
    <Header></Header>
    <Slideshow></Slideshow>
    <HomeNews></HomeNews>

    </section>
  )
}
