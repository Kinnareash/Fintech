import React from 'react';
import { Navbar } from './Navbar';
import { ReactTyped } from 'react-typed';



export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[460px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className= 'text-[#7979ff] font-bold p-3'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold md:py-3'>Grow with time</h1>
            <div className='flex justify-center'> 
                <p className='md:text-3xl sm:text-3xl font bold py-3'>Fast, flexible financing for &nbsp;</p>
                <ReactTyped
                className='md:text-3xl sm:text-4xl font-bold py-3'
                strings = {[' BTB ', ' BTC ',' SASS ']} 
                typeSpeed={120}
                backSpeed={120}
                loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 py-3'>Monitor your data analytics to increase revenue for BTB, & SASS platforms.</p>
           <div>
           <button className='bg-[#7979ff] w-[150px]  rounded-md font-bold  my-10 py-3 text-white'>Get Started</button>
           </div>
        </div>    
    </div>
  )
}  
 