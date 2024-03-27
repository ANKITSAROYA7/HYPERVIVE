import Image from 'next/image'
import React from 'react'
import { InstaLogo } from './comman_components/Icons'

const About = () => {
    return (
        <div>
            <div className=' container lg:max-w-[1138px] px-3 mx-auto  pt-[262px] '>
                <div className="flex flex-wrap mx-[-12px] items-center justify-center">
                    <div className=' lg:w-6/12 px-3 '>
                        <div  className=' relative' >
                            <Image src="/images/player_background.png" alt="lappy" width={539} height={516} />
                            <Image className='absolute bottom-0 left-[50%] right-[50%] -translate-x-[50%]' src="/images/person_pic.png" alt="lappy" width={484} height={663} />
                            
                        </div>
                    </div>
                    <div className=' lg:w-6/12 px-3 '>
                          <p className=' text-white  text-[30px] leading-[37px] font-bold pb-[14px]'>About the <span className=' text-[#FCE500]'>Author</span></p>
                          <p className=' text-lg font-normal leading-[28px] text-[#F2F2F3]'>Francesco is a Pro fitness coach currently working as head of Sport Science for Toronto FC Academy. He is a registered nutritionist, certified strength and conditioning specialist, holds a Master’s in exercise science and is a national level soccer coach.</p>
                          <p className=' text-lg font-normal leading-[28px] text-[#F2F2F3] py-[10px]'>He has been a personal performance coach to a 1000+ elite level footballers ranging from youth internationals all the way to top level pro’s</p>
                          <p className=' text-lg font-normal leading-[28px] text-[#F2F2F3]'>Francesco believes every footballer should have access to a rock-solid S&C program alongside a quality nutrition plan to improve the chances of crushing their genetic athletic potential and becoming the best version of themselves.</p>
                          <div className=' flex items-center pt-[10px]'>
                            <InstaLogo/>
                            <p className='text-[#F2F2F3] font-bold text-[26px] leading-[33px]  ps-[17px]' >Hypervive</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About