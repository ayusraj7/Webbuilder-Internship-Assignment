import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-[#212731] h-auto p-3 md:p-0  md:h-[64px] flex flex-wrap items-center text-sm font-normal leading-5  '>
        <div className='font-inter w-[1024px] mx-auto text-white flex justify-around items-center sm:flex-row sm:gap-0 gap-3 flex-col flex-wrap'>
            <div className='w-[258px] h-9 px-2 text-[#626E79] bg-white flex rounded-lg items-center border  border-[#e1e4e6] '>
                <IoSearchOutline size={24}/>
                <input type="search" name="" id=""  className='[all:unset]'/>
            </div>
            <Link to='#' className=''>Categories</Link>
            <Link to='#'>Website Builders</Link>
            <Link to='#'>Today's deals</Link>
        </div>
    </div>
  )
}

export default Navbar