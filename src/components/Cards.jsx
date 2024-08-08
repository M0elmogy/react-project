import React from 'react'
import single from "./images/single.jpg"
import double from "./images/double.jpg"
import triple from "./images/triple .jpg"

function Cards() {
    return (
        <div className='w-full bg-white  px-4 py-[10rem]  '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full  bg-gray-400 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="" srcset="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$159</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>55670GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='hover:bg-green-500 bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full  bg-gray-400  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="" srcset="" />
                    <h2 className='text-2xl font-bold text-center py-8'>double User</h2>
                    <p className='text-center text-4xl font-bold'>$169</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>350GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='hover:bg-green-500 bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
                <div className='w-full  bg-gray-400  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" srcset="" />
                    <h2 className='text-2xl font-bold text-center py-8'>triple User</h2>
                    <p className='text-center text-4xl font-bold'>$179</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>5457GB Storage</p>
                        <p className='py-2 border-b mx-8'>1 Granted User</p>
                        <p className='py-2 border-b mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='hover:bg-green-500 bg-green-700 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            </div>


        </div>


    )
}

export default Cards