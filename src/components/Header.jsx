import React from 'react'


function Header() {
    return (
        <div className='flex flex-col w-full ' >
            <p className=' md:text-3xl sm:text-2xl text-xl pt-32 w-full text-green-500 font-sans flex justify-center'>
                GROWING WITH DATA ANALYTICE
            </p>
            <h1 className=' md:text-5xl sm:text-4xl text-xl  pt-2 w-full text-white font-bold flex justify-center'>
                GROWING WITH DATA
            </h1>
            <div className='md:text-3xl sm:text-3xl text-xl pt-2 w-full text-white  font-sans flex justify-center'>
                <p>FAST , FLEXBLE , FINANCING </p>
            </div>
            <div >
                <p className=' px-10 pt-2 w-full text-green-800 font-sans flex justify-center'>monitor your data analytics to determine where your off budget is and  increase revenue   </p>
            </div>
            <button className='hover:bg-green-500 bg-green-700 text-white font-bold py-2 px-4  rounded-full mx-auto mt-10 mb-28'>Get Started</button>
        </div>


    )
}

export default Header