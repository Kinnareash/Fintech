import React from 'react'
import single from '../assets/single.png'
import  double from '../assets/double.png'
import triple from '../assets/triple.png'


export const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className ='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg bg-[#f2e9ff]  hover:scale-105 duration-300'>
              <img className ='w-20 mx-auto mt-[-3rem]' src ={single} alt =""/>
              <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
              <p className='text-center text-3xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'> 1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                
              </div>
                <button className='bg-[#7979ff] text-white font-bold  p-3 rounded-md'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg scale-105 bg-[#f2e9ff] hover:scale-125 duration-300'>
              <img className ='w-20 mx-auto mt-[-3rem]' src ={double} alt =""/>
              <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
              <p className='text-center text-3xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'> 1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                
              </div>
                <button className='bg-[#7979ff] text-white font-bold p-3 rounded-md'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 bg-[#f2e9ff]  rounded-lg hover:scale-105 duration-300'>
              <img className ='w-20 mx-auto mt-[-3rem]' src ={triple} alt =""/>
              <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
              <p className='text-center text-3xl font-bold'>$149</p>
              <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'> 1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                
              </div>
                <button className='bg-[#7979ff] text-white font-bold p-3 rounded-md'>Start Trail</button>
            </div>
        </div>
        
    </div>
  )
}
