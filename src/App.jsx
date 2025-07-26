import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Featured from './pages/Featured'
import NavBar from './components/NavBar'
import React from 'react';


function App() {

  return (
    <>
      <div className='mx-4 sm:mx-[10%]'>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/contact' element={ <Contact/>}/>
          <Route path='/services' element={ <Services/>}/>
          <Route path='/featured' element={ <Featured/>}/>
        </Routes>
        
        
      </div>
      
    </>
  )
}

export default App
