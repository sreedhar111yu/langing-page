import React from 'react'

const Footer = () => {
  return (
   <>
   <footer className="bg-yellow-500 text-white "> 
   <div className='flex flex-wrap py-12'>
    <div className='p-5 w-full text-white md:w-1/3'>
      <h2 className='font-extrabold text-2xl'>Foodiee</h2>
      <p className='text-white mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, autem id quae deserunt eveniet est iusto labore itaque delectus soluta sint odio beatae ratione tempore iure quo commodi nostrum similique?</p>
    </div>
    <div className='p-5 w-full text-white md:w-1/3'>
    <h2 className='font-bold text-xl'>Location</h2>
     <p className=' text-white mt-3'>
     address Line<br/>
      address Line<br/>
      address Line<br/>
      Pin Code:600072
     </p>
      


    </div>
    <div className='p-5 w-full text-white md:w-1/3'>
    <h2 className='font-bold text-xl'>Contact</h2>
     <p className=' text-white mt-3'>
     <a herf="tel:+912525777666">2525-777-666</a><br/>
      <a herf='mailto: foodiee@gamil.com'></a>foodiee@gamil.com<br/>
   
      
      
     </p>
    </div>
   </div>
   </footer>
   </>
  )
}

export default Footer