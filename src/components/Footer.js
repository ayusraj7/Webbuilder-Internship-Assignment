import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const Footer = () => {
  return (
    <div className='bg-[#212731] sm:px-0 px-4 py-11 pb-14 '>
        <div className='font-inter md:w-[1024px] flex sm:flex-row flex-col flex-wrap leading-5 text-[#b6bdc4] text-sm mx-auto justify-around'>
            <div className='flex md:w-[50%] justify-between'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-inter text-[16px] leading-6 text-white'>CATEGORIES</h1>
                    <p>Web Builder</p>
                    <p>Hosting</p>
                    <p>Data Center</p>
                    <p>Robotic-Automation</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-inter text-[16px] leading-6 text-white'>CONTACT</h1>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Categories</p>
                    <p>About</p>
                </div>
            </div>
            <div className=' flex  gap-1 items-center  '>
                
                    <p className=' leading-5 font-inter text-sm'>United States</p>
                    <IoIosArrowDown  className=' text-[#E1E4E6] ' height={9} width={15}/>
                
            </div>

        </div>
    </div>
  )
}

export default Footer