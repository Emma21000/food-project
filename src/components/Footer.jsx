import React from 'react'
import { Link } from 'react-scroll'

export default function Footer({ data }) {
  return (
    <div className='w-full grid lg:grid-cols-4 grid-cols-1 px-16 py-14 bg-[#839791] text-white'>
    <div className='flex flex-col'>
      <h3 className='text-2xl pb-4 font-serif'>{data.title}</h3>
      <h3 className='text-base font-serif md:w-80'>{data.description}</h3>
    </div>
        {data.list.map((elem,index)=>(
          <div key={index} className='flex flex-col lg:mx-auto'>
            <Link href='#' className='text-2xl font-serif pb-4 tracking-widest' >{elem.title}</Link>
            {elem.path.map((item,idx)=>(
              <Link className='text-base font-light font-mono pb-2' href='#' key={idx}>{item.name}</Link>
            ))}
          </div>
        ))}
    </div>
  )
}