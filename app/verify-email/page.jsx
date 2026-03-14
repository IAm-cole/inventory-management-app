import Link from 'next/link'
import React from 'react'

const EmailVerification = () => {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-gradient-to-b from-purple-50 to-cyan-100  '>
        <div className='p-20 bg-white shadow-xl                                                                '>
            <div className=' '>
                <p className='text-2xl capitalized font-semibold 
                '>Verify Email Address</p>
                <p>please enter your email address to verify</p>
                 
            </div> 
            <div className='flex items-center justify-center mt-5 gap-5 '>

          
            <form action="" className=''>
                 <input type="text" placeholder='input your email address'  className='border-2 border-black  rounded-lg py-3 px-10  w-full' />
            </form>
          
            
              </div>
              <div className="flex items-end justify-end gap-2  mt-5">
                 <button className='p-2 px-4 rounded-lg border-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold cursor-pointer  text-base '>Verify</button>
              <Link href="/signup-login" className='p-2 px-4 rounded-lg border-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold cursor-pointer'>cancel</Link>

              </div>
             
        </div>
    </div>
  )
}

export default EmailVerification