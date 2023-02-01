import React from 'react'
import Image from 'next/image'

const Overview = () => {
  return (
    <div className='flex py-[80px] justify-between'>

    <div className='px-[60px] py-[20px] pt-[80px]'>
        <h1 className='font-bold text-[40px]'>
            Overview
            <hr className='bg-orange-500 h-1.5 w-[80px]'/>
        </h1>
        <p className='text-xl mt-8 w-[650px]'>
            A pen test{'(also known as a penetration test'} is a security assessment of an IT system, where potential vulnerabilities are identified to exploit them. It can be done using human or automated methods and may include testing servers, web apps, wireless networks, and other areas of potential exposure. The NIST SP 800-115 guide is often used to develop appropriate security processes and procedures and can be a helpful resource for pen testers when assessing organizational vulnerabilities.

        </p>
    </div>
    <Image
        src="/../public/assets/Overview.webp"
        alt="Picture of the author" 
        width={500}
        height={500}
        className='mr-[100px]'
        />
    </div>
  )
}

export default Overview