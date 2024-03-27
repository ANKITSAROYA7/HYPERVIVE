import React from 'react'
import { InstaLogoFooter, Tiktok } from './comman_components/Icons'

const Footer = () => {
  return (
    <div className=' bg-[#0F0F0F] flex flex-col items-center justify-center mt-[-80px]'>
         <p className=' font-bold text-[26px] leading-[33px] text-[#F2F2F3] text-center pt-[152px]'>Hypervive</p>
         <p className=' font-normal text-sm leading-[23px] text-[#FFFFFF] text-center pt-[19px] pb-[17px]'>Connect with us on social media</p>
         <div className='gap-[10px] flex pb-6'>
            <Tiktok/>
            <InstaLogoFooter/>
         </div>
         <div className=' h-[1px] w-full bg-[#F2F2F3]'></div>
         <p className=' py-[10px] font-normal text-sm leading-[23px] text-center text-white'>Copyright © 2022 HyperVive | All Rights Reserved.</p>
    </div>
  )
}

export default Footer