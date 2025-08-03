import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Featured from './pages/Featured'
import NavBar from './components/NavBar'
import React from 'react';
import Footer from './components/Footer'


function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar/>
        <main className="flex-1">
          <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/about' element={ <About/>}/>
            <Route path='/contact' element={ <Contact/>}/>
            <Route path='/services' element={ <Services/>}/>
            <Route path='/featured' element={ <Featured/>}/>
          </Routes>
        </main>
        <Footer/>
        
        
      </div>
      
    </>
  )
}

export default App
