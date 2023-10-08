import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
 
import { Link } from 'react-router-dom'

const Navbar = () => {

    const[toggle,setToggle]=useState(false)
    const handleclick =()=> setToggle(!toggle)



  return (
    <>
    <div className='w-full h-[80px] bg-white '>
        <div className='max-w-[1280px]  m-auto w-full h-full flex justify-between items-center'>
            <p className='font-bold text-3xl font-serif  text-yellow-500'>Foodiee

           
            </p>
            
            <nav className=''>
            <ul className=' hidden md:flex gap-8 font-bold '>
                <li className='hover:text-yellow-500'><Link to='/'>Home</Link></li>
                <li className='hover:text-yellow-500'><Link to='/about'>About</Link></li>
                <li className='hover:text-yellow-500'><Link to='/menu'>Menu</Link></li>
                <li className='hover:text-yellow-500'><Link to='/services'>Services</Link></li>
            </ul>

            </nav>
            <div className='hidden md:flex'>
                <button className='items-center justify-between px-6 gap-2'><Link to='/login'>Login</Link></button>
                <button className='px-8 py-3 rounded font-bold text-white bg-yellow-500'><Link to='/signup'>Sign up</Link></button>
            </div >
            <div className='md:hidden mr-5 flex text-2xl float-end' onClick={handleclick}>
            <FontAwesomeIcon icon={toggle?open:faBars} />
            <div className={toggle?close:'hidden'}>
            <FontAwesomeIcon icon={faXmark} />

            </div>
            

            </div>
          
           </div>
           <div >
            <ul className={toggle?'absolute z-10 p-4 bg-white space-y-4 w-full font-bold md:hidden':'hidden'}>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'> <Link to='/'>Home</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='/about'>About</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='/menu'>Menu</Link></li>
            <li className='hover:text-yellow-500 p-4 hover:bg-gray-100'><Link to='services'>Services</Link></li>

            <div className=''>
                <button className='items-center hover:text-pink-600  justify-between px-6 gap-2'>Login</button>
                <button className='px-8 py-3 rounded font-bold text-white bg-yellow-500 '><Link to='/signup'> Sign Up</Link></button>
            </div >
                
            </ul>
           
           </div>
          


        

    </div>
    </>
  )
}

export default Navbar