import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";


function Footer() {

    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2  lg:grid-cols-4   gap-4  text-gray-300 ' >
            <div>
                <h1 className='w-full text-3xl text-green-500 font-sans'>
                    DaTa-Finance
                </h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ab nisi dignissimos animi magni eaque, mollitia nihil eligendi laborum error odit, repellendus exercitationem! Illo nulla architecto error tenetur quasi soluta!</p>
                <div className='flex justify-between md:w-[100%] w-[50%]  py-4 px-3'>
                    <FaFacebook size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithub size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>

            <div className=' lg:col-span-2 flex justify-between text-center' >
                <div>
                    <h5 className='text-green-500 text-xl font-sans'>   Solutions</h5>
                    <ul className=' '>
                        <li className='py-2 text-sm hover:text-green-500'>Analytice</li>
                        <li className='py-2 text-sm hover:text-green-500'>Markeing</li>
                        <li className='py-2 text-sm hover:text-green-500'>Commerce</li>
                        <li className='py-2 text-sm hover:text-green-500'>Insights</li>

                    </ul>
                </div>
                <div>
                    <h5 className='text-green-500 text-xl font-sans'>   Support</h5>
                    <ul className=' '>
                        <li className='py-2 text-sm hover:text-green-500'>Pricing</li>
                        <li className='py-2 text-sm hover:text-green-500'>Documentation</li>
                        <li className='py-2 text-sm hover:text-green-500'>Guides</li>
                        <li className='py-2 text-sm hover:text-green-500'>API Status</li>

                    </ul>
                </div>
                <div>
                    <h5 className='text-green-500 text-xl font-sans'>   Company</h5>
                    <ul className=' '>
                        <li className='py-2 text-sm hover:text-green-500'>About</li>
                        <li className='py-2 text-sm hover:text-green-500'>Blog</li>
                        <li className='py-2 text-sm hover:text-green-500'>Jobs</li>
                        <li className='py-2 text-sm hover:text-green-500'>Press</li>
                        <li className='py-2 text-sm hover:text-green-500'>Careers</li>

                    </ul>
                </div>
                <div>
                    <h5 className='text-green-500 text-xl font-sans'>   Legal</h5>
                    <ul className=' '>
                        <li className='py-2 text-sm hover:text-green-500'>Claim</li>
                        <li className='py-2 text-sm hover:text-green-500'>Policy</li>
                        <li className='py-2 text-sm hover:text-green-500'>Terms</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center h-10 rounded-lg     ">
                <input className='text-black     font-sans    ' type="email" placeholder='Enter Your Email' />
                <button className=' w-80  bg-green-800 hover:bg-green-500 text-white font-bold px-2    '>Get Started</button>

            </div>

        </div>

    )
}

export default Footer