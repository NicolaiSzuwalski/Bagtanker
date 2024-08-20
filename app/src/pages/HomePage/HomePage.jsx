import React from 'react'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import { Slideshow } from '../../components/Slideshow/Slideshow'

import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <div>

    <ContentWrapper title='Nyheder'>
        <article>

        </article>
    </ContentWrapper>
    <Slideshow></Slideshow>

    </div>
  )
}
