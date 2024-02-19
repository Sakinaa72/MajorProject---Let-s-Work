import React from 'react'
import NavBar from './components/navbar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/home/HomeBanner/Home'

function RootLayout() {
  return (
    <div>
        <NavBar />
        <Home />
        <Footer />
    </div>
  )
}

export default RootLayout
