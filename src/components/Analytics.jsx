import React from 'react'
import p1 from './images/p1.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 mt-6 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='sm: w-[300px] py-4' src={p1} alt="" style={{ width: "100%", height: "75%" }} srcset="" />
        <div className='ml-4 p-4 mt-8'>
          <h2 className='text-green-500 pb-6 font-sans text-2xl'> DATA ANALYTICE DASHDOARD</h2>
          <h1 className=' pb-6 font-bold text-2xl'>MANAGE DATA ANALYTICE CENTRALLY</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vitae? Veniam, odio doloremque! Voluptas quas quos saepe magnam assumenda? Fugit fuga reprehenderit recusandae, fugiat mollitia perspiciatis aut veritatis voluptas doloribus!</p>
          <button className='hover:bg-green-950 bg-black text-green-500 font-bold py-2 px-4 mx-auto rounded-md mt-4'>Get Started</button>
        </div>

      </div>
    </div>
  )
}

export default Analytics
