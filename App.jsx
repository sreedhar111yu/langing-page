import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Services from './Pages/Services'
import React from 'react'
import Footer from './Components/Footer'


const App = () => {
  return (
   <>
   <Navbar/>
   

   
   
   <Routes>
    <Route exact path='/'  element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/menu' element={<Menu />}/>
    <Route path='/services'element={<Services />}/>
    

   </Routes>
   <Footer/>

   </>
  )
}

export default App