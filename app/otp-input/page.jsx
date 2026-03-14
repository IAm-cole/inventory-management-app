import React from 'react'

const OTPinput = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                <div className='flex flex-col justify-center text-center font-semi-bold text-3xl'>
                    <p className=''>Email Verification</p>
                     <p className='text-base font-medium text-gray-700'>We have sent a code to your email </p>
                    <div >
                       
                    </div>
                </div>

                <div>
                    <form action="">
                        <div className="flex flex-col space-y-16"> 
                            <div className="flex flex-row items-center justify-between ">
                                <div className='w-16 h-16'>
                                    <input type="text" className='w-full h-full text-center text-3xl items-center border border-black' />
                                </div>
                                <div className='w-16 h-16'>
                                    <input type="text" className='w-full h-full  text-center text-3xl items-center border border-black' />
                                </div>
                                <div className='w-16 h-16'>
                                    <input type="text" className='w-full h-full  text-center text-3xl items-center border border-black' />
                                </div>
                                <div className='w-16 h-16'>
                                    <input type="text" className='w-full h-full  text-center text-3xl items-center border border-black' />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-4 '>
                             <button className='py-3 px-6 border-2 rounded-lg cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-gray-700 border-cyan-600 font-bold' >Send</button>
                        </div>
                       
                    </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OTPinput