import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <div className='bg-gray-200 w-screen pb-[60px]'>
    <div className='flex px-[80px] justify-between py-[60px]'>
        
        <div>
        <div className='pb-[30px]'> 
            <h1 className='text-4xl mb-[20px] font-semibold text-left'>Why Choose Us ?</h1>
            <hr className='bg-orange-500 h-1.5 w-[80px]'/>
        </div>
          <div className='text-xl  space-y-4'>
            <h1>✅Creating Compliance Policies and IT Security Strategies</h1>
            <h1>✅Sound record of delivering excellent cyber security solutions</h1>
            <h1>✅Precise Gap Analysis by our expert Penetesters</h1>
            <h1>✅Through Security Assessment</h1>
            <h1>✅Safeguard people, processes and technologies</h1>
            </div>
        </div>
        <Image
        src="/../public/assets/WhyChooseUs.webp"
        alt="Picture of the author"
        width={600}
        height={600}
        className='ml-[100px]'
        />
      
    </div>
    <div className=''>
    <button className='bg-pink-500 items-center text-2xl ml-[45%] text-white px-[30px] py-[10px] rounded-3xl h-[70px] w-[250px]'>☏ Book A Call</button>
    </div>
    </div>

  )
}

export default WhyChooseUs