import React from 'react'
import Image from 'next/image'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <div 
    
   
    className=" bg-[url('../public/assets/banner.webp')] bg-cover bg-no-repeat h-screen py-[30px] px-[60px]">
        <Image src="/../public/assets/ktlogo.webp" alt="Picture of the author" width={250} height={250} />
    <div className='flex text-xl mt-[50px]'>
    <div className='mr-[40px] mt-[110px]  w-[1300px] space-y-5'>
        <p1 className='text-orange-600'>Penetration Testing</p1>
        <p className='text-[40px] font-semibold w-[700px] h-[80px] leading-10'>
            Secure your IT systems with our expert penetration testing services
        </p>
        <h1>
            Identify and address vulnerabilities before they <br/> become a threat
        </h1>
        <div className='flex gap-8'>
            <div className='rounded-3xl shadow-xl flex p-[20px] items-center '>
                <div className='w-[60px] h-[60px] border-[6px] border-orange-400 rounded-full'>        
                </div>
                <div className='font-bold pl-5'>
                    <h1>600+</h1>
                    <h1>Applications Tested</h1>
                </div>
                


            </div>
            <div className='rounded-3xl shadow-xl flex p-[20px] items-center'>
                <div className='w-[60px] h-[60px] border-[6px] border-orange-400 rounded-full'>        
                </div>
                <div className='font-bold pl-5'>
                    <h1>100+</h1>
                    <h1>Website Secured</h1>
                </div>
                


            </div>
          
        </div>
    </div>
    <div>

    </div>
    <div>
                <LoginForm/>

            </div>
    </div>
    
    
        


    </div>
  )
}

export default LoginPage