import React from 'react'
import Image from 'next/image'

const WhyKratikal = () => {
  return (
    <div className='flex justify-between pr-[60px] py-[80px] bg-gray-200 w-screen'>
        <Image src='/../public/assets/WhyKratikal.webp' alt="Picture of the author" width={500} height={500} className='ml-[100px]'/>
        <div className='items-left pl-[300px]'>
            <div className='pb-[40px]'>
                <h1 className='text-4xl pb-[20px] font-semibold text-left'>Why Kratikal ?</h1>
                <hr className='bg-orange-500 h-1.5 w-[80px]'/>

            </div>
            <h1 className='text-xl mr-[90px] '>Kratikal Tech offers manual and automated penetration testing services to identify vulnerabilities in your system. Our manual testing team uses techniques like social engineering phishing, and physical security testing for a more-in-depth evaluation. Our automated testing approach uses software tools to simulate an attack, but may not detect all vulnerabilities. Together, both methods provide a comprehensive and through security assessment</h1>
        </div>

    </div>
  )
}

export default WhyKratikal