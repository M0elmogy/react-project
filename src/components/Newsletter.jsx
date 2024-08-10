import React from 'react'

function Newsletter() {
    return (
        <div className='w-full bg-black px-36 py-12 font-sans   '>
            <div className="max-w-[1240px] grid lg:grid-cols-2- md:grid-cols-2    justify-center mx-auto w-50 px-   ">
                <div className="mt-12  w-full">

                    <h1 className='text-white md:text-2xl  text-xl font-blod'>Want tipe & tricks to optimize your flow ? </h1>

                    <p className='text-white  font-sans'>sign up to our newsletter to stay up to date</p>
                </div>
                <div >
                    <div className='flex py-8'>
                        <input className='text-black  w-60 h-10     font-sans  ' type="email" placeholder='Enter Your Email' />
                        <button className=' h-10  w-28 bg-green-800 hover:bg-green-500 text-white font-bold   '>Get Started</button>
                    </div>
                    <p className='text-white'>we can bout the protection of your data , read our <a className='text-green-500 ' href="">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter