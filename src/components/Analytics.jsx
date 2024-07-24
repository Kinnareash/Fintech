import React from 'react'
import stock from '../assets/stock.jpg'

export const Analytics = () => {
  return (
    <div className='w-full bg-[#ffffff] py-16 px-4'>
        <div className='max-w-[1240 px] mx-auto grid md:grid-cols-2'>
            <img className='w-[600px] mx-auto my-4' src={stock} alt="/" />
            <div className=' flex flex-col justify-center'>
                <p className='text-[#7979ff] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
                <p>
                You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more.
                </p>
                <button className='bg-black w-52 rounded-md font-medium mx-auto my-6 py-3 text-white'>Get Started</button>

            </div>
        </div>
    </div>
  )
}
