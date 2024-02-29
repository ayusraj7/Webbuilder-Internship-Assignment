import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import ReactStars from 'react-rating-stars-component'
import { CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

const Card = ({data}) => {
    const [show,setShown]=useState(data.show);
    const star=data.star;
    const firstExample = {
        size:11,
        value:star,
        edit: false,
        isHalf:true
      };
    
  return (
    <div className=''>
        <div className={`rounded-lg  relative bg-white mx-auto  ${show?'h-auto':'h-auto md:h-[255px]'} flex flex-wrap justify-around gap-5   px-3 pb-3 md:w-full w-[90%]`}>
            <div className='left-[-2%] top-[14%] absolute w-[44px] h-[44px] text-[20px] text-[#626E79] leading-7 rounded-[50%] flex justify-center items-center border border-[#E1E4E6]'>{data.no}</div>
            {
                data.type === 'choice' && (<div className='w-[136px] px-1 py-1 absolute bg-[#ff7724] text-white text-[16px] font-inter leading-6 rounded-r-[8px] left-[-1%] top-[-4%] flex gap-1 items-center'> <CiTrophy size={20}/> <p>Best {data.type}</p></div>)
            }
            {
                data.type === 'Value' && (<div className='w-[136px] px-1 py-1 absolute bg-[#ff7724] text-white text-[16px] font-inter leading-6 rounded-r-[8px] left-[-1%] top-[-4%] flex gap-1 items-center'> <IoDiamondOutline size={20}/> <p>Best {data.type}</p></div>)
            }
            
            <div className=' w-[20%] flex flex-col justify-center items-center'>
                <img src={data.img} alt="" className='h-[103px] w-[141px]' />
                <p className='font-inter leading-5 text-[13px] text-[#626E79]'>{data.imgName}</p>
            </div>
            {/* middle section */}
            <div className='w-[50%] flex flex-col gap-2 py-3 h-full'>
                <p className='text-[16px] leading-6 text-[#4B5665]'><b className='font-bold'>{data.heading}</b>{data.text}</p>
                <div>
                    <h1 className='text-[16px] leading-6 text-[#2C384A] font-bold'>Main highlights</h1>
                    <p className={`pl-5 text-[#4B5665] leading-6 text-[16px] ${!show ? 'block':'hidden'}`}>{data.highlights}</p>
                </div>
                <div>
                    {show===true && (
                        <div>
                            <div className='ml-7 bg-[#FFF4ED] w-full rounded-xl px-2'>
                                <div className='flex gap-2 p-2 items-center '>
                                    <p className='text-[#1b88f4] px-1 bg-white font-inter text-[16px] leading-6 text-center p-1 rounded-md'>9.9</p>
                                    <p className='bg-[#FFF4ED] w-full font-inter text-[15px] text-[#4b5665] leading-6'>Building Responsive</p>
                                </div>
                                <div className='flex gap-2 p-2 items-center '>
                                    <p className='text-[#1b88f4] px-1 bg-white font-inter text-[16px] leading-6 text-center p-1 rounded-md'>9.9</p>
                                    <p className='bg-[#FFF4ED] w-full font-inter text-[15px] text-[#4b5665] leading-6'>Building Responsive</p>
                                </div>
                                <div className='flex gap-2 p-2 items-center '>
                                    <p className='px-1 text-[#1b88f4] bg-white font-inter text-[16px] leading-6 text-center p-1 rounded-md'>9.9</p>
                                    <p className='bg-[#FFF4ED] w-full font-inter text-[15px] text-[#4b5665] leading-6'>Building Responsive</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2 mt-5 '>
                                <h3 className=' mt-1 text-[#2c384a] font-inter text-[16px] leading-6'>Why we love it</h3>
                                <div className='flex gap-2'>
                                    <TiTick size={24} className='w-[24px] rounded-[50%] h-[24px] text-[#0855a1]  bg-[#ebf5ff]'/>
                                    <p className='font-inter text-[15px] leading-6 text-[#4b5665]'>Docmentation</p>
                                </div>
                                <div className='flex gap-2'>
                                    <TiTick size={24} className='w-[24px] rounded-[50%] h-[24px] text-[#0855a1]  bg-[#ebf5ff]'/>
                                    <p className='font-inter text-[15px] leading-6 text-[#4b5665]'>Easy Use</p>
                                </div>
                                <div className='flex gap-2'>
                                    <TiTick size={24} className='w-[24px] rounded-[50%] h-[24px] text-[#0855a1]  bg-[#ebf5ff]'/>
                                    <p className='font-inter text-[15px] leading-6 text-[#4b5665]'>Out Of Box</p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                <div className='flex gap-1 items-center '>
                    <p className='text-[#1b88f4] leading-6 text-[16px] font-inter' onClick={()=>setShown(!show)}>Show more</p>
                    <IoIosArrowDown size={16} className='text-[#1b88f4]'/>
                </div>
            </div>
            <div className='w-[26%]  flex flex-col md:gap-0 gap-11 justify-between items-center '>
                <div className='flex flex-col items-center gap-1 bg-[#F3F9FF] w-[135px] h-[118px] rounded-b-xl '>
                    <p className=' text-[#074786] font-inter text-[32px] leading-[48px]'>{data.grade}</p>
                    <p className='text-sm leading-5'>{data.comment}</p>
                    <ReactStars  {...firstExample}/>
                </div>
                <button className='transition-all duration-200 hover:scale-105 bg-[#1b88f4] leading-6 font-[16px] w-[232px] h-[48px] rounded-xl text-white'>View</button>
            </div>
            </div>

    </div>
  )
}

export default Card