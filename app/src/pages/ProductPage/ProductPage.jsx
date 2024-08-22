import React from 'react'
import { GetProducts } from '../../components/GetProducts/getProducts'
import { MainWrapper } from '../../components/MainWrapper/MainWrapper'
import styles from './ProductPage.module.scss'

export const ProductPage = () => {
  return (
    <>
    <section>
      <MainWrapper title='Produkter'>
        <GetProducts></GetProducts>
      </MainWrapper>
      
    </section>
    
    </>
  )
}
