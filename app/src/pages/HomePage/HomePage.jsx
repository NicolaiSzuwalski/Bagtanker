import React from 'react'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import { Slideshow } from '../../components/Slideshow/Slideshow'
import { HomeNews } from '../../components/HomeNews/HomeNews'

import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <section>
      
    <Slideshow></Slideshow>
    <HomeNews></HomeNews>

    </section>
  )
}
