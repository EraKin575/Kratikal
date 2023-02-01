import React from 'react'
import Image from 'next/image'

const CodeReview= () => {
  return (
    <div className='flex py-[60px] justify-between bg-gray-200'>

    <div className='px-[60px] py-[20px] pt-[80px]'>
        <h1 className='font-bold text-[40px]'>
            Code Review
            <hr className='bg-orange-500 h-1.5 w-[80px]'/>
        </h1>
        <p className='text-xl mt-8 w-[650px]'>
            Code review examines source code directly and reveals flaws that were missed during the first development stage. It is the procedure of auditing an application's source code to make sure the necessary security mesaures are present, performing as intended, and having been activated appropriately.
        </p>
        <p className='text-xl w-[650px]'>
            They are methodical evaluations of the code made to find defects,
            improve the quality of the code, and assist developers in learning the source code
        </p>
    </div>
    <Image
        src="/../public/assets/CodeReview.webp"
        alt="Picture of the author" 
        width={500}
        height={500}
        className='mr-[100px]'
        />
    </div>
  )
}

export default CodeReview