import React from 'react'
import Button from '../layouts/Button'

export default function Home({ data }) {
  return (
    <div style={{backgroundImage: data.img}} className='flex items-center w-full h-screen bg-no-repeat bg-center px-20' id='Home'>
      <div className='flex flex-col gap-y-8'>  
        <span className='text-4xl text-white tracking-widest font-serif'>{data.title}</span>
        <span className='text-xl text-white max-w-80 font-serif tracking-wider leading-8'>{data.description}</span>
        <Button title={"Order Now"} />
      </div>
    </div>
  )
}
