import React from 'react'
import './App.css'
import Header from './components/global/Header.jsx'
import { Outlet } from 'react-router-dom'
import Footer from './components/global/Footer.jsx'

const App = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App