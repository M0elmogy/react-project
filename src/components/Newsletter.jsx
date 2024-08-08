import React from 'react'

function Newsletter() {
    return (
        <div className='w-full bg-black px-36 py-12 font-sans flex justify-center'>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="mt-12">

                    <h1 className='text-white md:text-2xl sm:text-2xl text-xl font-blod'>Want tipe & tricks to optimize your flow ? </h1>

                    <p className='text-white  font-sans'>sign up to our newsletter to stay up to date</p>
                </div>
                <div className="ml-8">
                    <input className='text-black    font-sans h-10 w-96 px-4 mt-8' type="email" placeholder='Enter Your Email' />
                    <button className='hover:bg-green-800 bg-green-500 text-white font-bold py-2 px-4 rounded-mdmx-auto mt-10 mb-28 ml-2'>Get Started</button>
                    <p className='text-white'>we can bout the protection of your data , read our <a className='text-green-500 ' href="">Privacy Policy</a></p>

                </div>
            </div>
        </div>
    )
}

export default Newsletter