import { useState } from 'react'
import './App.css'
import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Footer/Footer'
import { MainWrapper } from './components/MainWrapper/MainWrapper'
import { Header } from './components/Header/Header'


function App() {
 

  return (
    <>
    <Header/>
      <AppRouter/>
    </>
      
  )
}

export default App
