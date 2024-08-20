import { useState } from 'react'
import './App.css'
import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Footer/Footer'
import { MainWrapper } from './components/MainWrapper/MainWrapper'


function App() {
 

  return (
    <>
    <MainWrapper>
      <AppRouter/>
    </MainWrapper>
    </>
      
  )
}

export default App
