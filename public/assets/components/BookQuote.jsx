import Image from 'next/image'
import React from 'react'

const BookQuote = () => {
    return (
        <div className=' bg-quote bg-center bg-cover bg-no-repeat'>
            <div className=' container lg:max-w-[1138px] px-3 mx-auto  py-12 '>
                <div className="flex flex-wrap mx-[-12px] items-center justify-center">
                    <div className=' lg:w-8/12 px-3 '>
                        <p className=' text-[#010101] leading-[49px] text-[30px] font-bold'>With the right knowledge maintaining and improving your fitness becomes effortless and enjoyable. Stop wasting time you don’t have!</p>
                    </div>
                    <div className=' lg:w-4/12 px-3 '>
                    <Image src="/images/quote_book.png" alt="lappy" width={310} height={427} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookQuote