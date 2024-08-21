import React from 'react'
import styles from './HeaderBackground.module.scss'
import { CategoryNav } from '../CategoryNav/CategoryNav'

export const HeaderBackground = () => {
  return (
    <section>
      <div className={styles.BackgroundContainer}></div>

      <CategoryNav/>
    </section>
  )
}
