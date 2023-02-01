import React,{useState} from 'react'
import Image from 'next/image'




const FAQ = () => {
    const dropdownStyle=''
    const [toggle,setToggle]=useState({
        toggle1:false,
        toggle2:false,
        toggle3:false
    })
  return (
    <div className='px-[40px] py-[40px]'>
        <div className='flex justify-center'>
            <hr 
            className='bg-orange-500 h-1.5 w-[40px] mt-[55px]'
            />
        <h1 className='py-[40px] text-3xl font-bold text-center'>FAQ</h1>
        <hr 
            className='bg-orange-500 h-1.5 w-[40px] mt-[55px]'
            />
        </div>
        <div className='space-y-8'>
        <div
         onClick={
                ()=>{
                    setToggle({
                        ...toggle,
                        toggle1:!toggle.toggle1,
                        
                    })
                }

        
         }
         className=''>
            <div className='flex w-[50%] justify-between'>
            <h1 className='text-2xl cursor-pointer'>What are the benefits of Penetration Testing? </h1>

            <Image src='/../public/assets/KO02G.png'
            width={30}
            height={5}
            className={`ml-[10px] ${toggle.toggle1 && `rotate-180`}`}
            alt="Picture of the author"
            />
            </div>
            <div className={`text-lg w-[900px] py-[30px] ${toggle.toggle1?`display-block`:`hidden`}`}>
            <p>With the help of penetration testing, you can quickly identify your security holes and take steps to close them before a hacker uses them against you. For companies of all sizes, penetration testing is very advantageous   </p>
            <ul className='list-disc pl-6'>
                <li>Prevent data breaches</li>
                <li>Follow the best security practices</li>
                <li>Enhance your reputation</li>
                <li>Meet Compliance</li>


            </ul>
            </div>

            
        </div>
        <div
            onClick={
                ()=>{
                    setToggle({
                        ...toggle,
                        toggle2:!toggle.toggle2,
                        
                    })
                }

            }
            className=''>
            <div className='flex w-[50%] justify-between'>
            <h1 className='text-2xl cursor-pointer'>How does a penetration work? </h1>

            <Image src='/../public/assets/KO02G.png'
            width={30}
            height={5}
            className={`ml-[10px] ${toggle.toggle2 && `rotate-180`}`}
            alt="Picture of the author"
            />
            
            </div>
        </div>
        <div
            onClick={
                ()=>{
                    setToggle({
                        ...toggle,
                        toggle3:!toggle.toggle3,
                        
                    })
                }

            }
            className=''>
            <div className='flex w-[50%] justify-between'>
            <h1 className='text-2xl cursor-pointer'>What are the factors while performing pen testing? </h1>

            <Image src='/../public/assets/KO02G.png'
            width={30}
            height={5}
            className={`ml-[10px] ${toggle.toggle3 && `rotate-180`}`}
            alt="Picture of the author"
            />
            
            </div>
        </div>
        </div>

        


    </div>
  )
}

export default FAQ