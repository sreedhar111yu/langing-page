import React from 'react'
import img2 from '../image/img2.png'
import img3 from '../image/img3.jpg'
import img4 from '../image/img4.jpg'
import img5 from '../image/img5.png'
import chennai from '../image/chennai1.png'
import delhi from '../image/delhi1.png'
import hydrabaad from '../image/hydrabaad1.png'
import jaipur from '../image/jaipur1.png'
import mumbai from '../image/mumbai1.png'


const Services = () => {

 


  return (
   <>
   <div className='text-2xl font-serif font-bold text-yellow-500 justify-center text-center mt-2'>ORDER NOW</div>
    <div className='container mx-auto '>
      <div className='flex flex-wrap mt-5 justify-evenly  '>
      <div className='w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5'>
      <div className='bg-white p-10  rounded-full  '>
      <div className='flex justify-center'>
        <img className='rounded-full' src={img2} alt="" />
      </div>

      </div>
      </div>
      <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5  '>
      <div className='bg-white p-10  rounded-full '>
      <div className='flex justify-center'>
        <img className='rounded-full' src={img5} alt="" />
      </div>

      </div>
      </div>
      <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5  '>
      <div className='bg-white p-10  rounded-full  '>
      <div className='flex justify-center'>
        <img className='rounded-full' src={img4} alt="" />
      </div>
      </div>
      </div>
      </div>
    </div>
    <div className='text-2xl font-serif font-bold text-yellow-500 justify-center text-center mt-2'> POPULAR CITY</div>
    <div className='mx-auto container'>
      <div className='flex flex-wrap mt-2 justify-center '>
        <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5 '>
          <div className='bg-white'>
          <div className='flex justify-center'>
          <img src={chennai} alt="" />
        </div>
        <p className='py-2 text-center'>Chennai</p>
        </div>
        </div>
        <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5 '>
          <div className='bg-white'>
          <div className='flex justify-center'>
          <img src={delhi} alt="" />
        </div>
        <p className='py-2 text-center'>Delhi</p>
        </div>
        </div>
        <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5 '>
          <div className='bg-white'>
          <div className='flex justify-center'>
          <img src={hydrabaad} alt="" />
        </div>
        <p className='py-2 text-center'>Hydrabaad</p>
        </div>
        </div>
        <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5 '>
          <div className='bg-white'>
          <div className='flex justify-center'>
          <img src={jaipur} alt="" />
        </div>
        <p className='py-2 text-center'>Jaipur</p>
        </div>
        </div>
        <div className='flex w-1/2 lg:w-1/4 xl:w-1/5 py-5 lg:p-5 '>
          <div className='bg-white'>
          <div className='flex justify-center'>
          <img src={mumbai} alt="" />
        </div>
        <p className='py-2 text-center'>Mumbai</p>
        </div>
        </div>
        
      </div>
    </div>


 
   
   
    

    </>
  )
}

export default Services