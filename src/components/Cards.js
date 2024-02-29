import React from 'react'
import img from './computer.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import Card from './Card';
const data=[
    {
        no:1,
        img:img,
        imgName:'Builder 1',
        type:'choice',
        heading:'WixPro 72-Inch Responsive Website Builder-',
        text:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
        highlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
        showmore:{
            9.9:'Building Responsive',
            8.9:'Cool',
            8.9:'Docs',
            text:['Documentation','Easy Use','Out of Box']
        },
        show:false,
        grade:9.8,
        comment:'Exceptional',
        star:5
    },
    {
        no:2,
        img:img,
        imgName:'Biulder',
        type:'Value',
        heading:'SiteCraft 68-Inch Ultimate Web Design Studio-',
        text:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
        highlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
        showmore:{
            9.9:'Building Responsive',
            8.9:'Cool',
            8.9:'Docs',
            text:['Documentation','Easy Use','Out of Box']
        },
        show:false,
        grade:9.5,
        comment:'Excellent',
        star:4.5
    },
    {
        no:3,
        img:img,
        imgName:'Builder 1',
        type:'simple',
        heading:'WixPro 72-Inch Responsive Website Builder-',
        text:'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
        highlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
        showmore:{
            9.9:'Building Responsive',
            8.9:'Cool',
            8.9:'Docs',
            text:['Documentation','Easy Use','Out of Box']
        },
        show:false,
        grade:9.3,
        comment:'Exceptional',
        star:5
    },
    {
        no:4,
        img:img,
        imgName:'CDK',
        type:'simple',
        heading:'CDK Responsive Builder:',
        text:'An extensive library of widgets and apps,and detailed step-by-step guides',
        highlights:'[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
        showmore:{
            9.9:'Building Responsive',
            8.9:'Cool',
            8.9:'Docs',
            text:['Documentation','Easy Use','Out of Box']
        },
        show:true,
        grade:9.8,
        comment:'Exceptional',
        star:5
    },
    
]
console.log('data',data[0])
const Cards = () => {
  return (
    <div className=''>
        <ul className='flex flex-wrap items-center p-2 mb-2'>
            <div className='flex items-center gap-2'>
                <li className='text-[#727d87] text-[13px] leading-5 font-inter'>Home</li>
                <MdKeyboardArrowRight className='text-[#5c6874] w-[24px] h-[24px] '/>
            </div>
            <div className='flex items-center gap-2'>
                <li className='text-[#727d87] text-[13px] leading-5 font-inter'>Hosting for all</li>
                <MdKeyboardArrowRight className='text-[#5c6874] w-[24px] h-[24px] '/>
            </div>
            <div className='flex items-center gap-1'>
                <li className='text-[#727d87] text-[13px] leading-5 font-inter'>Hosting</li>
                <MdKeyboardArrowRight className='text-[#5c6874] w-[24px] h-[24px] '/>
            </div>
            <div className='flex items-center gap-2'>
                <li className='text-[#727d87] text-[13px] leading-5 font-inter'>Hosting6</li>
                <MdKeyboardArrowRight className='text-[#5c6874] w-[24px] h-[24px] '/>
            </div>
            <div className='flex items-center gap-2'>
                <li className='text-[#727d87] text-[13px] leading-5 font-inter'>Hosting5</li>
                <MdKeyboardArrowRight className='text-[#5c6874] w-[24px] h-[24px] '/>
            </div>
            
        </ul>
        <div className='flex flex-col gap-11 md:mt-0 mt-[50px] md:gap-8'>
            
            
            {
                data.map((element,index)=>{
                   return (<Card data={element}/>)
                })
            }
        </div>
        

    </div>
  )
}

export default Cards