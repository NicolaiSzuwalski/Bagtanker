import {Route, Routes} from 'react-router-dom'
import { HomePage } from '../../pages/HomePage/HomePage'
import styles from './AppRouter.module.scss'
import { ProductPage } from '../../pages/ProductPage/ProductPage'
import React from 'react'
import { NewsPage } from '../../pages/NewsPage/NewsPage'
import { ContactPage } from '../../pages/ContactPage/ContactPage'
import { LoginPage } from '../../pages/LoginPage/LoginPage'

export const AppRouter = () => {
  return (
    <div className={styles.MainWrapper}>
    <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path='/Products' element={<ProductPage/>}></Route>
        <Route path='/News' element={<NewsPage/>}></Route>
        <Route path='/Contact' element={<ContactPage/>}></Route>
        <Route path='/Login' element={<LoginPage/>}></Route>
    </Routes>
    </div>
  )
}
