import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Card from './components/Card'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Explore from './components/Explore'
import Products from './components/Products'

function App() {

  return (
    <div className=' bg-vector1 bg-cover bg-center h-screen'>
      <Navbar />
      <Home />
      <Card />
      <Products />
      <Experience />
      <Explore />
      <Footer />
    </div>
  )
}

export default App
