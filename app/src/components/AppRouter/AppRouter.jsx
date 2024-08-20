import {Route, Routes} from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import styles from './AppRouter.module.scss'


import React from 'react'

export const AppRouter = () => {
  return (
    <div className={styles.MainWrapper}>
    <Routes>
        <Route index element={<HomePage/>}></Route>
    </Routes>
    </div>
  )
}
