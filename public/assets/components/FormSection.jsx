import Image from 'next/image'
import React from 'react'

const FormSection = () => {
    return (
        <div>
            <div className=' container lg:max-w-[1138px] px-3 mx-auto  '>
                <div className="flex flex-wrap mx-[-12px] items-center justify-center pb-[168px]">
                    <div className=' lg:w-6/12 px-3 '>
                        <Image src="/images/labtop__pic.png" alt="lappy" width={530} height={472} />
                    </div>
                    <div className=' lg:w-6/12 px-3 '>
                        <div className='lg:ps-[50px] flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start'>
                            <p className=' font-bold text-[30px] leading-[37px] text-white pb-[29px] '>Let me know where <span className=' text-[#FCE500]'>you want me to send it</span></p>
                            <input className='bg-[#191919] rounded-[3px] border-[#707070] border-[0.5px] w-full pt-[16px] pb-[12px] ps-[22px] focus:border-[#FCE500] focus:outline-none text-white' placeholder='Name' type="text" />
                            <input className='bg-[#191919] rounded-[3px] border-[#707070] border-[0.5px] w-full pt-[16px] pb-[12px] ps-[22px] mt-[13px] text-white focus:border-[#FCE500] focus:outline-none' placeholder='Email' type="Email" />
                            <div className='p-[6px] border border-[#FCE500] get_btn rounded-[1px]  inline-block relative after:absolute  after:bg-[#050505] after:h-[2px] after:w-[33px] after:left-[33px] after:bottom-[-1px] mt-[47px] '>
                                <button className=' bg-[#FCE500] text-black py-3 px-2 rounded-[1px] text-base leading-4 font-bold'>Send It Here!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSection