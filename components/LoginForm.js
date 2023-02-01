import React,{useEffect,useState} from 'react'

const LoginForm = () => {

    const [formData,setData]=useState({
        name:'',
        email:'',
        phone:'',
        company:'',
        compliances:''
    })
    const formState=[
        'name',
        'email',
        'phone',
        'company',
        'compliances'

    ]
    

    const formItems=[
        'Full Name',
        'Business Email',
        'Phone Number',
        'Company Name',
        'Other Compliances Required'
    ]
    const handleChange=(e,index)=>{
        setData({
            ...formData,
            [formState[index]]:e.target.value
        })
    }



  return (
    <div className='bg-white shadow-sm rounded-2xl p-[40px]'>
        <h1 className='text-2xl font-semibold pb-10'>Enhance Your <span className='underline text-orange-400'>SECURITY</span></h1>
        <div className='space-y-4'>
        {
            formItems.map((item,index)=>{
                return(
                    <div class="relative">
    <input type="text" id={item} value={formData[formState[index]]} onChange={(e)=>{
        setData({
            ...formData,
            [formState[index]]:e.target.value
        })
    }} className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-bg text-gray-900 bg-gray-50 dark:bg-gray-700 border-2 appearance-none dark:text-white dark:border-gray-600 focus:border-orange-300 peer" placeholder=" " />
    <label for={item} className="absolute text- text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 bg-white px-1.5 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7">
        <span className='text-red-500'>*</span>
        {item}
    </label>
</div>
                )
            }
            )
        }
        </div>
        <button onClick={
            ()=>{
                console.log(formData)
            }
        }className='bg-pink-600 text-white rounded-lg w-[400px] py-[20px] mt-10'>Request <span className='underline'>FREE</span> consultation</button>
    </div>
  
  )
}


export default LoginForm