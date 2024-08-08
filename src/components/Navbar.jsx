import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex  items-center justify-around h-20 max-w-9000x mx-auto px-20 text-white'>
            <h1 className='w-full text-3xl text-green-500 font-sans'>
                DaTa-Finance
            </h1>
            <ul className=' hidden md:flex '>
                <li className='p-4 hover:text-green-500'>Home</li>
                <li className='p-4 hover:text-green-500'>Company</li>
                <li className='p-4 hover:text-green-500'>Resources</li>
                <li className='p-4 hover:text-green-500'>About</li>
                <li className='p-4 hover:text-green-500'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-80 h-full border-r border-r-gray-900 bg-zinc-900 ' : 'hidden'}>
                <h1 className='w-full text-3xl text-green-500 font-bold m-4'>
                    DaTa-Finance
                </h1>
                <ul className='pt-2 uppercase'>
                    <li className='p-4 border-b hover:text-green-500 border-green-950'>Home</li>
                    <li className='p-4 border-b hover:text-green-500 border-green-950'>Company</li>
                    <li className='p-4 border-b hover:text-green-500 border-green-950'>Resources</li>
                    <li className='p-4 border-b hover:text-green-500 border-green-950'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar