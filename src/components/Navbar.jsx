import React, { useState } from 'react'
import { AiOutlineCloseCircle,AiOutlineMenuUnfold } from 'react-icons/ai'
export const Navbar = () => {
    const [nav , setNav]= useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className=' flex justify-between items-center h-24 max-auto text-white mt-2 mx-4'>
        <h1 className='w-full text-3xl font-bold text-[#7979ff] m-4'>Groww.</h1>
        <ul className='hidden md:flex items-center'>
            <li className='p-4 hover:font-bold ease-in duration-200 hover:text-2xl h-12'>Home</li>
            <li className='p-4 hover:font-bold ease-in duration-200 hover:text-2xl h-12'>Company</li>
            <li className='p-4 hover:font-bold ease-in duration-200 hover:text-2xl h-12'>Stocks</li>
            <li className='p-4 hover:font-bold ease-in duration-200 hover:text-2xl h-12'>Portfolio</li>
            <li className='p-4 hover:font-bold ease-in duration-200 hover:text-2xl h-12'>Contact</li>
        </ul>
        <div onClick = {handleNav} className='block md:hidden'>
            {nav ? <AiOutlineCloseCircle size={30}/> : <AiOutlineMenuUnfold size={30}/>}
        </div>
        <div className={ nav ? 'fixed left-0 top-2 w-[60%] h-full bg-[#1a1625] ease-in-out duration-700 m-4 rounded-lg md:hidden' : 'fixed -left-96' }>
        <h1 className='w-full text-3xl font-bold text-[#7979ff] m-4'>Groww.</h1>
            <ul className='pt-24 uppercase'>
            <li className='p-4 border-b border-slate-600 hover:bg-slate-600'>Home</li>
            <li className='p-4 border-b border-slate-600 hover:bg-slate-600'>Company</li>
            <li className='p-4 border-b border-slate-600 hover:bg-slate-600'>Stocks</li>
            <li className='p-4 border-b border-slate-600 hover:bg-slate-600'>Portfolio</li>
            <li className='p-4 hover:bg-slate-600'>Contact</li> 
            </ul>
        </div>
    </div>
  )
}
 