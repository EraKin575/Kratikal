import React from 'react'

const ContactUs = () => {
  return (
    <div className="space-y-[40px] bg-[#152238] pt-[40px] pb-[40px] text-base rounded-md">
        <h1 className='text-3xl font-semibold text-center  text-pink-600'>Contact Us</h1>
        <div className='flex justify-center text-white text-base'>
            <div className=''>
            <div className='flex'>
                <h1>🇺🇸UNITED STATES</h1>
            </div>
            <p className='w-[70%]'>400 W Peachtree ST NW Atlanta GA, 30308, USA</p>
            </div>

        
        
            <div className=''>
            <div className='flex'>
                <h1>🇮🇳INDIA</h1>
            </div>
            <p className='w-[70%]'>B-70,Second Floor-67, Noida-201301</p>
            </div>
            <div className=''>
            <div className='flex'>
                <h1>✉FOR SALES</h1>
            </div>
            <p className='w-[70%]'>EMail:tejaskumar574@gmail.com</p>
            <p>🇮🇳 {'(+91)9289192210'}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ContactUs