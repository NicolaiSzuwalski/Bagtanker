import React from 'react'
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper'
import { Header } from '../../components/Header/Header'
import styles from './Homepage.module.scss'

export const HomePage = () => {
  return (
    <div>

    <Header/>
    <ContentWrapper title='Nyheder'>
        <article>

        </article>
    </ContentWrapper>
    </div>
  )
}
