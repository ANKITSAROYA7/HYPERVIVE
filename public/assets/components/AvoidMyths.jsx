import Image from 'next/image'
import React from 'react'

const AvoidMyths = () => {
    return (
        <div className='px-3  container lg:max-w-[1138px]  mx-auto pt-[312px]'>
            <div className=' rounded-[16px] bg-[#FCE500] relative lg:pb-[43px] lg:pt-[50px] lg:px-[50px] p-3 sm:p-5 '>
                <div className="flex flex-wrap mx-[-12px] items-center justify-center text-center lg:text-start ">
                    <div className=' lg:w-6/12 px-3 '>
                        <p className=' text-[45px] leading-[59px] font-bold text-[#010101]'>7 Fitness Myths to Avoid</p>
                        <p className=' text-lg leading-7 font-normal text-[#010101] pt-[10px]'>Grab your free copy now!</p>
                        <div className='p-[6px] border border-[#010101] get_btn rounded-[1px]  inline-block relative after:absolute  after:bg-[#FCE81D] after:h-[2px] after:w-[33px] after:left-[33px] after:bottom-[-2px] lg:mt-[32px] mt-5 '>
                            <button className=' bg-[#010101] text-white py-3 px-2 rounded-[1px] text-base leading-4 font-bold'>Download For Free</button>
                        </div>
                    </div>
                    <div className=' lg:w-6/12  pt-8 lg:pt-0 '>
                        <Image className='lg:absolute  top-[-118px] right-[-34px]' src="/images/avoid_pic.png" alt="lappy" width={658} height={438} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvoidMyths