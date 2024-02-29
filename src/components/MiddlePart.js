import React from 'react'
import Top from './Top'
import Cards from './Cards'
import MenuCards from './MenuCards'

const MiddlePart = () => {
  return (
    <div className='md:w-[1024px] mx-auto bg-[#FBFCFD]'>
        <Top/>
        <Cards/>
        <MenuCards/>
    </div>
  )
}

export default MiddlePart