import React from 'react'
import Image from 'next/image'

const Benefits = () => {
    const items=[
        'Cost Saving',
        'Improve Code Quality',
        'Identify And Fix Vulnerabilities',
        'Maintaining Consistency',
        'Detection Of Errors',
    ]
    const benefits=items.map((item,idx)=>{
        return(
            <div className='justify-between w-[200px]'>
                <Image src={`/../public/assets/icon0${idx+1}.webp`} className='ml-[35%] p-2 bg-orange-100 rounded-full' alt="Picture of the author" width={70} height={70}/>
                <p className='text-xl '>{item}</p>
            </div>
        )
    })
  return (
    <div className='py-[60px]'>
        <div className='text-center text-3xl font-bold mt-[60px]'>
        <h1>Benefits Associated with Code Review</h1>
        <div className='ml-[47%]'>
        <hr className='bg-orange-500 h-1.5 w-[80px]'/>
        </div>
        <div className='flex justify-evenly mt-[80px] '>
        {benefits}
        </div>
        </div>
        
    </div>
  )
}

export default Benefits