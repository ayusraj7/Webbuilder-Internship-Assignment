import React from 'react'
import MenuCard from './MenuCard'

const MenuCards = () => {
  return (
    <div className='md:px-0 px-4 flex flex-col text-[#2c384a] leading-[44px] text-[32px] py-7 gap-9 '>
        <h1 className='md:px-0 px-3'>Related deals you might like for</h1>
        <div className='flex gap-6 flex-wrap '>
            <MenuCard active={false}/>
            <MenuCard active={true}/>
            <MenuCard active={true}/>
        </div>
        <div className='flex md:gap-0 gap-8 justify-between md:flex-row flex-col font-inter text-[32px] text-[#5c6874] mt-11 '>
            <p className='md:w-[40%]'>Sign up and get exclusive special deals</p>
            <div className='flex items-center '>
               <div className='w-[250px] px-3 md:w-[384px] bg-white rounded-l-xl'>
                <input type="search" name="" id=""  className='[all:unset]'/>
               </div>
                <button className='bg-[#1b88f4] transition-all duration-200 hover:scale-105 h-[52px] text-white text-sm leading-5 text-center rounded-r-lg p-4 '>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default MenuCards