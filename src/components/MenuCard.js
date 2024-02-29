import React from 'react'
import img from './computer.png'

const MenuCard = ({active}) => {
  return (
    <div className=' mx-auto md:mx-0 md:w-[323px] bg-white rounded-xl h-[425px] flex flex-col justify-center items-center gap-10'>
        <img src={img} alt="computer" className='w-[141px] h-[103px] ' />
        <div className='flex flex-col  gap-2 px-3'>
            <div className='flex gap-1 text-sm font-inter text-[#074786] leading-5 self-start'>
                <p className='bg-[#f2f4f7] w-[107px] h-[28px] rounded-lg flex items-center justify-center '>20% Off</p>
                <p className='bg-[#f2f4f7] w-[107px] h-[28px] rounded-lg flex items-center justify-center '>Limited time</p>
            </div>
            <h2 className='text-center text-[#626379] leading-6 text-[16px] font-inter font-bold'>Webbuilder 1</h2>
            <p className='w-[80%] font-inter text-[16px] leading-6 text-[#626e79] self-start'>Computer Modern clasic with wix support</p>
            <div className='flex gap-3 self-start items-center'>
                <p className='text-[20px] leading-7 font-inter text-[#5c6874]'>$39.96</p>
                <span className='font-inter text-sm leading-5 text-[#9fa9b3]'>$49.96</span>
                <p className='text-[13px] leading-5 text-[#ef4c5d]'>(20% Off)</p>
            </div>
            <button className='transition-all duration-200 hover:scale-105 bg-[#1b88f4] text-center h-[42px] mt-1 text-[16px] text-white  leading-6 w-[292px] rounded-xl py-2 '>{active? 'View Deal' :'' }</button>
        </div>
    </div>
  )
}

export default MenuCard