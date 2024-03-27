import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    // <div className='bg-black'>
    //   {/* height and width attribute is mandatory in image component 
    //   if you give height and width and in class for that it will priortise first to the class value */}
    //   <Image src="/images/youtube.png" alt="Yt"  width={200} height={767}/>    
    //   {/* it work like a tag but we add to use this only on page ref */}
    //   <Link href="" >this work as a tag</Link>
    //   {/* if  we had to forward the user on another site like twitter
    //   for that we will use */}
    //   <a href="https://twitter.com/home"> only ancer tag</a>
    //   <Link href="./About" >about</Link>
    //   <Link href="./PageThird" >THIRDSECTION</Link>
    // </div>
    
    <div className='bg-hero bg-center bg-cover min-h-screen'>
      <div className=' container lg:max-w-[1138px] px-3 mx-auto  '>
        <nav className=' flex justify-between items-center py-[13px]'>
          <div className='flex items-center'>
            <Image src="/images/logo.png" alt="logo" width={31} height={33} />
            <p className=' text-white ps-2 ff_eurostile'>HYPERVIVE</p>
          </div>
          <div className='p-[6px] border border-[#FCE500] get_btn rounded-[1px]  inline-block relative after:absolute  after:bg-[#050505] after:h-[2px] after:w-[33px] after:left-[33px] after:bottom-[-1px] '>
            <button className=' bg-[#FCE500] text-black py-3 px-2 rounded-[1px]'>GET IN TOUCH</button>
          </div>
        </nav>
        <div className=' flex flex-wrap mx-[-12px] items-center pt-[109px] pb-[96px]  justify-center lg:justify-start'>
          <div className=' lg:w-[60%] px-3'>
            <p className=' text-white font-bold text-[45px] leading-[60px] font-euro ff_eurostile '>Get The eBook That Reveals The <span className=' text-[#FCE500]'>7 Fitness Myths</span> That Are Holding You Back From Experiencing Top-Level Fitness </p>
          </div>
          <div className=' lg:w-[40%] px-3 '>
            <Image className='' src="/images/hero_pic.png" alt="logo" width={338} height={475} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection


